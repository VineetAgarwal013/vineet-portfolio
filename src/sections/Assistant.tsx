import { motion } from "framer-motion";
import InlineAssistant from "../components/chatbot/InlineAssistant";

export default function Assistant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-auto max-w-3xl space-y-6"
    >
      <div>
        <h2 className="font-display text-2xl font-bold text-ink">AI Assistant</h2>
        <p className="mt-1 text-muted">
          Every answer is grounded in Vineet's verified knowledge base — no hallucinated facts.
        </p>
      </div>

      <InlineAssistant />
    </motion.div>
  );
}