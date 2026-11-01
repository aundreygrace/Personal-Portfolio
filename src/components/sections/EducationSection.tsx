import { education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export function EducationSection() {
  return (
    <SectionWrapper id="education" tone="canvas">
      <SectionHeading index="06" kicker="Academic Foundation" title="Education" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.id} index={i}>
            <div className="rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] p-6 shadow-[3px_3px_0px_0px_var(--border-structural)]">
              <h3 className="font-[var(--font-heading)] text-lg font-bold text-[var(--text-main)]">
                {entry.institution}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{entry.program}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                {entry.location} · {entry.startDate} – {entry.endDate}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}