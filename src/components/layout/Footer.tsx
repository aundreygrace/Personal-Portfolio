import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/BrandIcons";

// Computed once at build time (this is a static site) rather than per-request,
// so it doesn't trip Next.js's Cache Components dynamic-value detection.
const BUILD_YEAR = new Date().getFullYear();

export function Footer() {
  const year = BUILD_YEAR;

  return (
    <footer className="border-t-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-warm)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-[var(--font-heading)] font-bold text-[var(--text-main)]">
            {profile.name} - {profile.role}
          </p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
            {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aundreygrace"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--text-main)] transition-colors hover:text-[var(--text-accent-blue)]"
          >
            <GithubGlyph width={18} height={18} />
          </a>
          <a
            href="https://linkedin.com/in/aundreygrace"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[var(--text-main)] transition-colors hover:text-[var(--text-accent-blue)]"
          >
            <LinkedinGlyph width={18} height={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="text-[var(--text-main)] transition-colors hover:text-[var(--text-accent-blue)]"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-[var(--text-muted)]">
          © {year} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
