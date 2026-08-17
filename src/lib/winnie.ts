/**
 * Winnie — the portfolio assistant.
 *
 * Architecture note: `WinnieBrain` is the contract. Today it is implemented by
 * `LocalWinnieBrain` (keyword intent matching over a curated knowledge object —
 * no API key, no network call, nothing fabricated).
 *
 * To upgrade to an LLM later:
 *   1. Implement `WinnieBrain` with a server-side proxy call (OpenAI/OpenRouter/…).
 *   2. NEVER put API keys in frontend code — the proxy is the only thing
 *      that holds the key.
 *   3. Swap the export below: `export const brain: WinnieBrain = new LlmWinnieBrain(...)`.
 */

export interface ChatMessage {
  from: "user" | "assistant";
  text: string;
}

export interface WinnieBrain {
  ask(question: string): Promise<string>;
}

export const winnieIntro =
  "Hi — I'm Winnie. I can help you explore Vineet's experience, projects, and interests.";

export const suggestedQuestions = [
  "Who is Vineet?",
  "Tell me about his ZS experience",
  "Why AI Product Management?",
  "Show me his projects",
  "What makes him different?",
  "How can I contact him?",
];

interface KnowledgeEntry {
  intents: string[];
  keywords: string[];
  answer: string;
}

const knowledge: KnowledgeEntry[] = [
  {
    intents: ["who", "about"],
    keywords: [
      "who is",
      "who's",
      "about vineet",
      "tell me about",
      "introduce",
      "background",
      "him",
      "vineet",
    ],
    answer:
      "Vineet is a Rice MBA candidate ('28) and former ZS Associates consultant who works at the intersection of healthcare analytics, AI, product, and strategy. He's an aspiring product manager with a biotechnology engineering background — currently in Houston, originally from Delhi.",
  },
  {
    intents: ["experience", "zs"],
    keywords: [
      "zs",
      "consulting",
      "consultant",
      "work experience",
      "experience",
      "career",
      "job",
      "did he do",
    ],
    answer:
      "At ZS Associates — a global consulting firm focused on healthcare — Vineet was a Business Consultant. He worked across healthcare analytics and consulting engagements, turning complex data into actionable insights and client recommendations. The highlight: pricing weight-loss medications in the US and Europe, one of the fastest-moving markets in healthcare.",
  },
  {
    intents: ["education"],
    keywords: ["education", "mba", "rice", "university", "study", "studied", "school", "degree"],
    answer:
      "Vineet's undergrad is in biotechnology engineering from Netaji Subhas University of Technology (NSIT), Delhi. He's now an MBA candidate at Rice University's Jones Graduate School of Business, class of 2028.",
  },
  {
    intents: ["why-pm", "product"],
    keywords: [
      "product management",
      "product manager",
      "why product",
      "why ai product",
      "aspiring",
      "pm",
      "goals",
    ],
    answer:
      "Product management combines everything Vineet enjoys: understanding users, thinking strategically, working with data, and actually building things. And AI is rewriting how products get built — he wants to be at the front of that change, not watching it.",
  },
  {
    intents: ["projects"],
    keywords: ["projects", "built", "portfolio", "show me his work", "work has he", "case study", "made"],
    answer:
      "Two standouts: (1) an AI real-estate infographic generator — an automated workflow from property input to finished marketing infographic; and (2) Winnie — the assistant you're talking to right now — a knowledge-based portfolio chatbot, designed to be upgraded to an LLM backend. Both have full case studies in the Selected Work section.",
  },
  {
    intents: ["skills"],
    keywords: ["skills", "good at", "strengths", "capabilities", "what can he do", "expert"],
    answer:
      "Strategy: structured problem solving, market & competitive analysis. Analytics: healthcare analytics, data storytelling. Product: product thinking, PRDs, AI product concepts. AI: generative AI, LLM applications, n8n automations. Communication: executive storytelling and cross-functional collaboration.",
  },
  {
    intents: ["different", "unique"],
    keywords: ["different", "unique", "stand out", "special", "strongest", "hiring"],
    answer:
      "Most people are strong in one lane — analytics, strategy, product, or communication. Vineet deliberately works across all of them: consulting discipline for framing problems, engineering training for building things, an MBA for the market view, and a storyteller's sense of narrative. He also builds what he talks about — starting with the site you're on right now.",
  },
  {
    intents: ["interests", "hobbies"],
    keywords: [
      "chole",
      "bhature",
      "trek",
      "trekking",
      "hobby",
      "hobbies",
      "delhi",
      "kedarnath",
      "mountain",
      "food",
      "himalayas",
    ],
    answer:
      "Ask him about the Kedarnath trek — he led a 5-day waste-cleanliness camp in the Himalayas, organizing volunteers to protect one of India's most sacred high-altitude destinations. And about chole bhature, which he'll defend as the world's best food — he's always on the hunt for an authentic plate in Houston.",
  },
  {
    intents: ["contact"],
    keywords: ["contact", "email", "linkedin", "reach", "connect", "talk to", "call"],
    answer:
      "The fastest route is the contact section at the bottom of this page — email and LinkedIn links live there. Vineet is based in Houston and always open to conversations about AI, product, and strategy.",
  },
];

const fallbackAnswer =
  "I don't have a solid answer for that yet — my knowledge base is still small. Try one of the suggested questions below, or message Vineet directly through the contact section.";

export class LocalWinnieBrain implements WinnieBrain {
  async ask(question: string): Promise<string> {
    const q = question.toLowerCase();
    let best: KnowledgeEntry | null = null;
    let bestScore = 0;

    for (const entry of knowledge) {
      let score = 0;
      for (const kw of entry.keywords) {
        if (q.includes(kw)) score += 1;
      }
      if (score > bestScore) {
        best = entry;
        bestScore = score;
      }
    }

    return best && bestScore > 0 ? best.answer : fallbackAnswer;
  }
}

export const brain: WinnieBrain = new LocalWinnieBrain();