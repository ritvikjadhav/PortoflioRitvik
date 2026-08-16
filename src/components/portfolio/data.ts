export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  categories: string[];
  demo?: string;
  repo?: string;
  accent: "cyan" | "indigo" | "emerald";
};

export const projects: Project[] = [
  {
    title: "Emerial",
    tagline: "Luxury Watch E-Commerce Platform",
    description:
      "An ultra-luxurious e-commerce web application designed with high-end typography, minimalist dark-mode aesthetics, smooth product showcases and fully responsive layouts.",
    stack: ["React", "Tailwind CSS", "Vercel"],
    categories: ["E-Commerce & UI"],
    demo: "https://emerial.vercel.app",
    repo: "https://github.com/ritvikjadhav",
    accent: "cyan",
  },
  {
    title: "VelType",
    tagline: "Forge your Speed, Master Every Keystroke",
    description:
      "A modern typing platform designed to test and improve typing speed.",
    stack: ["HTMl5", "CSS", "JavaScript"],
    categories: ["Real-Time", "Productivity", "Performance Tracking"],
    demo: "https://veltype.vercel.app",
    repo: "https://github.com/ritvikjadhav",
    accent: "indigo",
  },
];

export const filters = ["All", "Full-Stack", "E-Commerce & UI", "Real-Time"] as const;

export const skillGroups = {
  Frontend: ["React", "Tailwind CSS", "TypeScript", "HTML / CSS"],
  "Backend & Realtime": ["Supabase", "PostgreSQL", "WebSockets", "MongoDB", "SQL"],
  "Tools & DevOps": ["Git", "GitHub", "Docker", "VS Code", "Vercel"],
} as const;

export const timeline = [
  {
    period: "2024 — 2027",
    title: "BSc Information Technology",
    org: "Abhinav College • University of Mumbai",
    detail:
      "Mastering core computer science foundations including Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
  },
  
  {
    period: "2026",
    title: "Real-Time Typing Website Build",
    org: "Frontend based Local Storage Project",
    detail:
      "Engineered a low-latency chat engine utilizing Supabase WebSocket channels, implementing Row-Level Security (RLS) policies and optimistic client-side updates.",
  },
  {
    period: "2025",
    title: "Emerial — Luxury Commerce Build",
    org: "Full-Stack Project",
    detail:
      "Architected and deployed a production-grade luxury storefront focused on modern typography, fluid motion, responsive layouts, and conversion-first user flows.",
  },
];
