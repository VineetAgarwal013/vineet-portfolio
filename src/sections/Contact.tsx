import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import { contact, profile } from "../data/portfolio";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-auto max-w-3xl space-y-6"
    >
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
        <p className="mt-1 text-muted">
          Hiring, building, exploring an idea, or just want to talk about AI, products, or
          strategy — I'd love to hear from you.
        </p>
      </div>

      <div className="overflow-hidden rounded-md border border-line bg-paper">
        <div className="flex items-center gap-2 border-b border-line bg-line/30 px-4 py-2 font-mono text-sm text-muted">
          <span className="h-3 w-3 rounded-full bg-[#f85149]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#d29922]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#3fb950]" aria-hidden="true" />
          <span className="ml-2">vineetagarwal / reach-me</span>
        </div>

        <div className="space-y-3 p-6">
          <a
            href={contact.email ? `mailto:${contact.email}` : "#"}
            aria-disabled={!contact.email}
            className={`flex items-center gap-3 rounded-md border border-line p-4 transition-colors ${
              contact.email ? "hover:border-accent/50" : "pointer-events-none opacity-60"
            }`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-soft text-accent">
              <Mail size={18} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">Email</span>
              <span className="block text-sm text-muted">
                {contact.email || "coming soon"}
              </span>
            </span>
          </a>

          <a
            href={contact.linkedin || "#"}
            aria-disabled={!contact.linkedin}
            className={`flex items-center gap-3 rounded-md border border-line p-4 transition-colors ${
              contact.linkedin ? "hover:border-accent/50" : "pointer-events-none opacity-60"
            }`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-soft text-accent">
              <LinkedinIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">LinkedIn</span>
              <span className="block text-sm text-muted">
                {contact.linkedin || "coming soon"}
              </span>
            </span>
          </a>

          <a
            href={contact.github || "#"}
            aria-disabled={!contact.github}
            className={`flex items-center gap-3 rounded-md border border-line p-4 transition-colors ${
              contact.github ? "hover:border-accent/50" : "pointer-events-none opacity-60"
            }`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent-soft text-accent">
              <GithubIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">GitHub</span>
              <span className="block text-sm text-muted">
                {contact.github || "coming soon"}
              </span>
            </span>
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-muted">
        Based in {profile.location} · Open to conversations about AI, product, and strategy
      </p>
    </motion.div>
  );
}