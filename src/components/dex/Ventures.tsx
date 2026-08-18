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

export default function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:px-10">
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

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {VENTURES.map((v) => (
              <div
                key={v.name}
                className="rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-colors hover:border-purple-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold tracking-tight text-[#1a002c]">{v.name}</h3>
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
      </div>
    </section>
  );
}