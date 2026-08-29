import type { ChatMessage } from "./types";
import { embed as embedOpenAI, complete as completeOpenAI } from "./providers/openai";
import { embed as embedGemini, complete as completeGemini } from "./providers/gemini";

export type { ChatMessage } from "./types";

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
