import { retrieveContext } from "./lib/pinecone.js";
import { complete, type ChatMessage } from "./lib/engine.js";
import { buildSystemPrompt, buildMessages } from "./lib/prompt.js";

export const config = { runtime: "nodejs" };

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
    const context = await retrieveContext(message, 5, 0.5);
    const system = buildSystemPrompt(context);
    const messages = buildMessages(system, history, message);
    const text = await complete(messages);

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
