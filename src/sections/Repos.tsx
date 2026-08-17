import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import ProjectModal from "../components/projects/ProjectModal";

const LANGUAGE_COLORS: Record<string, string> = {
  AI: "#2f81f7",
  Automation: "#d29922",
  "Conversational UI": "#a371f7",
  React: "#58a6ff",
  "Intent matching": "#3fb950",
};

export default function Repos() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-5xl"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Popular Repositories</h2>
          <p className="mt-1 text-sm text-muted">
            Real builds, written up as case studies — no invented metrics.
          </p>
        </div>
        <span className="hidden shrink-0 text-sm text-accent hover:underline sm:block">
          View all repositories →
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const language = project.technologies[0] ?? "AI";
          const color = LANGUAGE_COLORS[language] ?? "#8b949e";
          return (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActive(project)}
              className="group rounded-md border border-line bg-paper p-4 text-left transition-colors hover:border-muted/50"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-accent group-hover:underline">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                  Public
                </span>
              </div>

              <p className="mb-4 line-clamp-2 h-10 text-sm text-muted">{project.tagline}</p>

              <div className="mt-auto flex items-center gap-4 text-xs text-muted">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                  <span>{language}</span>
                </div>
                <span className="ml-auto truncate">{project.category}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </motion.div>
  );
}