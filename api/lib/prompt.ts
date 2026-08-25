import type { ChatMessage } from "./openai";

export function buildSystemPrompt(
  context: { text: string; source: string; title: string }[],
): string {
  const contextBlock = context.length
    ? context
        .map(
          (c, i) =>
            `[[${i + 1}]] (source: ${c.source} / ${c.title})\n${c.text}`,
        )
        .join("\n\n")
    : "(No retrieved context. Politely say you don't have that detail and invite the user to email Vineet at va57@rice.edu.)";

  return `You are Vineet's AI assistant on his portfolio website.
Answer ONLY using the context below, which was retrieved from Vineet's public knowledge base.
- Be concise, warm, and professional. Keep responses under ~120 words unless the user asks for detail.
- If the context does NOT cover the question, say you don't have that detail and invite the user to email Vineet at va57@rice.edu.
- Do NOT invent facts, dates, employers, clients, metrics, achievements, preferences, or personal information.
- Use the conversation history only for continuity; never contradict the context.
- Refer to Vineet in the third person (e.g., "Vineet worked at…", "Vineet believes…"). Do not claim to literally be Vineet.
- You may cite which topic the answer came from when helpful.

Context:
${contextBlock}`;
}

export function buildMessages(
  system: string,
  history: ChatMessage[],
  question: string,
): ChatMessage[] {
  return [
    { role: "system", content: system },
    ...history,
    { role: "user", content: question },
  ];
}
