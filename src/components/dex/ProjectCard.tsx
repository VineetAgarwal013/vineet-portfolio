import { useState } from "react";
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
  const [zoom, setZoom] = useState(false);

  function handleClick() {
    setZoom(true);
    window.setTimeout(() => setZoom(false), 300);
    if (project.demo) {
      window.open(project.demo, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className={`pp-card flex w-[290px] cursor-pointer flex-col overflow-hidden rounded-[14px] border border-gray-200/90 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)] active:scale-95 ${
        zoom ? "scale-[1.06]" : ""
      } ${emerging ? "" : "pp-card-out"}`}
      style={emerging ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className="h-[165px] w-full shrink-0 overflow-hidden bg-[#F1EBFF]">
        {isShipped ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-vp via-vp-strong to-[#B5179E]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-white/90"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M8 10h8" />
              <path d="M8 14h5" />
            </svg>
            <span className="font-mono text-lg font-extrabold tracking-widest text-white drop-shadow">
              {project.title.toUpperCase()}
            </span>
          </div>
        ) : project.id === "job-hunter" ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#022C22] via-[#065F46] to-[#0D9488]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-white/90"
              aria-hidden="true"
            >
              <path d="M5 7h14v13H5z" />
              <path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
              <path d="M5 12h14" />
            </svg>
            <span className="font-mono text-lg font-extrabold tracking-widest text-white drop-shadow">
              {project.title.toUpperCase()}
            </span>
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#4F46E5]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-white/90"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="font-mono text-lg font-extrabold tracking-widest text-white drop-shadow">
              {project.title.toUpperCase()}
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

        {project.tags.length > 0 && (
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
                Try App ↗
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
