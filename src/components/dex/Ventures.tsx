import { motion } from "framer-motion";

const VENTURES = [
  {
    name: "Amora Jewellery",
    tag: "Diamond Venture · 0→1",
    stat: "~$200K",
    statLabel: "annual revenue in 3 years",
    points: [
      "Founded & scaled the venture from zero to ~$200K annual revenue.",
      "Managed a 4-person sales & marketing team end-to-end.",
    ],
  },
  {
    name: "Reliable Realtors",
    tag: "Portfolio Management",
    stat: "4x",
    statLabel: "returns in 3 years on $8M+ portfolios",
    points: [
      "Grew $8M+ real estate portfolios for a client base.",
      "Built price prediction models to time acquisitions & exits.",
    ],
  },
];

const JOURNEY = [
  {
    period: "2024 — 2026",
    role: "Associate Consultant, Product Strategy",
    org: "ZS Associates",
    points: [
      "Owned product roadmap; 3 A/B tests → +20% daily users.",
      "Redesigned forecasting model & metrics — $15M incremental revenue.",
      "Product Owner; team velocity +50%.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Associate, Data Science",
    org: "ZS Associates",
    points: [
      "Scaled ZS's first AI-driven sales engine (autoencoders, 100M+ providers) — +50% lead-scoring efficiency.",
      "XGBoost + Snowflake forecasting — $4M revenue growth.",
      "Enterprise AI partnerships — $2M incremental revenue.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Associate, Analytics",
    org: "ZS Associates",
    points: [
      "Automated data-to-model pipeline — −40% analysis time.",
      "Scaled products across 5 markets (+$3M), led 10-person team.",
      "Mitigated $10M revenue risk for a pharma client.",
    ],
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-magenta shadow-[0_0_8px_rgba(181,23,158,0.9)]" />
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-widest text-vp">
                Personal Projects & Entrepreneurship
              </h2>
              <span className="h-px flex-1 bg-[#1a002c]/15" />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              {VENTURES.map((v) => (
                <div
                  key={v.name}
                  className="rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-colors hover:border-purple-200"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-extrabold tracking-tight text-[#1a002c]">
                      {v.name}
                    </h3>
                    <span className="rounded-full border border-magenta/40 bg-magenta/15 px-2 py-0.5 font-mono text-[9px] text-magenta">
                      {v.tag}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-[26px] font-bold tracking-tight text-vp-strong">
                    {v.stat}
                  </p>
                  <p className="mt-1 text-[12px] text-slate-500">{v.statLabel}</p>
                  <ul className="mt-3 space-y-1.5 border-t border-[#1a002c]/10 pt-3">
                    {v.points.map((p) => (
                      <li key={p} className="flex gap-2 text-[13px] leading-relaxed text-slate-600">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-vp-strong" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-vp-strong shadow-[0_0_8px_rgba(157,78,221,0.9)]" />
              <h2 className="font-mono text-[11px] font-bold uppercase tracking-widest text-vp">
                Professional Journey
              </h2>
              <span className="h-px flex-1 bg-[#1a002c]/15" />
            </div>

            <div className="mt-8 space-y-4">
              {JOURNEY.map((entry) => (
                <div
                  key={entry.role}
                  className="rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-xl backdrop-blur-md transition-colors hover:border-purple-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 shrink-0 rounded-full border-2 border-vp-strong bg-vp shadow-[0_0_10px_rgba(157,78,221,0.9)]" />
                    <p className="font-mono text-[10px] font-bold tracking-widest text-slate-500">
                      {entry.period}
                    </p>
                  </div>
                  <h3 className="mt-2 text-[13px] font-extrabold leading-snug tracking-tight text-[#1a002c]">
                    {entry.role}
                  </h3>
                  <p className="mt-0.5 font-mono text-[10px] text-vp">{entry.org}</p>
                  <ul className="mt-2 space-y-1.5">
                    {entry.points.map((p) => (
                      <li key={p} className="flex gap-1.5 text-[11.5px] leading-relaxed text-slate-600">
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-vp-strong" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}