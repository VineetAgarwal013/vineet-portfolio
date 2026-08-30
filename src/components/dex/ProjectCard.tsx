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
      className={`pp-card flex w-[290px] flex-col overflow-hidden rounded-[14px] border border-gray-200/90 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.07)] ${
        emerging ? "" : "pp-card-out"
      }`}
      style={emerging ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className="h-[165px] w-full shrink-0 overflow-hidden bg-[#F1EBFF]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-[11px] font-bold tracking-widest text-vp/50">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] font-bold leading-snug tracking-tight text-[#1a002c]">
            {project.title}
          </h3>
          <span className="translate-y-0.5 shrink-0 text-[15px] font-light leading-none text-gray-300">
            ↗
          </span>
        </div>

        <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">
          {project.description}
        </p>

        {isShipped && project.tags.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#EEF1FF] px-2.5 py-1 text-[11px] font-semibold text-[#5A6BD6]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {isShipped && (project.demo || project.github) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-vp px-3.5 py-1.5 font-mono text-[11px] font-bold text-white transition-colors hover:bg-vp-strong"
              >
                Live Demo ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-purple-200 bg-white px-3.5 py-1.5 font-mono text-[11px] font-bold text-vp transition-colors hover:border-vp/40"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}

        {!isShipped && (
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF1FF] px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#5A6BD6]">
              <span className="dex-typing-dot h-1.5 w-1.5 rounded-full bg-[#5A6BD6]" />
              IN LAB
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
