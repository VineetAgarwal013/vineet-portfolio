export type ChatMessage = {
  id: number;
  role: "user" | "ai";
  text: string;
};

export const WELCOME_MESSAGE =
  "Hi! I'm Vineet's AI assistant. Ask me anything about his product roadmap experience, technical AI background, or Rice MBA journey.\n\nTry: Work Experience · Projects · Skills · MBA Journey · Product Strategy";

export const EMAIL = "va57@rice.edu";
export const PHONE = "+1 (408) 627-5574";

export const CHIPS = [
  {
    label: "Work Experience",
    prompt: "Tell me about Vineet's work experience",
    response:
      "Outcomes first — Vineet's path from builder to AI PM:\n• ZS Associates (2022–2026): Associate Consultant, Product Strategy → owned roadmap, 3 A/B tests (+20% daily users), $15M incremental revenue; scaled ZS's first AI-driven sales engine (autoencoders on 100M+ healthcare providers, +50% lead-scoring efficiency).\n• Rice MBA (STEM-designated, Merit Scholar) paired with hands-on analytics and GTM execution.",
  },
  {
    label: "Projects",
    prompt: "What AI and product projects has Vineet worked on?",
    response:
      "Shipped at enterprise scale:\n• Launched & scaled ZS's first AI-driven sales engine — autoencoders trained on 100M+ healthcare providers, improving lead-scoring efficiency by 50% while managing regulatory risk.\n• Deployed XGBoost forecasting on Snowflake + external healthcare data, driving $4M revenue growth.\n• Built automated data-to-model pipelines (−40% analysis time) and redesigned a forecasting model generating $15M incremental revenue.\n• Skills: SQL, Statistical Modeling, Forecasting, Product Analytics, Amplitude, Tableau, Figma, Jira.",
  },
  {
    label: "Skills",
    prompt: "What are Vineet's core skills?",
    response:
      "• Product: Strategy, Vision, Roadmapping, Agile/Scrum, A/B Testing, Product Analytics.\n• Analytics & Tools: SQL, Statistical Modeling, Forecasting, Data Analysis, Jira, Figma, Amplitude, Tableau, Excel, PowerPoint.\n• Business Strategy: Market Analysis, Competitive Analysis, Pricing Strategy, Go-to-Market (GTM) Strategy.",
  },
  {
    label: "MBA Journey",
    prompt: "Tell me about Vineet's MBA journey",
    response:
      "• Rice University — Jones Graduate School of Business: MBA (STEM-designated), Merit Scholarship (~60% tuition), Consulting & AI Club.\n• B.E. in Biotechnology from Netaji Subhas Institute of Technology (2022) — 1st place national entrepreneurship competition, elected President.\n• The MBA pairs strategy frameworks (market analysis, pricing, GTM) with his hands-on AI/analytics execution.",
  },
  {
    label: "Product Strategy",
    prompt: "What is Vineet's product strategy experience?",
    response:
      "Vineet moved from execution to ownership — it's the throughline of his career:\n• He 0→1 built a venture ($200K ARR) — learning that outcomes come from owning vision, prioritization, and delivery end-to-end.\n• At ZS he ran as Product Owner: translating client needs into user stories and sprint execution, lifting team velocity by 50% and daily users by 20% via A/B tests.\n• His Rice MBA (STEM-designated) adds the strategy rigor — market analysis, pricing, GTM — to pair with deep AI/analytics execution.",
  },
];

type Route = {
  keywords: string[];
  response: string;
};

const ROUTES: Route[] = [
  {
    keywords: ["why hire", "hire", "recommend", "why should"],
    response: CHIPS[0].response,
  },
  {
    keywords: ["machine learning", "autoencoder", "xgboost", "snowflake", "deep learning", "technical background", "ai-driven", "ai engine", "ai model", "ai skills", "ml", "model", "engineer"],
    response: CHIPS[1].response,
  },
  {
    keywords: ["zs", "associates", "consultant", "consulting", "data science", "analytics", "experience", "work", "career", "impact"],
    response: CHIPS[0].response,
  },
  {
    keywords: ["rice", "mba", "education", "school", "background", "degree", "college", "university", "grad"],
    response: CHIPS[3].response,
  },
  {
    keywords: ["skills", "stack", "tools", "sql", "tech", "technologies"],
    response: CHIPS[2].response,
  },
  {
    keywords: ["agile", "scrum", "sprint", "velocity", "roadmap", "product owner", "process", "jira", "a/b", "ab test"],
    response: CHIPS[4].response,
  },
  {
    keywords: ["why pm", "why product", "become a pm", "pm journey", "strategy"],
    response: CHIPS[4].response,
  },
  {
    keywords: ["contact", "email", "phone", "reach", "location", "linkedin", "where", "houston", "relocate"],
    response:
      "Vineet is based in Houston, TX and is open to AI PM roles in the US.\n• Email: " +
      EMAIL +
      "\n• Phone: " +
      PHONE,
  },
];

const FALLBACK =
  "I don't have that specific detail in Vineet's resume, but you can reach out to him directly at " +
  EMAIL +
  ".";

export function respondToInput(input: string): string {
  const q = input.toLowerCase();
  const match = ROUTES.find((r) => r.keywords.some((k) => q.includes(k)));
  return match ? match.response : FALLBACK;
}