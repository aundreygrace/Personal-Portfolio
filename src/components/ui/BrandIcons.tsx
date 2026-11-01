import type { SVGProps } from "react";

/**
 * lucide-react's current major version no longer ships third-party brand marks
 * (GitHub, LinkedIn, etc.). These are minimal, non-trademarked outline glyphs
 * drawn to match the lucide stroke style, used only as wayfinding icons next
 * to explicit text labels — not as a reproduction of either brand's logo.
 */

interface GlyphProps extends SVGProps<SVGSVGElement> {
  readonly size?: number | string;
}

export function GithubGlyph({ size, width, height, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinGlyph({ size, width, height, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size ?? width ?? 24}
      height={size ?? height ?? 24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3" />
    </svg>
  );
}

