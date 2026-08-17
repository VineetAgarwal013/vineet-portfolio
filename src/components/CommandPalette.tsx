import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Book, CornerDownLeft, Layers, Mail, Search, Sparkles, Terminal, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PaletteAction {
  id: string;
  label: string;
  hint?: string;
  icon: LucideIcon;
  section?: string;
}

const NAV_ACTIONS: PaletteAction[] = [
  { id: "overview", label: "Overview", hint: "01", icon: Book, section: "overview" },
  { id: "repos", label: "Repositories", hint: "02", icon: Layers, section: "repos" },
  { id: "skills", label: "Tech Stack", hint: "03", icon: Terminal, section: "skills" },
  { id: "assistant", label: "AI Assistant", hint: "⚡", icon: Bot, section: "assistant" },
  { id: "contact", label: "Contact", hint: "04", icon: Mail, section: "contact" },
];

const ACTION_ROWS: { title: string; items: PaletteAction[] }[] = [
  { title: "Navigate", items: NAV_ACTIONS },
  { title: "Actions", items: [{ id: "winnie", label: "Ask Winnie", hint: "AI", icon: Sparkles }] },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const openPalette = () => setOpen(true);

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "/") {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) {
          return;
        }
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("open-palette", openPalette as EventListener);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-palette", openPalette as EventListener);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const flat = useMemo(() => ACTION_ROWS.flatMap((row) => row.items), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return flat;
    return flat.filter((a) => a.label.toLowerCase().includes(q));
  }, [flat, query]);

  const run = (action: PaletteAction) => {
    setOpen(false);
    if (action.id === "winnie" || action.section) {
      const target = action.section ?? "assistant";
      window.dispatchEvent(new CustomEvent("switch-section", { detail: { id: target } }));
      return;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const action = filtered[activeIndex];
      if (action) run(action);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/50 px-4 pt-24 backdrop-blur-sm sm:pt-32"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg overflow-hidden rounded-lg border border-line bg-paper shadow-2xl"
            role="dialog"
            aria-label="Command palette"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Jump to a section, or ask Winnie…"
                aria-label="Search commands"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-faint"
              />
              <kbd className="kbd">esc</kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-muted">
                  No matches. Try “repositories”, “skills”, or “Winnie”.
                </p>
              )}

              {ACTION_ROWS.map((row) => {
                const items = row.items.filter((a) => filtered.includes(a));
                if (items.length === 0) return null;
                return (
                  <div key={row.title} className="mb-1">
                    <p className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">
                      {row.title}
                    </p>
                    {items.map((action) => {
                      const index = filtered.indexOf(action);
                      const selected = index === activeIndex;
                      return (
                        <button
                          key={action.id}
                          onClick={() => run(action)}
                          onMouseEnter={() => setActiveIndex(index)}
                          className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                            selected ? "bg-accent-soft text-ink" : "text-muted"
                          }`}
                        >
                          <span
                            className={`grid h-7 w-7 place-items-center rounded-md ${
                              selected ? "bg-accent text-white" : "bg-line/40 text-accent"
                            }`}
                          >
                            <action.icon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="flex-1 font-medium">{action.label}</span>
                          {action.hint && (
                            <span className="text-[10px] font-semibold text-faint">{action.hint}</span>
                          )}
                          {selected && (
                            <CornerDownLeft className="h-3 w-3 text-faint" aria-hidden="true" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <footer className="flex items-center justify-between border-t border-line px-4 py-2.5">
              <p className="text-[11px] text-faint">
                <kbd className="kbd">↑↓</kbd> to navigate
                <span className="mx-1.5">·</span>
                <kbd className="kbd">↵</kbd> to select
                <span className="mx-1.5">·</span>
                <kbd className="kbd">/</kbd> to open
              </p>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 text-[11px] text-faint transition-colors hover:text-ink"
              >
                <X className="h-3 w-3" aria-hidden="true" />
                Close
              </button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}