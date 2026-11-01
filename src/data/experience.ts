import type { Certification, EducationEntry, ExperienceEntry } from "@/types/portfolio";

export const experience: readonly ExperienceEntry[] = [
  {
    id: "hexa-integra-mandiri",
    company: "CV. Hexa Integra Mandiri",
    role: "Software Developer Intern",
    location: "Sidoarjo, Indonesia",
    startDate: "September 2025",
    endDate: "February 2026",
    stack: ["PHP", "Laravel", "PostgreSQL", "RESTful APIs", "WordPress"],
    responsibilities: [
      "Developed backend features for CariArena, a production web-based sports venue booking platform supporting operations for 50+ sports venues.",
      "Designed and implemented a PostgreSQL database with 16 relational tables to support booking, transaction, venue, review, and user management workflows.",
      "Implemented authentication, email verification, and role-based access control (RBAC) to provide secure access across multiple user roles.",
      "Developed RESTful APIs and CRUD modules, enabling efficient frontend-backend integration and streamlined business operations.",
      "Led application deployment, performed database migrations, and conducted testing and production maintenance to ensure successful releases and system reliability.",
      "Worked with WordPress for website management and content updates during internship projects.",
    ],
  },
];

export const education: readonly EducationEntry[] = [
  {
    id: "smkn-1-mejayan",
    institution: "SMKN 1 Mejayan",
    program: "Software Engineering (Rekayasa Perangkat Lunak)",
    location: "Madiun, Indonesia",
    startDate: "July 2023",
    endDate: "May 2026",
  },
];

export const certifications: readonly Certification[] = [
  {
    id: "dicoding-web",
    issuer: "Dicoding Indonesia",
    name: "Belajar Dasar Pemrograman Web",
    issueDate: "October 2024",
    expiryDate: "October 2027",
    image: {
      src: "/certificates/dicoding-web.png",
      alt: "Dicoding certificate: Belajar Dasar Pemrograman Web",
      width: 1115,
      height: 794,
    },
    verifyHref: "https://dicoding.com/certificates/2VX344Y3NZYQ",
  },
  {
    id: "dicoding-js",
    issuer: "Dicoding Indonesia",
    name: "Belajar Dasar Pemrograman JavaScript",
    issueDate: "December 2024",
    expiryDate: "December 2027",
    image: {
      src: "/certificates/dicoding-js.png",
      alt: "Dicoding certificate: Belajar Dasar Pemrograman JavaScript",
      width: 1122,
      height: 789,
    },
    verifyHref: "https://dicoding.com/certificates/4EXGVEOYDXRL",
  },
  {
    id: "dicoding-ai",
    issuer: "Dicoding Indonesia",
    name: "Belajar Dasar AI",
    issueDate: "December 2024",
    expiryDate: "December 2027",
    image: {
      src: "/certificates/dicoding-ai.png",
      alt: "Dicoding certificate: Belajar Dasar AI",
      width: 1060,
      height: 714,
    },
    verifyHref: "https://dicoding.com/certificates/0LZ0RODWRP65",
  },
  {
    id: "bnsp-junior-programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    name: "Junior Programmer",
    issueDate: "May 2026",
    expiryDate: "May 2029",
    // No certificate image supplied for this credential — rendered as a text-only credential card.
  },
];
