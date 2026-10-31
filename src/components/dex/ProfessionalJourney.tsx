const JOURNEY = [
  {
    period: "2024 — Present",
    role: "AI Product Manager",
    org: "Independent / Portfolio",
    initials: "VA",
    points: [
      { emoji: "🚀", text: "Build AI products end-to-end, from idea to deployment." },
      { emoji: "💡", text: "RAG chatbot + agentic workflows across my portfolio." },
    ],
    workedWith: ["ZS", "🏦"],
  },
  {
    period: "2024 — 2026",
    role: "Associate Consultant, Product Strategy",
    org: "ZS Associates",
    initials: "ZS",
    points: [
      { emoji: "🚀", text: "Owned product roadmap; 3 A/B tests → +20% daily users." },
      { emoji: "🤖", text: "Redesigned forecasting model & metrics — $15M incremental revenue." },
      { emoji: "💡", text: "Product Owner; team velocity +50%." },
    ],
    workedWith: ["ZS", "🏦", "🏥"],
  },
  {
    period: "2023 — 2024",
    role: "Associate, Data Science",
    org: "ZS Associates",
    initials: "ZS",
    points: [
      { emoji: "🤖", text: "Scaled ZS's first AI-driven sales engine — +50% lead-scoring efficiency." },
      { emoji: "📈", text: "XGBoost + Snowflake forecasting — $4M revenue growth." },
      { emoji: "🤝", text: "Enterprise AI partnerships — $2M incremental revenue." },
    ],
    workedWith: ["🏦", "🏥"],
  },
  {
    period: "2022 — 2023",
    role: "Associate, Analytics",
    org: "ZS Associates",
    initials: "ZS",
    points: [
      { emoji: "⚙️", text: "Automated data-to-model pipeline — −40% analysis time." },
      { emoji: "🌍", text: "Scaled products across 5 markets (+$3M), led 10-person team." },
      { emoji: "🛡️", text: "Mitigated $10M revenue risk for a pharma client." },
    ],
    workedWith: ["🏥"],
  },
];

const LOGO_COLORS = ["bg-slate-800 text-white", "bg-vp text-white", "bg-[#0F172A] text-white"];

export default function ProfessionalJourney() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-4 md:px-10">
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-14">
        <div className="w-full max-w-sm shrink-0 lg:sticky lg:top-24">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1a002c]">
            Professional Journey
          </h1>

          <p className="mt-3 text-lg font-medium leading-relaxed text-slate-600">
            Where I&apos;ve worked, led, and shipped along the way.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-vp/30 bg-vp/5 px-4 py-1.5 font-mono text-sm font-bold text-vp">
            <span className="h-1.5 w-1.5 rounded-full bg-vp" />
            {JOURNEY.length} Roles
          </div>

          <img
            src="/vineet-consultant.png"
            alt="Vineet Agarwal"
            className="-scale-x-100 mt-10 h-52 w-auto object-contain md:h-64"
          />
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {JOURNEY.map((entry) => (
          <div key={entry.period + entry.role} className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-purple-200 md:block" />

            <div className="relative flex flex-col items-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white font-mono text-sm font-bold shadow-md">
                {entry.initials}
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-base font-bold leading-snug text-slate-900">{entry.org}</h3>
                <p className="text-sm font-semibold text-purple-600">{entry.role}</p>
                <p className="mt-1 text-xs text-slate-400">{entry.period}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-slate-50/50 p-4 text-left">
              <ul className="space-y-2">
                {entry.points.map((p) => (
                  <li
                    key={p.text}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"
                  >
                    <span className="shrink-0 leading-none" aria-hidden="true">
                      {p.emoji}
                    </span>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>

              {entry.workedWith && (
                <>
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-3">
                    <span className="text-[11px] font-medium text-slate-400">Worked with</span>
                    <div className="flex gap-1.5">
                      {entry.workedWith.map((l, j) => (
                        <span
                          key={j}
                          className={`flex h-6 w-6 items-center justify-center rounded-md font-mono text-[9px] font-bold ${
                            LOGO_COLORS[j % LOGO_COLORS.length]
                          }`}
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
