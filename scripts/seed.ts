import * as dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: "config/.env.local" });
import * as fs from "node:fs";
import * as path from "node:path";
import { encode, decode } from "gpt-tokenizer";
import { embed } from "../api/lib/engine";
import { getIndex } from "../api/lib/pinecone";

const CONTENT_DIR = path.join(process.cwd(), "content");

const SECTION_MAP: Record<string, string> = {
  "about.md": "about",
  "career.md": "work",
  "mba.md": "education",
  "skills.md": "skills",
  "projects.md": "projects",
  "achievements.md": "achievements",
  "personality.md": "personality",
  "interests.md": "interests",
  "faq.md": "faq",
  "contact.md": "contact",
};

type Chunk = {
  id: string;
  text: string;
  source: string;
  section: string;
  title: string;
  chunkIndex: number;
};

function splitSections(
  raw: string,
  fileTitle: string,
): { title: string; text: string }[] {
  const lines = raw.split("\n");
  const sections: { title: string; text: string }[] = [];
  let curTitle = fileTitle;
  let buf: string[] = [];
  for (const line of lines) {
    const m = line.match(/^##\s+(.*)$/);
    if (m) {
      if (buf.length) sections.push({ title: curTitle, text: buf.join("\n").trim() });
      curTitle = m[1].trim();
      buf = [];
    } else {
      buf.push(line);
    }
  }
  if (buf.length) sections.push({ title: curTitle, text: buf.join("\n").trim() });
  return sections;
}

function chunkText(text: string, maxTokens = 450, overlap = 80): string[] {
  const ids = encode(text);
  if (ids.length <= maxTokens) return [text.trim()];
  const out: string[] = [];
  let start = 0;
  while (start < ids.length) {
    const end = Math.min(start + maxTokens, ids.length);
    out.push(decode(ids.slice(start, end)).trim());
    if (end === ids.length) break;
    start = Math.max(0, end - overlap);
  }
  return out;
}

async function main() {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));

  const chunks: Chunk[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const fileTitle = (raw.match(/^#\s+(.*)$/m)?.[1] || file).trim();
    const section = SECTION_MAP[file] || "about";
    const sections = splitSections(raw, fileTitle);
    let idx = 0;
    for (const sec of sections) {
      for (const part of chunkText(sec.text)) {
        if (!part) continue;
        chunks.push({
          id: `${file}#${idx}`,
          text: part,
          source: file,
          section,
          title: sec.title,
          chunkIndex: idx,
        });
        idx++;
      }
    }
  }

  console.log(`Prepared ${chunks.length} chunks from ${files.length} files.`);

  const embeddingProvider = (
    process.env.EMBEDDING_PROVIDER || "gemini"
  ).toLowerCase();
  const embedModel =
    process.env.EMBEDDING_MODEL ||
    (embeddingProvider === "openai"
      ? "text-embedding-3-small"
      : "text-embedding-004");
  const index = getIndex();

  let expectedDim: number | undefined;
  try {
    const stats = await index.describeIndexStats();
    if (typeof stats.dimension === "number") expectedDim = stats.dimension;
  } catch {
    // describeIndexStats may be unavailable on some plans; skip the guard.
  }

  const BATCH = 100;
  for (let i = 0; i < chunks.length; i += BATCH) {
    const slice = chunks.slice(i, i + BATCH);
    const vectors = [];
    for (const c of slice) {
      const values = await embed(c.text, embedModel);
      if (expectedDim && values.length !== expectedDim) {
        throw new Error(
          `Embedding dimension (${values.length}) does not match Pinecone index dimension (${expectedDim}). ` +
            `Recreate the index at ${values.length} (e.g. OpenAI=1536, Gemini=768) or change EMBEDDING_PROVIDER.`,
        );
      }
      vectors.push({
        id: c.id,
        values,
        metadata: {
          text: c.text,
          source: c.source,
          section: c.section,
          title: c.title,
          chunkIndex: c.chunkIndex,
        },
      });
    }
    await index.upsert(vectors);
    console.log(
      `Upserted ${vectors.length} vectors (${i + vectors.length}/${chunks.length}).`,
    );
  }
  console.log("Seeding complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
