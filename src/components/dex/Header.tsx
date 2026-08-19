export default function Header({
  onOpenAgent,
  onOpenProjects,
}: {
  onOpenAgent: () => void;
  onOpenProjects: () => void;
}) {
  return (
    <header className="flex items-start justify-between px-6 pt-7 md:px-10">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-[24px] font-extrabold leading-none tracking-tight text-[#1A002C] md:text-[26px]">
            Vineet Agarwal
          </h1>
          <p className="mt-1.5 text-[14px] text-[#64748b]">AI Product Manager</p>
        </div>
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
      <div className="flex gap-2.5">
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
    </header>
  );
}