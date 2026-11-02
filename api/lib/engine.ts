import type { ChatMessage } from "./types.js";
import { embed as embedOpenAI, complete as completeOpenAI } from "./providers/openai.js";
import { embed as embedGemini, complete as completeGemini } from "./providers/gemini.js";

export type { ChatMessage } from "./types.js";

function provider(name: "EMBEDDING_PROVIDER" | "LLM_PROVIDER", fallback: string): string {
  return (process.env[name] || fallback).toLowerCase();
}

export async function embed(text: string, model?: string): Promise<number[]> {
  if (provider("EMBEDDING_PROVIDER", "gemini") === "openai") {
    return embedOpenAI(text, model);
  }
  return embedGemini(text, model);
}

export async function complete(messages: ChatMessage[]): Promise<string> {
  if (provider("LLM_PROVIDER", "gemini") === "openai") {
    return completeOpenAI(messages);
  }
  return completeGemini(messages);
}
