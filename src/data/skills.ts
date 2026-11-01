import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "backend",
    title: "Backend Development",
    tier: "core",
    tag: "CORE FOCUS",
    items: [
      "PHP",
      "Laravel",
      "RESTful API Development",
      "MVC Architecture",
      "Authentication",
      "RBAC",
      "CRUD Development",
    ],
  },
  {
    id: "database",
    title: "Database Systems",
    tier: "relational",
    tag: "RELATIONAL",
    items: ["PostgreSQL", "MySQL", "Relational Database Design", "Query Optimization"],
  },
  {
    id: "frontend",
    title: "Frontend Integration",
    tier: "supporting",
    tag: "SUPPORTING LAYER",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: "tooling",
    title: "Tools & Platforms",
    tier: "tooling",
    tag: "DEVOPS & TOOLING",
    items: ["Git", "GitHub", "Docker", "Postman", "WordPress"],
  },
];
