import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" tone="warm">
      <SectionHeading index="05" kicker="Official Internship Tenure" title="Professional Experience" />

      <ol className="space-y-6">
        {experience.map((entry, i) => (
          <Reveal
            key={entry.id}
            index={i}
            as="li"
            className="rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] p-6 shadow-[3px_3px_0px_0px_var(--border-primary)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--text-main)]">
                  {entry.role}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {entry.company} · {entry.location}
                </p>
              </div>
              <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                {entry.startDate} – {entry.endDate}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {entry.responsibilities.map((item, j) => (
                <li key={j} className="flex gap-2 text-sm leading-relaxed text-[var(--text-main)]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--interactive-primary-bg)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <Badge key={tech} tone="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionWrapper>
  );
}
