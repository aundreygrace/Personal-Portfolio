import { about } from "@/data/profile";
import { education, experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function AboutSection() {
  const firstExperience = experience[0];
  const firstEducation = education[0];

  return (
    <SectionWrapper id="profile" tone="warm">
      <SectionHeading index="02" kicker="Background" title={about.heading} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-[0.9375rem] leading-relaxed text-[var(--text-main)]">
              {paragraph}
            </p>
          ))}

          <div className="mt-6 flex flex-wrap gap-6 rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] p-5 shadow-[3px_3px_0px_0px_var(--border-primary)]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
                Specialization
              </p>
              <p className="mt-1 text-sm font-[var(--font-heading)] font-semibold text-[var(--text-main)]">
                {about.specialization}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
                Primary Stack
              </p>
              <p className="mt-1 text-sm font-[var(--font-heading)] font-semibold text-[var(--text-main)]">
                {about.primaryStack.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {firstEducation ? (
            <div className="rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] p-5 shadow-[3px_3px_0px_0px_var(--border-structural)]">
              <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-accent-blue)] uppercase">
                Education
              </p>
              <p className="mt-2 text-base font-[var(--font-heading)] font-semibold text-[var(--text-main)]">
                {firstEducation.institution}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{firstEducation.program}</p>
              <p className="mt-2 font-mono text-[11px] text-[var(--text-muted)]">
                {firstEducation.startDate} – {firstEducation.endDate}
              </p>
            </div>
          ) : null}

          {firstExperience ? (
            <div className="rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] p-5 shadow-[3px_3px_0px_0px_var(--interactive-primary-bg)]">
              <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-accent-orange)] uppercase">
                Internship
              </p>
              <p className="mt-2 text-base font-[var(--font-heading)] font-semibold text-[var(--text-main)]">
                {firstExperience.company}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{firstExperience.role}</p>
              <p className="mt-2 font-mono text-[11px] text-[var(--text-muted)]">
                {firstExperience.startDate} – {firstExperience.endDate}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
}
