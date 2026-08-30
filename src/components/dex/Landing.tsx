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
        className="flex min-h-screen flex-col justify-center px-4 py-20 md:px-10"
      >
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-14">
          <div className="w-full max-w-sm shrink-0 lg:sticky lg:top-24">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1a002c]">
              AI Projects
            </h1>

            <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600">
              Exploring AI through product builds, real use cases, and creative play.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-vp/30 bg-vp/5 px-4 py-1.5 font-mono text-sm font-bold text-vp">
              <span className="h-1.5 w-1.5 rounded-full bg-vp" />
              {PROJECTS.length} Projects
            </div>

            <div className="mt-8 w-24">
              <PokeballButton onOpen={() => {}} />
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
