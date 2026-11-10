import Header from "./Header";
import PokeballButton from "./PokeballButton";
import ProjectCard from "./ProjectCard";
import ChatTerminal from "./ChatTerminal";
import ProfileCard from "./ProfileCard";
import { PROJECTS } from "../../data/projects";

export default function Landing({
  onOpenDex,
  onOpenProjects,
}: {
  onOpenDex: () => void;
  onOpenProjects: () => void;
}) {
  function handleAvatarClick() {
    onOpenDex();
  }

  return (
    <section id="landing" className="relative flex min-h-screen flex-col">
      <Header onOpenAgent={handleAvatarClick} onOpenProjects={onOpenProjects} />

      {/* FIRST: AI agent as the front screen */}
      <div
        id="ai-agent"
        className="mx-auto w-full px-6 md:px-36 scroll-mt-8 pb-16 pt-10"
      >
        <section className="grid w-full grid-cols-1 gap-6 rounded-3xl border border-purple-100 bg-white/90 p-4 shadow-xl backdrop-blur-md md:p-6 lg:h-[72vh] lg:max-h-[760px] lg:grid-cols-[35%_65%] lg:overflow-hidden lg:p-8">
          <ProfileCard />
          <ChatTerminal sectionId="ai-assistant" />
        </section>
      </div>

      {/* AI Projects section */}
      <div id="ai-projects" className="mx-auto w-full px-6 md:px-36 scroll-mt-8 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1a002c]">
              AI Projects
            </h2>
            <p className="mt-2 text-lg font-medium leading-relaxed text-slate-600">
              Exploring AI through product builds, real use cases, and creative play.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-vp/30 bg-vp/5 px-4 py-1.5 font-mono text-sm font-bold text-vp">
              <span className="h-1.5 w-1.5 rounded-full bg-vp" />
              {PROJECTS.length} Projects
            </div>
          </div>
          <div className="vp-ball-sm hidden shrink-0 sm:block">
            <PokeballButton onOpen={() => {}} />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} emerging delay={i * 140} />
          ))}
        </div>
      </div>
    </section>
  );
}
