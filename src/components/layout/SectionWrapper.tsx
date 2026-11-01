import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  readonly id: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly tone?: "canvas" | "warm" | "technical";
}

const toneStyles = {
  canvas: "bg-[var(--bg-canvas)]",
  warm: "bg-[var(--bg-surface-warm)]",
  technical: "bg-[var(--bg-surface-technical)]",
} as const;

export function SectionWrapper({ id, children, className, tone = "canvas" }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-16 py-16 md:py-24", toneStyles[tone], className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">{children}</div>
    </section>
  );
}

