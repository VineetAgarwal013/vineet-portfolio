import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import HatchingEgg from "./HatchingEgg";
import ChatTerminal from "./ChatTerminal";
import ProfileCard from "./ProfileCard";
import { JOURNEY } from "./Journey";

const TAGS = ["AI READY", "PRODUCTIVITY", "CALENDAR SCHEDULING", "0 TO 1"];

const IN_LAB = [
  { title: "Alumni Finder", subtitle: "Smart Networking" },
  { title: "Job Hunter", subtitle: "Career Automation" },
];

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function ProjectDexModal({
  onClose,
  mode = "full",
}: {
  onClose: () => void;
  mode?: "full" | "chat";
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md md:px-14 md:py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Project Dex OS"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={
          mode === "chat"
            ? "relative flex max-h-[95vh] w-full max-w-[1500px] flex-col overflow-hidden rounded-3xl border border-purple-100 bg-white/90 shadow-xl backdrop-blur-md lg:h-[560px]"
            : "flex max-h-[95vh] w-full max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-[rgba(123,44,191,0.45)] bg-[rgba(15,23,42,0.92)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.55),0_0_40px_rgba(123,44,191,0.16),inset_0_1px_0_rgba(255,255,255,0.06)] lg:h-[560px]"
        }
      >
        {mode === "chat" ? (
          <>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-purple-200 bg-white/80 text-sm text-[#7B2CBF] transition-all duration-150 hover:scale-[1.08] hover:bg-[#7B2CBF] hover:text-white hover:shadow-[0_0_16px_rgba(123,44,191,0.4)]"
            >
              ✕
            </button>
            <section className="grid h-full grid-cols-1 gap-6 p-6 lg:grid-cols-[35%_65%] lg:p-8">
              <ProfileCard />
              <ChatTerminal sectionId="ai-assistant-modal" />
            </section>
          </>
        ) : (
        <>
        <div className="flex items-center gap-3 border-b border-slate-700/60 px-1 pb-4">
          <span className="h-2 w-2 rounded-full bg-[#b5179e] shadow-[0_0_8px_rgba(181,23,158,0.8)]" />
          <span className="h-2 w-2 rounded-full bg-[#9d4edd] shadow-[0_0_8px_rgba(157,78,221,0.7)]" />
          <span className="h-2 w-2 rounded-full bg-[#7b2cbf] shadow-[0_0_8px_rgba(123,44,191,0.8)]" />
          <span className="ml-2 font-mono text-[11px] tracking-widest text-slate-400">
            PROJECT DEX OS v2.0
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Project Dex"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(224,170,255,0.4)] bg-[rgba(30,41,59,0.6)] text-sm text-[#e0aaff] transition-all duration-150 hover:scale-[1.08] hover:bg-[#7B2CBF] hover:text-white hover:shadow-[0_0_16px_rgba(123,44,191,0.6)]"
          >
            ✕
          </button>
        </div>

        <div className="vp-scroll-purple mt-4 grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-y-auto overscroll-contain md:grid-cols-[35%_65%]">
          <div className="rounded-[14px] border border-[rgba(148,163,184,0.15)] bg-[#1e293b] p-4">
            <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(123,44,191,0.35),0_0_18px_rgba(123,44,191,0.15)]">
              <img
                src="/vineet-photo.jpg"
                alt="Vineet Agarwal"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-5">
              <h2 className="text-[20px] font-extrabold tracking-tight text-white">
                Vineet Agarwal
              </h2>
              <p className="mt-1.5 font-mono text-[13px] tracking-wide text-[#E0AAFF]">
                AI Product Manager
              </p>
              <div className="mt-2.5 space-y-1.5 font-mono text-[10px] text-slate-400">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="shrink-0 text-[#9D4EDD]" />
                  RICE MBA <span className="text-slate-600">·</span> Engineer
                </p>
                <p className="flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0 text-[#9D4EDD]" />
                  Houston, TX
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href="https://github.com/VineetAgarwal013"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-[#334155] px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vin-agarwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-[#334155] px-4 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold tracking-widest text-[#E0AAFF]">
                  PROFESSIONAL JOURNEY
                </span>
                <span className="font-mono text-[10px] text-slate-500">▮▮ SCROLL ▮▮</span>
              </div>

              <div className="vp-scroll-purple mt-3 space-y-3 pr-1">
                {JOURNEY.map((entry) => (
                  <div
                    key={entry.role}
                    className="rounded-xl border border-slate-700/60 bg-[#0f172a] p-4 transition-colors hover:border-[#7B2CBF]/50"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono text-[9.5px] font-bold tracking-widest text-slate-500">
                        {entry.period}
                      </p>
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#9D4EDD] shadow-[0_0_8px_rgba(157,78,221,0.9)]" />
                    </div>
                    <h4 className="mt-1 text-[13px] font-extrabold tracking-tight text-slate-100">
                      {entry.role}
                    </h4>
                    <p className="mt-0.5 font-mono text-[10px] text-[#E0AAFF]">{entry.org}</p>
                    <ul className="mt-2 space-y-1.5">
                      {entry.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-1.5 text-[11.5px] leading-relaxed text-slate-300/85"
                        >
                          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#9D4EDD]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#E0AAFF]">
                PROJECT INDEX
              </span>
              <span className="font-mono text-[10px] text-slate-500">▮▮ SCROLL ▮▮</span>
            </div>

            <div className="vp-scroll-purple mt-3 max-h-[75vh] min-h-0 space-y-3 overflow-y-auto pr-1">
              <div className="rounded-xl border border-slate-700/60 bg-[#0f172a] p-4 transition-colors hover:border-[#7B2CBF]/50">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold tracking-tight text-slate-100">
                    Taskly AI
                  </h3>
                  <span className="whitespace-nowrap rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] text-emerald-400">
                    SHIPPED
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-slate-400">
                  Intelligent AI Task Manager
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300/80">
                  Automates daily workflow prioritization and eliminates manual task backlogs.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-600/60 bg-[#334155] px-2 py-1 font-mono text-[9.5px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-700/60 pt-3">
                  <a
                    href="https://vineet-taskly.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#334155] px-3 py-1.5 font-mono text-[11px] font-bold text-slate-200 transition-colors hover:bg-[#7B2CBF]"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href="https://github.com/VineetAgarwal013/taskly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#334155] px-3 py-1.5 font-mono text-[11px] font-bold text-slate-200 transition-colors hover:bg-[#7B2CBF]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {IN_LAB.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-xl border-2 border-dashed border-[#7B2CBF]/30 bg-[#0f172a]/80 p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-100">
                        {project.title}
                      </h3>
                      <span className="whitespace-nowrap rounded-full border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 font-mono text-[9px] text-amber-400">
                        IN LAB
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-slate-400">{project.subtitle}</p>

                    <div className="flex items-center justify-center py-6">
                      <HatchingEgg />
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                      <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#B5179E]" />
                      <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#B5179E]" />
                      <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#B5179E]" />
                      <span className="ml-1 font-mono text-[10px] font-bold tracking-widest text-slate-400">
                        EVOLVING...
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between px-1">
          <span className="font-mono text-[10px] text-slate-500">VINEET-013 · LVL 01</span>
          <span className="font-mono text-[10px] text-slate-500">© 2026 VINEET AGARWAL</span>
        </div>
        </>
        )}
      </motion.div>
    </div>
  );
}