export default function Header() {
  return (
    <div className="mx-auto w-full max-w-[1500px] px-8 pt-7 md:px-14">
      <header className="flex items-start justify-between">
        <a href="#" className="flex items-center gap-3.5">
          <div>
            <h1 className="text-[24px] font-extrabold leading-none tracking-tight text-[#1A002C] md:text-[26px]">
              Vineet Agarwal
            </h1>
            <p className="mt-1.5 text-[14px] text-[#64748b]">AI Product Manager</p>
          </div>
        </a>
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
    </div>
  );
}