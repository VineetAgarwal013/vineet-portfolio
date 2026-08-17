import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import { about, contact, experience, profile, ventures } from "../data/portfolio";

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-line/60 bg-line/20 p-3">
      <div className="font-display text-2xl font-bold text-ink">{value}</div>
      <div className="mt-0.5 text-xs uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}

export default function Overview() {
  const stats = [
    { label: "AI Projects", value: "2" },
    { label: "ZS Years", value: "4" },
    { label: "RE Portfolio", value: "$8M+" },
    { label: "Venture ARR", value: "~$200K" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-auto max-w-4xl space-y-6"
    >
      {/* Profile header */}
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <div className="relative">
          <div className="grid h-32 w-32 place-items-center rounded-full border border-line bg-gradient-to-br from-accent-soft to-line/60 font-display text-4xl font-extrabold text-accent shadow-sm md:h-44 md:w-44">
            VA
          </div>
          <div className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full border border-line bg-canvas text-lg shadow-sm">
            👋
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {profile.name}
            </h1>
            <p className="text-xl font-light text-muted">{profile.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <div className="flex items-center gap-1">
              <MapPin size={16} aria-hidden="true" />
              <span>{profile.location} · originally {profile.origin}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} aria-hidden="true" />
              <a
                href={contact.email ? `mailto:${contact.email}` : "#"}
                className="hover:text-accent hover:underline"
              >
                {contact.email || "email coming soon"}
              </a>
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            {contact.github && (
              <a
                href={contact.github}
                className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            )}
            <span className="rounded-md border border-line bg-line/30 px-3 py-1.5 text-sm text-muted">
              {profile.role}
            </span>
          </div>
        </div>
      </div>

      {/* README.md card */}
      <div className="overflow-hidden rounded-md border border-line bg-paper">
        <div className="flex items-center gap-2 border-b border-line bg-line/30 px-4 py-2 font-mono text-sm text-muted">
          <span className="h-3 w-3 rounded-full bg-[#f85149]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#d29922]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#3fb950]" aria-hidden="true" />
          <span className="ml-2">vineetagarwal / README.md</span>
        </div>

        <div className="space-y-6 p-6 text-ink/90 md:p-8">
          <h2 className="border-b border-line pb-2 font-display text-2xl font-bold">
            Hi there, I'm Vineet Agarwal! 👋
          </h2>

          <p className="leading-relaxed">{about.headline}</p>
          {about.body.map((b) => (
            <p key={b.slice(0, 24)} className="leading-relaxed">
              {b}
            </p>
          ))}

          <h3 className="font-display text-lg font-bold">What I'm working on</h3>
          <ul className="ml-2 list-inside list-disc space-y-2">
            <li>Studying how AI changes products and companies — Rice MBA '28</li>
            <li>Building AI product prototypes, one project at a time</li>
            <li>Scaling a real estate portfolio and a self-sustaining diamond venture</li>
          </ul>

          <h3 className="font-display text-lg font-bold">Stats</h3>
          <div className="grid grid-cols-2 gap-4 pt-1 md:grid-cols-4">
            {stats.map((s) => (
              <StatBox key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          <h3 className="font-display text-lg font-bold">Professional Journey</h3>
          <div className="space-y-4">
            {experience.map((job, i) => (
              <div key={`${job.company}-${i}`} className="rounded-md border border-line/70 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="font-display font-bold text-ink">{job.role}</p>
                    <p className="text-sm text-muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted">{job.period}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-sm text-muted">
              Plus {ventures.length} ventures on the side — see the Contact section to talk about
              any of it.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}