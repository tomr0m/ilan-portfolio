export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "JavaScript (ES6+)" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
    ],
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "RESTful APIs" },
      { name: "JWT Authentication" },
    ],
  },
  {
    category: "WordPress",
    skills: [
      { name: "Custom Themes (PHP)" },
      { name: "Plugin Development" },
      { name: "ACF" },
      { name: "Gutenberg Blocks" },
    ],
  },
  {
    category: "AI & LLM Integration",
    skills: [
      { name: "Claude API" },
      { name: "OpenAI API" },
      { name: "Cursor" },
      { name: "GitHub Copilot" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    category: "Operations",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Vite" },
      { name: "Linux Terminal" },
    ],
  },
  {
    category: "Security",
    skills: [
      { name: "RBAC" },
      { name: "bcrypt" },
      { name: "Middleware Architecture" },
    ],
  },
];
