import type { Metadata } from "next";
// Self-hosted via @fontsource — zero runtime network calls, keeps CSP's
// font-src scoped to 'self'.
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: SITE_NAME,
    template: `%s — ${profile.name}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: profile.name }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
    verification: {
    google: "F9ms-agdQyh8rfnilM_AouCCeYJqYWR4ceIOhUO3D-U",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[4px] focus:border-[1.5px] focus:border-[var(--border-primary)] focus:bg-[var(--bg-surface-elevated)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--text-main)] focus:shadow-[2px_2px_0px_0px_var(--border-primary)]"
        >
          Skip to content
        </a>
        <script
            type="application/ld+json"
            // JSON-LD structured data is static, build-time-generated content — not
            // user input — so this is a safe, standard use of dangerouslySetInnerHTML
            // scoped to exactly this one script tag.
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: profile.name,
                jobTitle: profile.role,
                email: profile.email,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: profile.location,
                },
                sameAs: [
                  "https://github.com/aundreygrace",
                  "https://linkedin.com/in/aundreygrace",
                ],
                knowsAbout: ["PHP", "Laravel", "PostgreSQL", "RESTful APIs"],
              }),
            }}
          />

        <ScrollProgressBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
