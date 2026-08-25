import "dotenv/config";
import { retrieveContext } from "../api/lib/pinecone";

const SAMPLES = [
  "What did Vineet do at ZS Associates?",
  "Tell me about his MBA at Rice.",
  "What are his core skills?",
  "What does he like to do for fun?",
  "What is his email address?",
  "What is his salary?",
];

async function main() {
  for (const q of SAMPLES) {
    console.log(`\n=== Q: ${q} ===`);
    try {
      const ctx = await retrieveContext(q, 4, 0);
      if (!ctx.length) {
        console.log("(no matches)");
        continue;
      }
      ctx.forEach((c, i) =>
        console.log(
          `[${i + 1}] score=${c.score.toFixed(3)} source=${c.source} title=${c.title}\n  ${c.text.replace(/\n/g, " ").slice(0, 160)}`,
        ),
      );
    } catch (e) {
      console.error("error:", e);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
