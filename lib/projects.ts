export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "TaskFlow",
    description:
      "Team project management platform with real-time collaboration. Build boards, assign tasks across 5 item types (Tasks, Meetings, Reminders, Deadlines, Events), and visualize work in List, Calendar, and Timeline views. Live updates via WebSockets.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/tomr0m/taskflow",
    demo: "https://taskflow-frontend-jade.vercel.app",
    featured: true,
  },
  {
    name: "RollLog",
    description:
      "BJJ training tracker with RPG-style progression and a built-in AI coach powered by the Claude API that analyzes training data and gives feedback.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Claude API",
      "Supabase",
      "Render",
      "Vercel",
    ],
    // TODO: add RollLog repo URL
    github: "",
    // TODO: confirm live URL
    demo: "",
  },
  {
    name: "Workflow",
    description:
      "Meeting scheduling tool similar to Calendly — availability management, booking flow, and calendar sync.",
    // TODO: confirm actual stack
    tags: [],
    // TODO: add Workflow repo URL
    github: "",
    demo: "",
  },
];
