import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "cariarena",
    name: "CariArena",
    tagline: "Sports Venue Booking Platform",
    role: "Software Developer Intern / Backend Developer",
    classification: "Flagship Project - CV. Hexa Integra Mandiri Internship",
    stack: ["PHP", "Laravel", "PostgreSQL", "RESTful APIs"],
    metrics: [
      { label: "Venues Supported", value: "50+" },
      { label: "Relational Tables", value: "16" },
    ],
    contributions: [
      "Designed and implemented a PostgreSQL database with 16 relational tables supporting booking, transaction, venue, review, and user management workflows.",
      "Implemented authentication, email verification, and role-based access control (RBAC) across multiple user roles.",
      "Developed RESTful APIs and CRUD modules for frontend-backend integration and business operations.",
      "Led application deployment, performed database migrations, and conducted testing and production maintenance.",
    ],
    images: [
      {
        src: "/images/cariarena-dashboard.png",
        alt: "CariArena admin dashboard showing booking management",
        width: 1366,
        height: 657,
      },
    ],
    featured: true,
    liveUrl: "https://cariarena.xyz",
    repoUrl: "https://github.com/aundreygrace/app-cariarena",
  },
  {
    id: "parkindo",
    name: "Parkindo",
    tagline: "Parking Management System",
    role: "Developer (Full Architecture & Logic)",
    classification: "Commercial Utility Project - 2026",
    stack: ["PHP", "MySQL", "Tailwind CSS", "Alpine.js", "Chart.js"],
    metrics: [
      { label: "Architecture", value: "MVC" },
      { label: "Access Roles", value: "3-tier" },
    ],
    contributions: [
      "Built role-based access control for Admin, Staff, and Owner roles.",
      "Implemented vehicle entry/exit management with automated parking fee calculation.",
      "Delivered real-time dashboard analytics with Chart.js visualizations.",
      "Added reporting and data export features (PDF, Excel, CSV) for operational monitoring.",
    ],
    images: [
      {
        src: "/images/parkindo.png",
        alt: "Parkindo tariff management interface",
        width: 1366,
        height: 657,
      },
    ],
    featured: false,
    liveUrl: "https://parkindo.vercel.app",
    repoUrl: "https://github.com/aundreygrace/Parkindo",
  },
];