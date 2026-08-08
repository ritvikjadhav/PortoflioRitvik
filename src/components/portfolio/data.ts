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
    title: "TypeForge",
    tagline: "Forge your Speed, Master Every Keystroke",
    description:
      "A modern typing platform designed to test and improve typing speed.",
    stack: ["HTMl5", "CSS", "JavaScript"],
    categories: ["Real-Time", "Productivity", "Performance Tracking"],
    demo: "https://ritvikjadhav.github.io/TypeForge/",
    repo: "https://github.com/ritvikjadhav",
    accent: "indigo",
  },
  {
    title: "Mesh",
    tagline: "Decentralized P2P Mesh Chat",
    description:
      "A local browser-based peer-to-peer communication concept inspired by offline mesh networking frameworks — no servers, just direct encrypted peer links.",
    stack: ["WebRTC", "TypeScript", "IndexedDB"],
    categories: ["Real-Time"],
    repo: "https://github.com/ritvikjadhav",
    accent: "emerald",
  },
];

export const filters = ["All", "Full-Stack", "E-Commerce & UI", "Real-Time"] as const;

export const skillGroups = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML / CSS"],
  "Backend & Realtime": ["Node.js", "Express", "Supabase", "PostgreSQL", "WebSockets"],
  "Tools & DevOps": ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Figma"],
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
    title: "Decentralized Mesh Networking",
    org: "Systems & Networking Research",
    detail:
      "Prototyping serverless peer-to-peer messaging protocols using WebRTC data channels and local IndexedDB state synchronization for resilient offline communication.",
  },
  {
    period: "2025",
    title: "Real-Time Systems Engineering",
    org: "Independent Deep Dive",
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
