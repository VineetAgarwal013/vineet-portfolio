import HatchingEgg from "./HatchingEgg";
import type { Project } from "../../data/projects";

export default function ProjectCard({
  project,
  emerging = false,
  delay = 0,
}: {
  project: Project;
  emerging?: boolean;
  delay?: number;
}) {
  const isShipped = project.category === "SHIPPED";

  return (
    <div
      className={`pp-card flex h-[360px] w-[320px] flex-col ${
        emerging ? "" : "pp-card-out"
      } ${
        isShipped
          ? "rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-xl backdrop-blur-md"
          : "rounded-2xl border-2 border-dashed border-vp/30 bg-white/90 p-5 shadow-xl backdrop-blur-md"
      }`}
      style={emerging ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-extrabold tracking-tight text-[#1a002c]">
          {project.title}
        </h3>
        <span
          className={
            isShipped
              ? "whitespace-nowrap rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] text-emerald-600"
              : "whitespace-nowrap rounded-full border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 font-mono text-[9px] text-amber-600"
          }
        >
          {project.category}
        </span>
      </div>

      {project.subtitle && (
        <p className="mt-1 font-mono text-[11px] text-slate-500">{project.subtitle}</p>
      )}

      <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{project.description}</p>

      {isShipped && project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-purple-100 bg-[#F3F0FF] px-2 py-1 font-mono text-[9.5px] text-vp"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {isShipped ? (
        <div className="mt-auto flex flex-wrap gap-2 border-t border-[#1a002c]/10 pt-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-vp/40 bg-vp px-3 py-1.5 font-mono text-[11px] font-bold text-white transition-colors hover:bg-vp-strong"
            >
              Live Demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-200 bg-white px-3 py-1.5 font-mono text-[11px] font-bold text-vp transition-colors hover:border-vp/40"
            >
              GitHub ↗
            </a>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-1 items-center justify-center py-6">
            <HatchingEgg />
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#B5179E]" />
            <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#B5179E]" />
            <span className="dex-typing-dot h-2 w-2 rounded-full bg-[#B5179E]" />
            <span className="ml-1 font-mono text-[10px] font-bold tracking-widest text-slate-500">
              EVOLVING...
            </span>
          </div>
        </>
      )}
    </div>
  );
}