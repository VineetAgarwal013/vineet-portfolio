import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-24">
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
              Blog
            </h2>
            <span className="h-px flex-1 bg-[#1a002c]/15" />
          </div>

          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-base font-extrabold tracking-tight text-[#1a002c]">Coming soon</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
              I'll share insights on AI products, product strategy, and building — check back soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}