import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import type { Project } from "../../data/portfolio";
import WorkflowDiagram from "./WorkflowDiagram";
import ChatMock from "./ChatMock";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const reduce = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] overflow-y-auto bg-ink/50 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Case study: ${project.title}`}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto my-0 flex min-h-full w-full max-w-3xl flex-col bg-paper sm:my-10 sm:rounded-3xl sm:border sm:border-line sm:shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-paper/95 px-5 py-4 backdrop-blur sm:rounded-t-3xl sm:px-8">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Back to projects
              </button>
              <button
                onClick={onClose}
                className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:border-ink"
                aria-label="Close case study"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </header>

            <div className="px-5 py-10 sm:px-10">
              <p className="eyebrow">{project.category}</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {project.tagline}
              </p>

              {project.flow && (
                <div className="mt-8 rounded-2xl border border-line bg-canvas p-6">
                  <WorkflowDiagram nodes={project.flow} />
                </div>
              )}

              {project.previewChat && (
                <div className="mt-8 rounded-2xl border border-line bg-canvas p-6">
                  <ChatMock messages={project.previewChat} />
                </div>
              )}

              <div className="mt-12 space-y-12">
                {project.chapters.map((chapter, i) => (
                  <motion.section
                    key={chapter.kicker}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.03, ease: "easeOut" }}
                    className="border-t border-line pt-8"
                  >
                    <p className="eyebrow">{chapter.kicker}</p>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {chapter.title}
                    </h3>
                    <div className="mt-4 max-w-2xl space-y-4">
                      {chapter.body.map((paragraph, j) => (
                        <p key={j} className="text-[15px] leading-relaxed text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.section>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
                {project.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {(project.github || project.website) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-accent"
                    >
                      Visit live site →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" onClick={onClose} className="btn btn-accent">
                  Back to projects
                </a>
                <a href="#contact" onClick={onClose} className="btn btn-outline">
                  Discuss this pattern
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}