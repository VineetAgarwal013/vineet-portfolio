import { retrieveContext } from "./lib/pinecone.js";
import { complete, type ChatMessage } from "./lib/engine.js";
import { buildSystemPrompt, buildMessages } from "./lib/prompt.js";

export const config = { runtime: "nodejs" };

// Questions often say "he"/"his"; embeddings match much better with the name in them.
const SUBJECT = "Vineet Agarwal";

/** Follow-ups ("what about his second year?") are rewritten so retrieval sees the full question. */
async function standaloneQuestion(
  history: ChatMessage[],
  message: string,
): Promise<string> {
  if (!history.some((h) => h.role === "user")) return message;
  const transcript = history
    .slice(-6)
    .map((h) => `${h.role === "user" ? "Visitor" : "Assistant"}: ${h.content.slice(0, 600)}`)
    .join("\n");
  try {
    const rewritten = await complete([
      {
        role: "system",
        content:
          `Rewrite the visitor's latest question as one standalone question about ${SUBJECT}, ` +
          `resolving pronouns and references using the conversation. ` +
          `Output only the rewritten question, nothing else. Do not answer it.`,
      },
      { role: "user", content: `Conversation:\n${transcript}\n\nLatest question: ${message}` },
    ]);
    return rewritten && rewritten.length < 400 ? rewritten : message;
  } catch (err) {
    console.warn("query rewrite failed, using raw question:", err);
    return message;
  }
}

export default async function handler(
  req: Request,
): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
    });
  }

  const message =
    typeof body?.message === "string" ? body.message.trim() : "";
  if (!message) {
    return new Response(
      JSON.stringify({ error: "message is required" }),
      { status: 400 },
    );
  }

  const history: ChatMessage[] = Array.isArray(body?.history)
    ? body.history
        .filter(
          (h: any) =>
            h &&
            (h.role === "user" || h.role === "assistant") &&
            typeof h.content === "string",
        )
        .map((h: any) => ({ role: h.role, content: h.content }))
    : [];

  try {
    // gemini-embedding-001 scores relevant chunks ~0.55–0.85; the prompt handles off-topic context.
    const query = await standaloneQuestion(history, message);
    const context = await retrieveContext(`${SUBJECT}: ${query}`, 5, 0.5);
    const system = buildSystemPrompt(context);
    const messages = buildMessages(system, history, message);
    // Gemini returns occasional 503 "high demand" errors; one retry covers most of them.
    const text = await complete(messages).catch(async (err) => {
      console.warn("completion failed, retrying once:", err?.status ?? err);
      await new Promise((r) => setTimeout(r, 800));
      return complete(messages);
    });

    if (!text) {
      return new Response(JSON.stringify({ error: "empty completion" }), {
        status: 502,
      });
    }
    return Response.json({ text });
  } catch (err) {
    console.error("chat handler error:", err);
    return new Response(JSON.stringify({ error: "internal error" }), {
      status: 500,
    });
  }
}
