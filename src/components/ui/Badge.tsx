import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "accent" | "warning" | "verified";

interface BadgeProps {
  readonly children: ReactNode;
  readonly tone?: BadgeTone;
  readonly className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  neutral: "bg-[var(--bg-surface-elevated)] text-[var(--text-main)] border-[var(--border-primary)]",
  accent:
    "bg-[var(--bg-surface-tint)] text-[var(--text-accent-blue)] border-[var(--border-structural)]",
  warning:
    "bg-[var(--interactive-primary-bg)]/15 text-[var(--text-accent-orange)] border-[var(--border-primary)]",
  verified:
    "bg-[var(--status-verified)]/15 text-[var(--text-accent-blue)] border-[var(--status-verified)]",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.08em] uppercase",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

