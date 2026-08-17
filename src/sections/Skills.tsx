import { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const GRAPH_COLORS = ["bg-line", "bg-[#9be9a8]", "bg-[#40c463]", "bg-[#30a14e]", "bg-[#216e39]"];

export default function Skills() {
  const graph = useMemo(() => {
    const rng = seededRandom(42);
    return Array.from({ length: 52 }, () =>
      Array.from({ length: 7 }, () => rng())
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">Technical Skills</h2>
        <p className="mt-1 text-muted">
          A list of the tools, methods, and crafts I work with on a daily basis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="overflow-hidden rounded-md border border-line"
          >
            <div className="flex items-center gap-2 border-b border-line bg-line/30 px-4 py-3 text-sm font-semibold">
              <span aria-hidden="true">{group.emoji}</span>
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2 bg-paper p-4">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="cursor-default rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-line/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contribution activity */}
      <div className="border-t border-line pt-8">
        <h3 className="mb-4 font-display text-lg font-semibold text-ink">
          Contribution Activity
        </h3>
        <div className="overflow-x-auto rounded-md border border-line bg-paper p-4">
          <div className="flex min-w-max gap-1">
            {graph.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((intensity, dayIndex) => {
                  const level = intensity > 0.9 ? 4 : intensity > 0.7 ? 3 : intensity > 0.4 ? 2 : intensity > 0.1 ? 1 : 0;
                  return (
                    <div
                      key={dayIndex}
                      className={`h-3 w-3 rounded-sm ${GRAPH_COLORS[level]}`}
                      title={`${Math.floor(intensity * 10)} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-end gap-2 text-xs text-muted">
            <span>Less</span>
            {GRAPH_COLORS.map((c) => (
              <div key={c} className={`h-3 w-3 rounded-sm ${c}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}