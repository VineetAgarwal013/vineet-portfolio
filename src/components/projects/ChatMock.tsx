import { Send, Sparkles } from "lucide-react";
import type { ChatMessage } from "../../lib/winnie";

interface ChatMockProps {
  messages: ChatMessage[];
}

export default function ChatMock({ messages }: ChatMockProps) {
  return (
    <div
      className="mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm"
      role="img"
      aria-label="Preview of the Winnie chat assistant"
    >
      <div className="flex items-center gap-2.5 border-b border-line bg-canvas px-4 py-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-accent">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold leading-none">Winnie</p>
          <p className="mt-0.5 text-[11px] text-muted">Ask me about Vineet</p>
        </div>
      </div>

      <div className="space-y-3 px-4 py-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
              m.from === "user"
                ? "ml-auto bg-ink text-canvas"
                : "border border-line bg-canvas text-ink"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="border-t border-line px-4 py-3">
        <div className="flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5">
          <span className="flex-1 text-sm text-faint">Ask about Vineet…</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-soft text-accent">
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}