import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { CHIPS, respondToInput, WELCOME_MESSAGE, type ChatMessage } from "../../data/chat";

let messageId = 0;

function makeMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return { id: messageId++, role, text };
}

export default function DexChatTerminal({ fill = false }: { fill?: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    makeMessage("ai", WELCOME_MESSAGE),
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const feed = feedRef.current;
    if (feed) feed.scrollTop = feed.scrollHeight;
  }, [messages, typing]);

  function pushWithTyping(question: string, response: string) {
    setMessages((prev) => [...prev, makeMessage("user", question)]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, makeMessage("ai", response)]);
    }, 950);
  }

  function handleChip(chip: (typeof CHIPS)[number]) {
    pushWithTyping(chip.prompt, chip.response);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const question = input.trim();
    if (!question || typing) return;
    pushWithTyping(question, respondToInput(question));
    setInput("");
  }

  function handleReset() {
    setTyping(false);
    setMessages([makeMessage("ai", WELCOME_MESSAGE)]);
  }

  return (
    <div
      className={
        fill
          ? "flex h-full flex-col rounded-xl border border-slate-700/60 bg-[#0f172a]"
          : "flex flex-col rounded-xl border border-slate-700/60 bg-[#0f172a]"
      }
    >
      <div className="flex items-center justify-between border-b border-slate-700/60 px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#E0AAFF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B5179E] shadow-[0_0_6px_rgba(181,23,158,0.9)]" />
          MISTY — AI CONSOLE
        </span>
        <button
          type="button"
          onClick={handleReset}
          title="Reset Conversation"
          aria-label="Reset Conversation"
          className="grid h-6 w-6 place-items-center rounded-md text-slate-500 transition-colors hover:bg-slate-700/60 hover:text-[#E0AAFF]"
        >
          <RotateCcw size={12} />
        </button>
      </div>

      <div className="px-4 pt-3">
        <h2 className="text-lg font-bold text-[#E0AAFF]">Ask Misty anything!</h2>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
          Misty, Vineet&apos;s AI assistant, can answer questions about his experience, projects,
          skills, and journey.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 px-4 pt-2.5">
        {CHIPS.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => handleChip(chip)}
            disabled={typing}
            className="cursor-pointer rounded-full border border-[#7B2CBF]/40 bg-[#7B2CBF]/15 px-2.5 py-1 font-mono text-[9px] text-[#E0AAFF] transition-colors hover:bg-[#7B2CBF]/30 disabled:opacity-50"
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div
        ref={feedRef}
        className={
          fill
            ? "dex-scroll flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-3"
            : "dex-scroll flex h-[300px] flex-col gap-2.5 overflow-y-auto px-4 py-3"
        }
      >
        {messages.map((m) =>
          m.role === "ai" ? (
            <div
              key={m.id}
              className="self-start max-w-[85%] whitespace-pre-line rounded-xl border border-slate-700/60 bg-slate-800/70 px-3 py-2 text-[12px] leading-relaxed text-slate-200"
            >
              {m.text}
            </div>
          ) : (
            <div
              key={m.id}
              className="self-end max-w-[85%] whitespace-pre-line rounded-xl bg-[#7B2CBF] px-3 py-2 text-[12px] leading-relaxed text-white"
            >
              {m.text}
            </div>
          )
        )}

        {typing && (
          <div className="flex items-center gap-1 self-start rounded-xl border border-slate-700/60 bg-slate-800/70 px-3 py-2.5">
            <span className="dex-typing-dot h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
            <span className="dex-typing-dot h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
            <span className="dex-typing-dot h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-slate-700/60 p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Misty anything about Vineet..."
          aria-label="Ask Misty anything about Vineet"
          className="w-full bg-transparent font-mono text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Ask"
          className="shrink-0 rounded-lg bg-[#7B2CBF] px-3.5 py-1.5 font-mono text-[10px] font-bold text-white transition-colors hover:bg-[#9D4EDD] disabled:opacity-50"
        >
          ASK
        </button>
      </form>
    </div>
  );
}