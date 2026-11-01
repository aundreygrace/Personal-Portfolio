import type { NavLink } from "@/types/portfolio";

export const SITE_NAME = "Aundrey Grace - Portfolio";
export const SITE_DESCRIPTION =
  "Backend-focused web developer specializing in PHP, Laravel, and PostgreSQL. Engineering reliable backend systems and RESTful APIs.";

// Set this to the confirmed production domain before enabling canonical URLs / structured data.
export const SITE_URL: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];
