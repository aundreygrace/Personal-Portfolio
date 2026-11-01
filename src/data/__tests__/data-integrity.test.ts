import { describe, expect, it } from "vitest";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { certifications, education, experience } from "@/data/experience";

describe("data integrity", () => {
  it("profile has required contact fields", () => {
    expect(profile.email).toMatch(/@/);
    expect(profile.name.length).toBeGreaterThan(0);
  });

  it("every project has at least one image and one contribution", () => {
    for (const project of projects) {
      expect(project.images.length).toBeGreaterThan(0);
      expect(project.contributions.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
    }
  });

  it("every skill group has at least one item", () => {
    for (const group of skillGroups) {
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it("certifications have valid issue/expiry pairs", () => {
    for (const cert of certifications) {
      expect(cert.issueDate.length).toBeGreaterThan(0);
      expect(cert.expiryDate.length).toBeGreaterThan(0);
    }
  });

  it("experience and education entries have non-empty core fields", () => {
    for (const entry of experience) {
      expect(entry.responsibilities.length).toBeGreaterThan(0);
    }
    for (const entry of education) {
      expect(entry.institution.length).toBeGreaterThan(0);
    }
  });
});
