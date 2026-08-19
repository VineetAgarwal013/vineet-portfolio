import { motion } from "framer-motion";

export type JourneyEntry = {
  period: string;
  role: string;
  org: string;
  points: string[];
};

export const JOURNEY: JourneyEntry[] = [
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

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pt-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-vp-strong shadow-[0_0_8px_rgba(157,78,221,0.9)]" />
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-widest text-vp">
              Professional Journey
            </h2>
            <span className="h-px flex-1 bg-[#1a002c]/15" />
          </div>

          <div className="dex-scroll mt-10 overflow-x-auto pb-4">
            <div className="flex min-w-[940px] items-stretch">
              {JOURNEY.map((entry, i) => (
                <div key={entry.role} className="flex flex-1 items-start">
                  <div className="flex w-full flex-col items-center px-3">
                    <div className="flex w-full items-center">
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full border-2 border-vp-strong bg-vp shadow-[0_0_10px_rgba(157,78,221,0.9)]`}
                      />
                      {i < JOURNEY.length - 1 && (
                        <span className="h-px flex-1 bg-gradient-to-r from-vp/70 via-vp/40 to-vp/20" />
                      )}
                    </div>
                    <div className="mt-4 flex h-full flex-col rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-xl backdrop-blur-md transition-colors hover:border-purple-200">
                      <p className="font-mono text-[10px] font-bold tracking-widest text-slate-500">
                        {entry.period}
                      </p>
                      <h3 className="mt-1 text-[13px] font-extrabold leading-snug tracking-tight text-[#1a002c]">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}