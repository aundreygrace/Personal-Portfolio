import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Computed once at build time (this is a static site), not per-request.
const BUILD_TIME = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL ?? "https://example.com";
  return [
    {
      url: base,
      lastModified: BUILD_TIME,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
