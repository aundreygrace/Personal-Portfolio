export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: "github" | "linkedin" | "mail" | "whatsapp";
}

export interface ProfileData {
  readonly name: string;
  readonly fullName: string;
  readonly role: string;
  readonly headline: string;
  readonly description: string;
  readonly location: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly whatsappHref: string;
  readonly resumeHref: string;
  readonly techHighlights: readonly string[];
  readonly socials: readonly SocialLink[];
}

export interface AboutData {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly specialization: string;
  readonly primaryStack: readonly string[];
}

export type SkillTier = "core" | "relational" | "supporting" | "tooling";

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly tier: SkillTier;
  readonly tag: string;
  readonly items: readonly string[];
}

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
}

export interface ProjectImageAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly role: string;
  readonly classification: string;
  readonly stack: readonly string[];
  readonly metrics: readonly ProjectMetric[];
  readonly contributions: readonly string[];
  readonly images: readonly ProjectImageAsset[];
  readonly featured: boolean;
}

export interface ExperienceEntry {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly responsibilities: readonly string[];
  readonly stack: readonly string[];
}

export interface EducationEntry {
  readonly id: string;
  readonly institution: string;
  readonly program: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
}

export interface Certification {
  readonly id: string;
  readonly issuer: string;
  readonly name: string;
  readonly issueDate: string;
  readonly expiryDate: string;
  readonly image?: ProjectImageAsset;
  readonly verifyHref?: string;
}
