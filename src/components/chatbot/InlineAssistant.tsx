import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { brain, suggestedQuestions, winnieIntro } from "../../lib/winnie";
import type { ChatMessage } from "../../lib/winnie";

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3" aria-label="Winnie is typing">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

export default function InlineAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "assistant", text: winnieIntro },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const answer = await brain.ask(trimmed);
    setTyping(false);
    setMessages((m) => [...m, { from: "assistant", text: answer }]);
  };

  return (
    <div
      className="flex flex-col overflow-hidden rounded-md border border-line bg-paper"
      role="region"
      aria-label="Winnie, Vineet's AI assistant"
    >
      <div className="flex items-center gap-2 border-b border-line bg-line/30 px-4 py-2 font-mono text-sm text-muted">
        <span className="h-3 w-3 rounded-full bg-[#f85149]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#d29922]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#3fb950]" aria-hidden="true" />
        <span className="ml-2">vineetagarwal / winnie.ts</span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="text-2xl" aria-hidden="true">🤖</span>
          <div>
            <h3 className="font-display text-base font-bold tracking-tight text-ink">
              Ask me anything!
            </h3>
            <p className="text-xs text-muted">
              I'm Winnie, Vineet's AI assistant — trained on his experience and expertise.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => void ask(q)}
              disabled={typing}
              className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:bg-accent-soft hover:text-accent disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="mt-3 rounded-md bg-accent-soft p-2.5">
          <p className="text-sm leading-relaxed text-ink">
            💡 Click any topic above for example questions, or ask me anything about Vineet's
            experience and skills!
          </p>
        </div>

        <div ref={scrollRef} className="mt-3 max-h-60 flex-1 space-y-3 overflow-y-auto pr-1">
          {messages.map((m, i) =>
            m.from === "assistant" ? (
              <div
                key={i}
                className="max-w-[92%] rounded-md rounded-tl-sm bg-line/40 px-4 py-2.5 text-sm leading-relaxed text-ink"
              >
                {m.text}
              </div>
            ) : (
              <div
                key={i}
                className="ml-auto max-w-[92%] rounded-md rounded-tr-sm bg-accent px-4 py-2.5 text-sm leading-relaxed text-white"
              >
                {m.text}
              </div>
            )
          )}
          {typing && <TypingDots />}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            void ask(input);
          }}
          className="relative mt-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything!"
            aria-label="Ask Winnie a question"
            className="w-full rounded-md border border-line bg-canvas px-4 py-3 pr-20 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
          />
          <button
            type="submit"
            disabled={!input.trim() || typing}
            className="absolute top-1.5 right-1.5 rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong disabled:opacity-40"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}