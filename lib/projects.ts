export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

// TODO: replace each placeholder with a real project
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
    // TODO: replace with real project
    name: "Project Two",
    description:
      "A short one-or-two sentence description of what this project does and the problem it solves.",
    tags: ["Next.js", "Tailwind CSS", "Express.js"],
    github: "https://github.com/tomr0m",
    demo: "",
  },
  {
    // TODO: replace with real project
    name: "Project Three",
    description:
      "A short one-or-two sentence description of what this project does and the problem it solves.",
    tags: ["PHP", "WordPress", "Claude API"],
    github: "https://github.com/tomr0m",
    demo: "",
  },
];
