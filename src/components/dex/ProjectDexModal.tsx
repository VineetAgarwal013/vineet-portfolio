import { useEffect } from "react";
import { motion } from "framer-motion";
import ChatTerminal from "./ChatTerminal";
import ProfileCard from "./ProfileCard";

export default function ProjectDexModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md md:px-14 md:py-8"
      role="dialog"
      aria-modal="true"
      aria-label="AI Agent Chat"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[95vh] w-full max-w-[1500px] flex-col overflow-hidden rounded-3xl border border-purple-100 bg-white/90 shadow-xl backdrop-blur-md lg:h-[560px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-purple-200 bg-white/80 text-sm text-[#7B2CBF] transition-all duration-150 hover:scale-[1.08] hover:bg-[#7B2CBF] hover:text-white hover:shadow-[0_0_16px_rgba(123,44,191,0.4)]"
        >
          ✕
        </button>
        <section className="grid h-full grid-cols-1 gap-6 p-6 lg:grid-cols-[35%_65%] lg:p-8">
          <ProfileCard />
          <ChatTerminal sectionId="ai-assistant-modal" />
        </section>
      </motion.div>
    </div>
  );
}