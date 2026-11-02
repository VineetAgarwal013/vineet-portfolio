import { Pinecone } from "@pinecone-database/pinecone";
import { embed } from "./engine.js";

let client: Pinecone | null = null;

function getClient(): Pinecone {
  if (!client) {
    const apiKey = process.env.PINECONE_API_KEY;
    if (!apiKey) throw new Error("PINECONE_API_KEY is not set");
    client = new Pinecone({ apiKey });
  }
  return client;
}

export function getIndex() {
  const name = process.env.PINECONE_INDEX;
  if (!name) throw new Error("PINECONE_INDEX is not set");
  return getClient().index(name);
}

export type RetrievedChunk = {
  text: string;
  source: string;
  title: string;
  score: number;
};

export async function retrieveContext(
  question: string,
  topK = 4,
  threshold = 0.78,
): Promise<RetrievedChunk[]> {
  const vector = await embed(question);
  const index = getIndex();
  const res = await index.query({ vector, topK, includeMetadata: true });

  return (res.matches || [])
    .filter((m) => (m.score ?? 0) >= threshold)
    .map((m) => ({
      text: (m.metadata?.text as string) || "",
      source: (m.metadata?.source as string) || "",
      title: (m.metadata?.title as string) || "",
      score: m.score ?? 0,
    }));
}
