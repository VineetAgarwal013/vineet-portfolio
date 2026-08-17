import { Bot, Book, Layers, Mail, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "../data/portfolio";

export type SectionId = "overview" | "repos" | "skills" | "assistant" | "contact";

export const SECTIONS: { id: SectionId; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: Book },
  { id: "repos", label: "Repositories", icon: Layers },
  { id: "skills", label: "Tech Stack", icon: Terminal },
  { id: "assistant", label: "AI Assistant", icon: Bot },
  { id: "contact", label: "Contact", icon: Mail },
];

interface SidebarProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="flex w-full flex-col border-b border-line bg-canvas md:h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="flex items-center gap-3 border-b border-line p-4 md:p-5">
        <div className="grid h-8 w-8 place-items-center rounded bg-accent font-display text-sm font-bold text-white">
          VA
        </div>
        <span className="font-display text-base font-bold tracking-tight text-ink">
          {profile.name}
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-faint">
          Menu
        </p>
        {SECTIONS.map((item) => {
          const ItemIcon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "rounded-l-none border-l-2 border-accent bg-accent-soft text-accent"
                  : "text-muted hover:bg-line/40 hover:text-ink"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <ItemIcon size={18} aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-line p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-line bg-line/40 text-faint">
            <span className="text-[10px] font-bold">VA</span>
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-semibold text-ink">Signed in as</span>
            <span className="max-w-[130px] truncate text-muted">{profile.name}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}