import type { SkillGroup, SkillTier } from "@/types/portfolio";
import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const tierAccent: Record<SkillTier, string> = {
  core: "shadow-[3px_3px_0px_0px_var(--border-structural)] border-[var(--border-structural)]",
  relational: "shadow-[3px_3px_0px_0px_var(--interactive-primary-bg)] border-[var(--border-primary)]",
  supporting: "shadow-[2px_2px_0px_0px_var(--border-primary)] border-[var(--border-primary)]",
  tooling: "shadow-[2px_2px_0px_0px_var(--border-primary)] border-[var(--border-primary)]",
};

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <TiltCard className="overflow-hidden rounded-[4px]" maxTilt={6}>
      <div
        className={cn(
          "rounded-[4px] border-[1.5px] bg-[var(--bg-surface-elevated)] p-5",
          tierAccent[group.tier],
        )}
      >
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-[var(--font-heading)] text-base font-semibold text-[var(--text-main)]">
            {group.title}
          </h3>
          <Badge tone={group.tier === "core" ? "accent" : "neutral"}>{group.tag}</Badge>
        </div>
        <ul className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li
              key={item}
              className="rounded-[2px] border border-[var(--border-muted)] bg-[var(--bg-surface-technical)] px-2.5 py-1 font-mono text-[12px] text-[var(--text-main)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </TiltCard>
  );
}

export function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise" tone="canvas">
      <SectionHeading
        index="03"
        kicker="System Competencies"
        title="Technical Expertise"
        description="Structured engineering classifications instead of ungrounded percentage ratings."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} index={i} className="h-full">
            <SkillCard group={group} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}