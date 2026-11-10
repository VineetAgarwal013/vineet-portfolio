export default function Header({
  onOpenAgent,
  onOpenProjects,
}: {
  onOpenAgent: () => void;
  onOpenProjects: () => void;
}) {
  return (
    <header className="relative w-full">
      <div className="mx-auto flex w-full items-center justify-between px-6 pt-8 md:px-36">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="cursor-pointer rounded-lg px-2 py-1 text-[13.5px] font-semibold text-slate-400 transition-colors hover:text-vp"
          >
            Top
          </button>
          <button
            type="button"
            onClick={onOpenAgent}
            aria-label="Open AI Agent Chat"
            className="vp-nav-btn vp-nav-agent cursor-pointer"
          >
            AI Agent
          </button>
          <button
            type="button"
            onClick={onOpenProjects}
            aria-label="Open AI Projects"
            className="vp-nav-btn vp-nav-projects cursor-pointer"
          >
            AI Projects
          </button>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:va57@rice.edu" className="vp-nav-btn vp-nav-email">
            Email
          </a>
          <a
            href="https://calendly.com/avineet013/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="vp-nav-btn vp-nav-coffee"
          >
            Coffee Chat
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vp/40 to-transparent" />
    </header>
  );
}