import { motion } from "framer-motion";
import { EMAIL, PHONE } from "../../data/chat";

const LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  {
    label: "LinkedIn",
    value: "in/vin-agarwal",
    href: "https://www.linkedin.com/in/vin-agarwal/",
  },
  {
    label: "GitHub",
    value: "VineetAgarwal013",
    href: "https://github.com/VineetAgarwal013",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
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
              Contact
            </h2>
            <span className="h-px flex-1 bg-[#1a002c]/15" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-colors hover:border-vp/40"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-vp">
                  {link.label}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#1a002c]">{link.value}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}