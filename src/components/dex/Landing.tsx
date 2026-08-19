import { useEffect, useState } from "react";
import Header from "./Header";
import PokeballButton from "./PokeballButton";
import ProjectCard from "./ProjectCard";
import GetToKnowMeCallout from "./GetToKnowMeCallout";
import { PROJECTS } from "../../data/projects";

const AVATARS = {
  PM: { image: "/pokemon-avatar.png", finger: { x: 0.474, y: 0.003 } },
  MC: { image: "/vineet-consultant.png", finger: { x: 0.448, y: 0.010 } },
} as const;

export type DexMode = "full" | "chat";

export default function Landing({
  onOpenDex,
  ballTrigger,
  onOpenProjects,
}: {
  onOpenDex: (mode: DexMode) => void;
  ballTrigger: number;
  onOpenProjects: () => void;
}) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [cards, setCards] = useState<"hidden" | "in" | "out">("hidden");
  const [ballGone, setBallGone] = useState(false);
  const [role, setRole] = useState<"PM" | "MC">("PM");

  useEffect(() => {
    if (projectsOpen) {
      setCards("in");
      const t = window.setTimeout(() => setBallGone(true), 350);
      return () => window.clearTimeout(t);
    }
    setBallGone(false);
    if (cards === "in") {
      setCards("out");
      const t = window.setTimeout(() => setCards("hidden"), 320);
      return () => window.clearTimeout(t);
    }
  }, [projectsOpen]);

  function handleAvatarClick() {
    onOpenDex("chat");
  }

  function handleBallOpen() {
    setProjectsOpen(true);
  }

  function handleBallClose() {
    setProjectsOpen(false);
  }

  return (
    <section id="landing" className="relative flex min-h-screen flex-col">
      <Header onOpenAgent={handleAvatarClick} onOpenProjects={onOpenProjects} />

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {!ballGone && (
          <div className="relative">
            <div
              className={`pp-ball-wrap transition-all duration-300 ${
                projectsOpen ? "pp-ball-fade" : ""
              }`}
            >
              <PokeballButton
                onOpen={handleBallOpen}
                onClose={handleBallClose}
                controlledOpen={projectsOpen}
                trigger={ballTrigger}
              />
            </div>
          </div>
        )}

        {!projectsOpen && (
          <p className="vp-retro vp-pulse-text mt-8 text-[10px] tracking-wider text-[#8B5FC9]">
            CLICK TO EXPLORE
          </p>
        )}
      </div>

      {cards !== "hidden" && (
        <div
          className="fixed inset-0 z-40 overflow-y-auto bg-white/95 backdrop-blur-sm"
          onClick={() => setProjectsOpen(false)}
        >
          <div className="flex min-h-full flex-col items-center justify-center px-6 py-16">
            <div
              className="flex flex-wrap justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  emerging={cards === "in"}
                  delay={i * 140}
                />
              ))}
            </div>
            {cards === "in" && (
              <p className="vp-retro vp-pulse-text mt-10 text-[9px] tracking-wider text-[#8B5FC9]">
                CLICK ANYWHERE TO CLOSE
              </p>
            )}
          </div>
        </div>
      )}

      <div
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-vp/30 bg-white/70 px-7 py-6 shadow-sm backdrop-blur-sm md:flex"
        aria-label="Work Experience placeholder"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 text-vp/70"
          aria-hidden="true"
        >
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M2 12h20" />
        </svg>
        <p className="vp-retro text-center text-[9px] leading-relaxed tracking-wider text-[#8B5FC9]">
          WORK
          <br />
          EXPERIENCE
        </p>
        <p className="font-mono text-[9px] font-bold text-slate-400">PLACEHOLDER</p>
      </div>

      <div
        className="absolute bottom-6 left-6 md:left-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={handleAvatarClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleAvatarClick();
            }
          }}
          aria-label="Open Project Dex"
          className="group flex cursor-pointer flex-col items-start gap-1 text-left"
        >
          <span className="relative block">
            <img
              src={AVATARS[role].image}
              alt="Vineet Agarwal"
              className="-scale-x-100 h-48 w-auto object-contain transition-all group-hover:drop-shadow-[0_0_16px_rgba(123,44,191,0.35)] md:h-72"
            />
            <GetToKnowMeCallout
              finger={AVATARS[role].finger}
              onClick={handleAvatarClick}
            />
          </span>
          <div
            className="rounded-2xl border-2 border-[#1a002c] bg-white px-4 py-3 shadow-[3px_3px_0_#1a002c]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-mono text-[11px] font-bold leading-snug text-[#1a002c]">
              Are you a Management Consultant
              <br />
              or Product Manager?
            </p>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setRole("MC")}
                aria-pressed={role === "MC"}
                className={`cursor-pointer rounded-full border-2 px-3 py-1 font-mono text-[10px] font-bold transition-colors ${
                  role === "MC"
                    ? "border-[#1a002c] bg-vp text-white"
                    : "border-purple-200 bg-white text-vp hover:border-vp/40"
                }`}
              >
                Management Consultant
              </button>
              <button
                type="button"
                onClick={() => setRole("PM")}
                aria-pressed={role === "PM"}
                className={`cursor-pointer rounded-full border-2 px-3 py-1 font-mono text-[10px] font-bold transition-colors ${
                  role === "PM"
                    ? "border-[#1a002c] bg-vp text-white"
                    : "border-purple-200 bg-white text-vp hover:border-vp/40"
                }`}
              >
                Product Manager
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}