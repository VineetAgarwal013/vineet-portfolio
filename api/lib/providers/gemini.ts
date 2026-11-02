import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from "../types.js";

let client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is not set");
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}

// Pinecone index dimension must match: gemini-embedding-001 is truncated to 768.
const EMBEDDING_DIM = 768;

export async function embed(
  text: string,
  model = process.env.EMBEDDING_MODEL || "gemini-embedding-001",
): Promise<number[]> {
  const res: any = await getClient().models.embedContent({
    model,
    contents: text,
    config: { outputDimensionality: EMBEDDING_DIM },
  });
  const values =
    res?.embeddings?.[0]?.values ?? res?.embedding?.values;
  if (!Array.isArray(values)) {
    throw new Error("Gemini embed: unexpected response shape");
  }
  return values as number[];
}

export async function complete(messages: ChatMessage[]): Promise<string> {
  const model = process.env.LLM_MODEL || "gemini-3.5-flash";
  const system = messages.find((m) => m.role === "system")?.content ?? "";
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

  const res: any = await getClient().models.generateContent({
    model,
    contents,
    config: { systemInstruction: system, temperature: 0.1 },
  });

  const text =
    res?.text ??
    res?.candidates?.[0]?.content?.parts?.[0]?.text ??
    "";
  return typeof text === "string" ? text.trim() : "";
}
