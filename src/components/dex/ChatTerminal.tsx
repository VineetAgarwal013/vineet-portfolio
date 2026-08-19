import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { CHIPS, respondToInput, WELCOME_MESSAGE, type ChatMessage } from "../../data/chat";

let messageId = 0;

function makeMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return { id: messageId++, role, text };
}

export default function ChatTerminal({
  sectionId = "ai-assistant",
  title = "Get to Know Me...",
  subtitle = "Ask anything about Vineet's experience, projects, skills, and journey.",
  welcomeMessage = WELCOME_MESSAGE,
  placeholder = "Ask me anything about Vineet...",
}: {
  sectionId?: string;
  title?: string;
  subtitle?: string;
  welcomeMessage?: string;
  placeholder?: string;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    makeMessage("ai", welcomeMessage),
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  const welcome = messages[0];
  const rest = messages.slice(1);

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
    setMessages([makeMessage("ai", welcomeMessage)]);
  }

  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative flex h-full flex-col rounded-2xl border border-purple-100/80 bg-[#FAF9FF] p-6 lg:p-8"
    >
      <button
        type="button"
        onClick={handleReset}
        title="Reset Conversation"
        aria-label="Reset Conversation"
        className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition-all hover:bg-[#EEF2FF] hover:text-[#4F46E5]"
      >
        <RotateCcw size={15} />
      </button>

      <h2 className="text-xl font-bold text-[#6366F1]">{title}</h2>
      <p className="mt-1 max-w-lg text-sm text-slate-600">{subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => handleChip(chip)}
            disabled={typing}
            className="cursor-pointer rounded-full border border-indigo-100 bg-[#EEF2FF] px-3.5 py-1.5 text-xs font-medium text-[#4F46E5] transition-all hover:bg-[#E0E7FF] disabled:opacity-50"
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div
        ref={feedRef}
        className="dex-scroll my-4 flex min-h-0 flex-1 flex-col space-y-4 overflow-y-auto pr-2"
      >
        <AnimatePresence initial={false}>
          {[welcome, ...rest].map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={
                m.role === "ai"
                  ? "self-start max-w-[85%] whitespace-pre-line rounded-2xl border border-purple-100/60 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-sm"
                  : "self-end max-w-[85%] whitespace-pre-line rounded-2xl bg-[#6366F1] p-4 text-sm leading-relaxed text-white"
              }
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <div className="flex items-center gap-1.5 self-start rounded-2xl border border-purple-100/60 bg-white px-4 py-3 shadow-sm">
            <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#6366F1]" />
            <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#6366F1]" />
            <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#6366F1]" />
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-2xl border border-purple-200/80 bg-white p-2 shadow-sm"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full bg-transparent px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Ask"
          className="shrink-0 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-[#4F46E5] disabled:opacity-50"
        >
          Ask
        </button>
      </form>
    </motion.section>
  );
}