import OpenAI from "openai";
import type { ChatMessage } from "../types.js";

let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("OPENAI_API_KEY is not set");
    client = new OpenAI({ apiKey });
  }
  return client;
}

export async function embed(
  text: string,
  model = "text-embedding-3-small",
): Promise<number[]> {
  const res = await getClient().embeddings.create({ model, input: text });
  return res.data[0].embedding;
}

export async function complete(messages: ChatMessage[]): Promise<string> {
  const model = process.env.LLM_MODEL || "gpt-4o-mini";
  const res = await getClient().chat.completions.create({
    model,
    temperature: 0.1,
    messages: messages as OpenAI.ChatCompletionMessageParam[],
  });
  return res.choices[0]?.message?.content?.trim() || "";
}
