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
      "Automates daily workflow prioritization and eliminates manual task backlogs.",
    tags: ["AI READY", "PRODUCTIVITY", "CALENDAR SCHEDULING", "0 TO 1"],
    category: "SHIPPED",
    demo: "https://vineet-taskly.vercel.app/",
    github: "https://github.com/VineetAgarwal013/taskly",
  },
  {
    id: "alumni-finder",
    title: "Alumni Finder",
    subtitle: "Smart Networking",
    description: "(PLACEHOLDER — add real description)",
    tags: [],
    category: "IN LAB",
  },
  {
    id: "job-hunter",
    title: "Job Hunter",
    subtitle: "Career Automation",
    description: "(PLACEHOLDER — add real description)",
    tags: [],
    category: "IN LAB",
  },
];