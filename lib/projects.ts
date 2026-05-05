export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

// TODO: replace each placeholder with a real project
export const projects: Project[] = [
  {
    // TODO: replace with real project
    name: "Project One",
    description:
      "A short one-or-two sentence description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "MySQL"],
    github: "https://github.com/tomr0m",
    demo: "",
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
