import { useState } from "react";
import Header from "./Header";
import PokeballButton from "./PokeballButton";
import ProjectCard from "./ProjectCard";
import ChatTerminal from "./ChatTerminal";
import ProfileCard from "./ProfileCard";
import { PROJECTS } from "../../data/projects";

const AVATARS = {
  PM: { image: "/pokemon-avatar.png", finger: { x: 0.474, y: 0.003 } },
  MC: { image: "/vineet-consultant.png", finger: { x: 0.448, y: 0.010 } },
} as const;

export default function Landing({
  onOpenDex,
  onOpenProjects,
}: {
  onOpenDex: () => void;
  onOpenProjects: () => void;
}) {
  const [role] = useState<"PM" | "MC">("PM");

  function handleAvatarClick() {
    onOpenDex();
  }

  return (
    <section id="landing" className="relative flex min-h-screen flex-col">
      <Header onOpenAgent={handleAvatarClick} onOpenProjects={onOpenProjects} />

      {/* FIRST: AI agent as the front screen */}
      <div
        id="ai-agent"
        className="flex min-h-screen flex-col items-center justify-center px-4 py-12 md:px-10"
      >
        <section className="grid w-full max-w-[1500px] grid-cols-1 gap-6 rounded-3xl border border-purple-100 bg-white/90 p-4 shadow-xl backdrop-blur-md md:p-6 lg:h-[72vh] lg:max-h-[760px] lg:grid-cols-[35%_65%] lg:overflow-hidden lg:p-8">
          <ProfileCard />
          <ChatTerminal sectionId="ai-assistant" />
        </section>
      </div>

      {/* AI Projects section */}
      <div
        id="ai-projects"
        className="flex min-h-screen flex-col justify-center px-6 py-20 md:px-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-mono text-xs font-bold tracking-widest text-[#8B5FC9]">
            AI Projects
          </p>
          <p className="font-mono text-[11px] font-bold tracking-wider text-[#8B5FC9]">
            {PROJECTS.filter((p) => p.category === "SHIPPED").length} built ·{" "}
            {PROJECTS.length} total
          </p>
        </div>
        <div className="mt-3 border-t-2 border-vp/40" />

        <div className="mt-10 flex flex-col items-start gap-12 lg:flex-row lg:gap-14">
          <div className="w-full max-w-xs shrink-0">
            <p className="text-left text-lg font-bold leading-snug tracking-tight text-[#1a002c]">
              Exploring AI through product builds, real use cases, and creative play
            </p>

            <div className="group relative mt-10">
              <div
                className="absolute z-20"
                style={{
                  left: `calc(${AVATARS[role].finger.x * 100}% - 14px)`,
                  top: `calc(${AVATARS[role].finger.y * 100}% - 24px)`,
                }}
              >
                <div className="origin-top scale-[0.28]">
                  <PokeballButton onOpen={() => {}} />
                </div>
              </div>
              <img
                src={AVATARS[role].image}
                alt="Vineet Agarwal"
                className="-scale-x-100 h-44 w-auto object-contain transition-all md:h-64"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-wrap justify-start gap-8 lg:justify-end">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} emerging delay={i * 140} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
