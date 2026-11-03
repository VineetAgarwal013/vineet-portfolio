import OpenAI from "openai";
import type { ChatMessage } from "../types.js";

// Groq serves an OpenAI-compatible API, so the OpenAI SDK works with a different base URL.
let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) throw new Error("GROQ_API_KEY is not set");
    client = new OpenAI({ apiKey, baseURL: "https://api.groq.com/openai/v1" });
  }
  return client;
}

export async function complete(messages: ChatMessage[]): Promise<string> {
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  const res = await getClient().chat.completions.create({
    model,
    temperature: 0.1,
    messages: messages as OpenAI.ChatCompletionMessageParam[],
    // gpt-oss models reason before answering; low effort keeps replies fast.
    ...(model.startsWith("openai/gpt-oss") ? { reasoning_effort: "low" } : {}),
  } as OpenAI.ChatCompletionCreateParamsNonStreaming);
  return res.choices[0]?.message?.content?.trim() || "";
}
