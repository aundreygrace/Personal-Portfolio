import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  readonly index: string;
  readonly kicker: string;
  readonly title: string;
  readonly description?: string;
}

export function SectionHeading({ index, kicker, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="flex h-6 items-center rounded-[2px] bg-[var(--interactive-accent-bg)] px-2 font-mono text-[11px] font-bold tracking-[0.08em] text-[var(--interactive-accent-text)]">
          {index}
        </span>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
          {kicker}
        </span>
      </div>
      <h2 className="font-[var(--font-heading)] text-[1.75rem] font-bold leading-tight tracking-[-0.01em] text-[var(--text-main)] md:text-[2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}