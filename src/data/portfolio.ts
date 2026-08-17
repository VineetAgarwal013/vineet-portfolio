/**
 * Centralized content for the entire site.
 * Every answer to "who Vineet is" lives here — update this file, not the components.
 *
 * PLACEHOLDER POLICY: Nothing here is invented. Anything not confirmed by Vineet
 * is marked with `[TODO: …]` (e.g. dates, locations, links). Grep for "TODO".
 */

import type { ChatMessage } from "../lib/winnie";

export const profile = {
  name: "Vineet Agarwal",
  role: "MBA Candidate · Rice University",
  tagline: "AI × Product × Strategy",
  location: "Houston, TX",
  origin: "Delhi, India",
  eyebrow: "Rice MBA ’28 · AI · Product · Strategy",
  headline: "Turning complex problems into products, strategies, and measurable outcomes.",
  supporting: "Rice MBA '28 • Healthcare Analytics & Consulting",
  credentials: [
    { label: "ZS Associates", sub: "Healthcare analytics & consulting" },
    { label: "Rice Business", sub: "MBA ’28" },
    { label: "AI × Product", sub: "Current focus" },
  ],
};

export const about = {
  headline: "I work at the intersection of healthcare, analytics, AI, product, and strategy.",
  body: [
    "At ZS Associates, I spent four years turning complex healthcare data into decisions clients could act on — recommendation models, pricing strategy, and AI product prototypes that moved revenue risk and opened new markets.",
    "Now at Rice Business, I'm studying how AI actually changes the way products are built and companies are run — and building things to test that, one project at a time.",
    "My throughline: find the messy problem, make it structured, and build the thing that makes the decision obvious.",
  ],
  highlights: ["Healthcare analytics", "Data science", "AI product prototyping", "Product strategy"],
};

export interface SkillGroup {
  category: string;
  emoji: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Analytics & Data",
    emoji: "📊",
    items: ["Statistical modeling", "Data science", "Excel", "SQL", "Python", "Pricing analytics"],
  },
  {
    category: "AI & Product",
    emoji: "🤖",
    items: ["AI product prototyping", "LLMs", "Prompt engineering", "n8n automation", "Product strategy", "Recommendation models"],
  },
  {
    category: "Business & Consulting",
    emoji: "💼",
    items: ["Commercial analytics", "Pricing strategy", "Client delivery", "Stakeholder management", "Training"],
  },
  {
    category: "Entrepreneurship",
    emoji: "🚀",
    items: ["Real estate investing", "Underwriting", "Operations", "Team building", "Automation"],
  },
];

export interface Venture {
  title: string;
  tagline: string;
  metrics: { value: string; label: string }[];
  body: string;
}

export const ventures: Venture[] = [
  {
    title: "Real Estate",
    tagline: "Investment portfolio, built while consulting",
    metrics: [
      { value: "$8M+", label: "portfolio value" },
      { value: "7", label: "clients" },
      { value: "4×", label: "returns in 3 years" },
    ],
    body: "A parallel track in real estate investing — underwriting, acquisition, and management — that compounded across three years.",
  },
  {
    title: "Diamond Venture",
    tagline: "A business that runs on its own",
    metrics: [
      { value: "~$200K", label: "ARR" },
      { value: "4", label: "full-time jobs" },
      { value: "3", label: "years running" },
    ],
    body: "Built and scaled a diamond venture to a self-sustaining business — operations, team, and economics designed to run without daily involvement.",
  },
];

export interface LeadershipItem {
  title: string;
  role: string;
  line: string;
}

export const leadership: LeadershipItem[] = [
  {
    title: "Ares Robotics",
    role: "Leadership",
    line: "Led the university robotics team — building, competing, and making engineering fun.",
  },
  {
    title: "Himalayas Trek Leader",
    role: "Leadership · Cleanliness drives",
    line: "Led treks through the Himalayas, including organized cleanliness drives along the routes.",
  },
  {
    title: "ZS Knowledge Transfer",
    role: "Training",
    line: "Ran Excel and Python training for colleagues — making data skills contagious.",
  },
];

export interface Essay {
  title: string;
  status: "COMING SOON";
  teaser: string;
}

export const essays: Essay[] = [
  {
    title: "Operational Effectiveness Isn't Strategy",
    status: "COMING SOON",
    teaser: "Why doing the same thing faster is not the same as choosing what to do.",
  },
  {
    title: "How AI Changes Product Management",
    status: "COMING SOON",
    teaser: "The job isn't disappearing — it's moving up the abstraction stack.",
  },
  {
    title: "What Makes a Good AI Product?",
    status: "COMING SOON",
    teaser: "Demos are easy. Products have constraints, feedback loops, and users.",
  },
  {
    title: "Turning Analytics Into Business Decisions",
    status: "COMING SOON",
    teaser: "The gap between a model and a decision is where most value is lost.",
  },
];

export interface Experience {
  company: string;
  monogram: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  awards?: string[];
}

export const experience: Experience[] = [
  {
    company: "ZS Associates",
    monogram: "ZS",
    role: "Associate Consultant",
    period: "2024–2026",
    duration: "≈ 2 years",
    location: "Healthcare analytics & consulting",
    summary:
      "Led analytics and strategy work across healthcare clients — from recommendation models to pricing strategy — moving complex data into decisions with real revenue consequences.",
    highlights: [
      "Mitigated a $10M revenue risk for a leading pharmaceutical client (Pfizer) through statistical modeling and launch-sequence recommendations.",
      "Built a pricing demand forecasting methodology that generated $4M in cross-sales within a single quarter.",
      "Shifted $55M in revenue-loss risk through analytics-led commercial recommendations.",
      "Juggled 4 concurrent studies across 8 associates and 4 vendors — prioritization under fire.",
    ],
    skills: ["Pricing strategy", "Statistical modeling", "Recommendation models", "Commercial analytics"],
    awards: ["ZS Champion Award — Top 1% firmwide"],
  },
  {
    company: "ZS Associates",
    monogram: "ZS",
    role: "Associate",
    period: "2022–2024",
    duration: "≈ 2 years",
    location: "Healthcare analytics & consulting",
    summary:
      "The apprentice years — learning how healthcare data, consulting discipline, and client reality fit together.",
    highlights: [
      "Reduced operations time by 55% by automating and streamlining recurring analytical workflows.",
      "Delivered 10% cost reduction for clients through efficiency-focused analytics.",
      "Prototyped AI product concepts and built Excel/Python training to spread data fluency across teams.",
    ],
    skills: ["Data science", "Automation", "AI prototyping", "Client delivery"],
    awards: ["HighFlyer Award — Top 5% firmwide"],
  },
];

export interface ProjectChapter {
  kicker: string;
  title: string;
  body: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  preview: "workflow" | "chat";
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  github?: string;
  website?: string;
  flow?: string[];
  previewChat?: ChatMessage[];
  chapters: ProjectChapter[];
}

export const projects: Project[] = [
  {
    id: "real-estate-infographic",
    title: "AI Real Estate Infographic Generator",
    category: "AI × Real Estate × Automation",
    tagline:
      "A workflow that transforms a property input into a polished, information-rich marketing infographic.",
    preview: "workflow",
    problem:
      "Property marketing is slow and template-heavy. Pulling together data points, writing copy, and designing a listing takes agents hours per property — and most of that time is spent on busywork, not insight.",
    solution:
      "An automated n8n workflow that researches web data about a property, generates content with an LLM, and composes a professional, on-brand infographic — from a single text input.",
    outcome: "A working, end-to-end demonstration — from one input to a finished infographic. A reusable template for any content-heavy process with messy inputs.",
    technologies: ["AI", "Automation", "n8n", "Web data", "LLMs"],
    flow: ["Property", "Web data", "AI processing", "Content generation", "Infographic"],
    chapters: [
      {
        kicker: "01 · The problem",
        title: "The bottleneck isn't design — it's orchestration",
        body: [
          "In real estate, information is the product — and most of it is scattered: listing fields, zoning notes, neighborhood stats, market comparisons. Assembling that into something a buyer actually wants to read takes hours of manual pulling, writing, and formatting.",
          "Individual agents and small listing teams rarely have a designer or copywriter on call. The result: most properties ship with flat, generic marketing that undersells them.",
        ],
      },
      {
        kicker: "02 · The user",
        title: "Agents with 30 minutes, not a design team",
        body: [
          "The user is a real estate professional who needs a polished, data-rich marketing asset for every listing — consistently, and without a production department behind them.",
          "The constraint that shapes everything: it has to be ≤ a few minutes of their time, from start to finish.",
        ],
      },
      {
        kicker: "03 · The insight",
        title: "Content is just data that has been shaped",
        body: [
          "Look closely and a marketing infographic is mostly structured data presented well: price history, neighborhood stats, school ratings, photos, a coherent story.",
          "That means the work isn't creativity — it's orchestration. If each ingredient can be gathered and structured automatically, the 'creative' step becomes an LLM writing from a well-defined brief, and the design step becomes a template.",
        ],
      },
      {
        kicker: "04 · The solution",
        title: "One input in, one infographic out",
        body: [
          "A single text input (a property identifier or address) triggers a pipeline: web research gathers the supporting data, an LLM drafts narrative and copy blocks against a strict schema, and a templated renderer composes the final infographic.",
          "Human checkpoints stay in the loop where judgment matters — but every mechanical step is automated.",
        ],
      },
      {
        kicker: "05 · How it works",
        title: "A pipeline built from small, swappable pieces",
        body: [
          "The workflow is orchestrated with n8n: each stage is a node that can be replaced, reordered, or upgraded independently — exactly how a product team would want to iterate on it.",
        ],
      },
      {
        kicker: "06 · Technology",
        title: "Orchestration-first, no code required",
        body: [
          "n8n handles the orchestration; LLMs handle generation; structured web data provides the facts; templates handle design. No bespoke application to maintain — the whole thing is a set of connected, observable steps.",
          "Because it's orchestration rather than a custom app, changing a prompt or swapping a data source is a 10-minute edit, not a release.",
        ],
      },
      {
        kicker: "07 · Why it matters",
        title: "A task that took hours becomes minutes",
        body: [
          "The general principle is what matters: any process where content is generated from structured inputs — proposals, reports, onboarding docs, listing pages — can be collapsed the same way.",
          "The project demonstrates the pattern: find the bottleneck, structure the inputs, let the model do the shaping, keep a human checkpoint.",
        ],
      },
      {
        kicker: "08 · What I would do next",
        title: "From demo to system",
        body: [
          "Add a knowledge base of past listings so the copy learns a brand voice. A/B test infographic designs for measurable engagement. Expose the workflow as a simple API. And let agents feed in CRM data directly, so the input becomes a button press.",
        ],
      },
    ],
  },
  {
    id: "winnie",
    title: "Personal AI Portfolio Assistant",
    category: "AI × Product × Conversational UI",
    tagline:
      "An AI assistant that answers questions about Vineet's experience, projects, skills, and background.",
    preview: "chat",
    problem:
      "A portfolio is read, not questioned. Visitors leave with general impressions instead of crisp answers — and recruiters have 45 seconds and very specific questions.",
    solution:
      "A compact chatbot grounded in a structured knowledge base: intent-matched answers, zero hallucinations, no API key required — architected so an LLM backend can be plugged in later.",
    outcome: "Live on this site right now. Open it from the bottom-right corner — or press Cmd/Ctrl + K and choose “Ask Winnie”.",
    technologies: ["AI", "Conversational UI", "Intent matching", "React", "LLM-ready"],
    previewChat: [
      {
        from: "user",
        text: "What kind of problems does Vineet work on?",
      },
      {
        from: "assistant",
        text: "Vineet works at the intersection of healthcare analytics, strategy, AI, and product — turning complex data into decisions people can act on.",
      },
      {
        from: "user",
        text: "Show me his projects",
      },
      {
        from: "assistant",
        text: "Two standouts: an AI real-estate infographic generator, and Winnie — the assistant you're talking to right now.",
      },
    ],
    chapters: [
      {
        kicker: "01 · The problem",
        title: "Portfolios answer questions that weren't asked",
        body: [
          "A static portfolio page is a monologue. It can't respond to what a specific recruiter actually wants to know — and in a 45-second skim, the question they cared about often goes unanswered.",
        ],
      },
      {
        kicker: "02 · The user",
        title: "The recruiter with 45 seconds",
        body: [
          "The user is a hiring manager, recruiter, or collaborator deciding whether Vineet is worth a conversation — right now, on their phone, mid-way between other tabs.",
          "Design goal: the exact answer to their question, in under three seconds, with zero friction.",
        ],
      },
      {
        kicker: "03 · The insight",
        title: "The questions are predictable; the answers are structured",
        body: [
          "Visitors to a personal portfolio ask the same handful of things: who is this person, what have they done, what do they want, what makes them different, how do I reach them.",
          "Every one of those answers is structured data that already exists — it just needs to be surfaced conversationally.",
        ],
      },
      {
        kicker: "04 · The solution",
        title: "A grounded assistant, not a hallucinator",
        body: [
          "Winnie answers from a curated knowledge object — intent matching over a small, verified dataset. No API key, no network call, no fabrications: every answer traces back to a fact Vineet wrote.",
          "The interface was designed so an LLM backend can replace the local brain later — same contract, better answers.",
        ],
      },
      {
        kicker: "05 · How it works",
        title: "Question → intent → structured answer",
        body: [
          "A visitor's question is scored against intent groups (background, experience, projects, skills, contact…). The best match returns a scripted, verifiable answer — with a typed reply and suggested follow-ups, so the conversation feels alive without inventing anything.",
        ],
      },
      {
        kicker: "06 · Technology",
        title: "React + intent matching, LLM-ready",
        body: [
          "The chatbot is a React component backed by a small brain interface. Today that brain is keyword intent matching over a local knowledge object; tomorrow it can be an LLM API.",
          "Security rule baked into the design: API keys never ship in frontend code — any future LLM call goes through a server-side proxy.",
        ],
      },
      {
        kicker: "07 · Why it matters",
        title: "The portfolio answers back",
        body: [
          "An interactive assistant converts a passive page into an active first impression — and it doubles as evidence of product thinking: user-first design, grounded data, an upgrade path, and honest constraints.",
        ],
      },
      {
        kicker: "08 · What I would do next",
        title: "From scripted to genuinely conversational",
        body: [
          "Swap the local brain for an LLM grounded on the same knowledge object. Add follow-up memory within a session, capture what visitors actually ask (privacy-respecting), and surface the most common questions back into the site so the content keeps improving.",
        ],
      },
    ],
  },
  {
    id: "taskly",
    title: "Taskly AI — Smart Task Manager",
    category: "AI × Product × Full-stack",
    tagline:
      "A smart task manager with an AI bucketer: type a task in plain English and it gets sorted into the right category, priority, and deadline automatically.",
    preview: "chat",
    problem:
      "Task dumps are unstructured — 'buy milk', 'finish homework', 'dentist friday'. Sorting them into categories, priorities, and dates by hand is the most tedious part of task management, and most apps make you do that busywork before they're useful.",
    solution:
      "A kanban-style task board where a Gemini-powered AI classifies every new task — title, priority, due date, category — from a single natural-language input. Storage is dual-mode: a SQLite backend (with accounts and sessions) for local use, and a static + serverless Vercel deployment with a localStorage fallback, so the hosted demo needs no database server.",
    outcome:
      "A working product end-to-end: AI bucketing on a live site, full CRUD board, drag-and-drop, deadlines, reminders (.ics), and a family-style onboarding flow. The architecture also solves a real deployment puzzle — same codebase runs as a full SQLite app locally and as a zero-backend demo on Vercel.",
    technologies: ["React", "AI", "SQLite", "Node.js", "LLMs", "Vercel"],
    github: "https://github.com/VineetAgarwal013/taskly",
    website: "https://taskly-livid-zeta.vercel.app",
    previewChat: [
      {
        from: "user",
        text: "buy milk tomorrow at 9am",
      },
      {
        from: "assistant",
        text: "Bucketed → 🥛 Buy milk · Priority: Medium · Due: Tomorrow 9:00 AM · Category: Items to Buy",
      },
      {
        from: "user",
        text: "finish homework friday!",
      },
      {
        from: "assistant",
        text: "Bucketed → 📚 Finish homework · Priority: High · Due: Friday · Category: Homework",
      },
    ],
    chapters: [
      {
        kicker: "01 · The problem",
        title: "Task apps make you work before you can work",
        body: [
          "Most task managers are inboxes with extra steps. The raw input is a messy sentence — 'buy milk', 'call dentist friday', 'finish the deck' — and the app demands you manually pick a category, a priority, and a date before the task is even saved.",
          "That friction is exactly where people abandon task managers: the organizing is the chore.",
        ],
      },
      {
        kicker: "02 · The user",
        title: "Families and households, not power users",
        body: [
          "The design center was a family-shared board: chores, groceries, homework, errands — many hands, one shared list. The person adding a task wants it captured and sorted in under five seconds, with the AI handling the taxonomy.",
        ],
      },
      {
        kicker: "03 · The insight",
        title: "Classification is the product",
        body: [
          "A task sentence contains almost everything needed to organize it — deadlines are words ('tomorrow', 'friday', 'in 3 days'), priorities are tone ('urgent', 'asap'), and categories are learned from context.",
          "If a model can read those signals reliably, the tedious metadata step disappears and the app becomes a good default for every task.",
        ],
      },
      {
        kicker: "04 · The solution",
        title: "Type it like you'd say it",
        body: [
          "The dock input takes plain English. A Gemini-powered classify endpoint returns a structured task — title, priority (high/med/low), ISO due date, optional reminder time, and the best-fit category — which lands directly on the board.",
          "When AI is unavailable the app degrades gracefully to smart keyword heuristics, so the board never stops working.",
        ],
      },
      {
        kicker: "05 · How it works",
        title: "One board, three columns, zero ceremony",
        body: [
          "Tasks flow through a grounded kanban board with per-column completion, inline editing, drag-and-drop between categories, an overdue lane, and a 'clear finished' sweep with undo.",
          "Deadlines render as relative badges (overdue in red, today in green, tomorrow in sky), and reminders generate a real .ics file that opens in Outlook, Apple, or Google Calendar.",
        ],
      },
      {
        kicker: "06 · Technology",
        title: "One codebase, two deployment personalities",
        body: [
          "Locally the app runs on a Node server backed by SQLite (via sql.js) with accounts, hashed passwords, and bearer-token sessions — a genuine multi-user backend.",
          "The same frontend deploys to Vercel as static files plus a single serverless function for AI classification, with storage falling back to per-browser localStorage when no API is reachable. The data layer detects which mode it's in and behaves accordingly.",
        ],
      },
      {
        kicker: "07 · Why it matters",
        title: "A demo that's actually deployed",
        body: [
          "Most portfolio demos are screenshots. Taskly is a live, interactive product — create an account, add a task, watch the AI bucket it. The dual-storage architecture is also a real engineering decision with a clean trade-off: full backend locally, zero-maintenance hosted demo.",
        ],
      },
      {
        kicker: "08 · What I would do next",
        title: "From demo to shared product",
        body: [
          "Move the hosted version to a managed database (Supabase or Neon) so the live demo has real accounts and sync. Add shared family lists with invitations, recurring tasks, and a voice input. The classify pipeline is model-agnostic and already swappable.",
        ],
      },
    ],
  },
];

export const contact = {
  email: "",
  linkedin: "",
  github: "https://github.com/VineetAgarwal013",
  resume: "",
};

export const footer = {
  tagline: "AI × Product × Strategy",
  note: "Built with React, curiosity, and too many tabs.",
  year: new Date().getFullYear(),
};