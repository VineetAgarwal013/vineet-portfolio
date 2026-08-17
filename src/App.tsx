import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Menu, Moon, Plus, Search, Sun, X } from "lucide-react";
import CommandPalette from "./components/CommandPalette";
import Sidebar, { SECTIONS } from "./components/Sidebar";
import type { SectionId } from "./components/Sidebar";
import Overview from "./sections/Overview";
import Repos from "./sections/Repos";
import Skills from "./sections/Skills";
import Assistant from "./sections/Assistant";
import Contact from "./sections/Contact";
import { profile } from "./data/portfolio";

const SECTION_COMPONENTS: Record<SectionId, ComponentType> = {
  overview: Overview,
  repos: Repos,
  skills: Skills,
  assistant: Assistant,
  contact: Contact,
};

export default function App() {
  const [active, setActive] = useState<SectionId>("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof document === "undefined") return true;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onSwitch = (e: Event) => {
      const id = (e as CustomEvent<{ id?: string }>).detail?.id as SectionId | undefined;
      if (id && SECTIONS.some((s) => s.id === id)) {
        setActive(id);
        setMenuOpen(false);
      }
    };
    window.addEventListener("switch-section", onSwitch);
    return () => window.removeEventListener("switch-section", onSwitch);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-palette"));
  };

  const select = (id: SectionId) => {
    setActive(id);
    setMenuOpen(false);
  };

  const ActiveSection = SECTION_COMPONENTS[active];
  const activeLabel = SECTIONS.find((s) => s.id === active)?.label ?? "";

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-canvas text-ink md:flex-row">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Mobile header */}
      <header className="flex h-14 flex-shrink-0 items-center justify-between border-b border-line px-4 md:hidden">
        <div className="flex items-center gap-2 font-display text-sm font-bold">
          <span className="grid h-6 w-6 place-items-center rounded bg-accent text-[10px] text-white">
            VA
          </span>
          {profile.name}
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Sidebar: desktop always, mobile overlay */}
      <div className={menuOpen ? "block" : "hidden md:block"}>
        <Sidebar active={active} onSelect={select} />
      </div>

      {/* Main content */}
      <main id="main-content" className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex h-14 flex-shrink-0 items-center justify-between gap-3 border-b border-line bg-canvas px-4 md:px-6">
          <div className="flex min-w-0 items-center text-sm text-muted">
            <span className="truncate hover:text-accent">{profile.name}</span>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="font-semibold text-ink">{activeLabel}</span>
          </div>

          <div className="flex flex-shrink-0 items-center gap-2">
            <button
              onClick={openPalette}
              className="hidden h-8 w-64 items-center gap-2 rounded-md border border-line bg-line/20 px-3 text-sm text-faint transition-colors hover:border-accent/50 md:flex"
              aria-label="Open command palette"
            >
              <Search size={14} aria-hidden="true" />
              <span className="flex-1 text-left">Type / to search</span>
              <kbd className="rounded border border-line px-1.5 text-[10px] font-semibold">/</kbd>
            </button>
            <button
              onClick={openPalette}
              className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted md:hidden"
              aria-label="Open command palette"
            >
              <Search size={15} aria-hidden="true" />
            </button>

            <div className="hidden h-8 w-px bg-line md:block" aria-hidden="true" />

            <button
              className="grid h-8 w-8 place-items-center text-muted transition-colors hover:text-ink"
              aria-label="Add"
            >
              <Plus size={18} />
            </button>
            <button
              className="grid h-8 w-8 place-items-center text-muted transition-colors hover:text-ink"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>
            <button
              onClick={() => setDark((v) => !v)}
              className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors hover:text-ink"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line bg-accent text-[10px] font-bold text-white">
              VA
            </span>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto scroll-smooth p-5 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-5xl pb-12"
            >
              <ActiveSection />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <CommandPalette />
    </div>
  );
}