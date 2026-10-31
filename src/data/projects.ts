export type ProjectCategory = "SHIPPED" | "IN LAB";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  image?: string;
  url?: string;
  github?: string;
  demo?: string;
  metrics?: string[];
  year?: string;
  role?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "taskly",
    title: "Taskly AI",
    subtitle: "Intelligent AI Task Manager",
    description:
      "Automates daily workflow prioritization and eliminates manual task backlogs with smart scheduling rules.",
    tags: ["AI Ready", "Productivity", "Calendar Scheduling", "0 to 1"],
    category: "SHIPPED",
    image: "/projects/_card-design.png",
    demo: "https://vineet-taskly.vercel.app/",
    github: "https://github.com/VineetAgarwal013/taskly",
  },
  {
    id: "alumni-finder",
    title: "Rice Alumni Finder",
    subtitle: "Smart Networking",
    description:
      "Finds people at a chosen company, role and city, Rice alumni first, ranks them by shared background and drafts a LinkedIn note.",
    tags: ["Networking", "Brave Search", "Supabase", "MVP"],
    category: "SHIPPED",
    image: "/projects/_card-design.png",
    demo: "https://rice-alumni-finder.vercel.app/",
  },
  {
    id: "job-hunter",
    title: "Job Hunter",
    subtitle: "Career Automation",
    description:
      "End-to-end job discovery agent that matches technical roles to background experience and automates application logs.",
    tags: ["LLM", "Python", "OpenAI", "Workflow"],
    category: "IN LAB",
    image: "/projects/_card-design.png",
  },
  {
    id: "excel-sticky-keys",
    title: "Excel Sticky Keys",
    subtitle: "Excel Productivity Helper",
    description:
      "Productivity tool that keeps key actions pinned and one tap away for faster Excel workflows.",
    tags: ["Excel", "Automation", "Productivity", "MVP"],
    category: "IN LAB",
    image: "/projects/_card-design.png",
  },
];