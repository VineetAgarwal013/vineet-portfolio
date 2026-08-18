import { motion } from "framer-motion";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function ProfileCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
    >
      <img
        src="/vineet-photo.jpg"
        alt="Vineet Agarwal"
        className="h-[200px] w-[200px] rounded-2xl border-2 border-indigo-100 object-cover object-top shadow-sm"
      />

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">Vineet Agarwal</h1>
      <p className="mt-1 text-base font-semibold text-[#6366F1]">AI Product Manager</p>
      <p className="mt-0.5 text-sm text-slate-500">Rice MBA · Engineer</p>

      <div className="mt-6 flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/vin-agarwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-medium text-slate-700 transition-all hover:border-indigo-300 hover:bg-[#F3F0FF] hover:text-indigo-600"
        >
          <LinkedinIcon size={15} />
          LinkedIn
        </a>
        <a
          href="https://github.com/VineetAgarwal013"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 items-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-medium text-slate-700 transition-all hover:border-indigo-300 hover:bg-[#F3F0FF] hover:text-indigo-600"
        >
          <GithubIcon size={15} />
          GitHub
        </a>
      </div>
    </motion.aside>
  );
}