import type { AboutData, ProfileData } from "@/types/portfolio";

export const profile: ProfileData = {
  name: "Aundrey Grace",
  fullName: "Aundrey Grace Taflora Wibowo",
  role: "Backend-Focused Web Developer",
  headline: "Engineering Reliable Backend Systems.",
  description:
    "Developing web applications through backend engineering, RESTful API development, and relational database management. Focused on building structured, maintainable, and functional software solutions.",
  location: "Madiun, Indonesia",
  email: "aundreygrace@gmail.com",
  whatsapp: "+62 857 3112 5834",
  whatsappHref: "https://wa.me/6285731125834",
  resumeHref: "/documents/aundrey-grace-cv.pdf",
  techHighlights: ["PHP", "Laravel", "PostgreSQL", "REST APIs"],
  socials: [
    { label: "GitHub", href: "https://github.com/aundreygrace", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aundreygrace", icon: "linkedin" },
    { label: "Email", href: "mailto:aundreygrace@gmail.com", icon: "mail" },
    { label: "WhatsApp", href: "https://wa.me/6285731125834", icon: "whatsapp" },
  ],
};

export const about: AboutData = {
  heading: "Professional Profile",
  specialization: "Backend Development",
  primaryStack: ["Laravel", "PHP", "PostgreSQL"],
  paragraphs: [
    "A Junior Web Developer specializing in backend development, with practical experience in building web applications using PHP, Laravel, and PostgreSQL.",
    "Previously contributed to the development of CariArena during an internship at CV. Hexa Integra Mandiri, working on backend implementation, relational database design, authentication systems, RESTful API development, application deployment, and production maintenance.",
    "Technical experience also includes developing role-based application workflows, implementing database-driven features, and supporting frontend-backend integration.",
  ],
};
