import type { Project } from "@/types/portfolio";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function ProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  return (
    <TiltCard className="overflow-hidden rounded-[4px]" maxTilt={4}>
      <article
        className={cn(
          "overflow-hidden rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] shadow-[4px_4px_0px_0px_var(--border-primary)]",
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-warm)] px-5 py-3">
          <Badge tone={project.featured ? "warning" : "neutral"}>
            {project.featured ? "Flagship Project" : "Commercial Utility"}
          </Badge>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {project.role}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 p-5 md:p-8 lg:grid-cols-2">
          <div>
            <h3 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--text-main)]">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} tone="accent">
                  {tech}
                </Badge>
              ))}
            </div>

            {project.metrics.length > 0 ? (
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[4px] border border-[var(--border-muted)] bg-[var(--bg-surface-technical)] px-3 py-2.5"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      {metric.label}
                    </dt>
                    <dd className="font-[var(--font-heading)] text-lg font-bold text-[var(--text-accent-blue)]">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <ul className="mt-5 space-y-2.5">
              {project.contributions.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--text-main)]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--interactive-accent-bg)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            {project.images.map((image, i) => (
              <WindowFrame
                key={image.src}
                label={`${project.id}.app/${i === 0 ? "dashboard" : "view"}`}
                image={image}
                priority={priority && i === 0}
              />
            ))}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" tone="technical">
      <SectionHeading
        index="04"
        kicker="Selected Projects"
        title="Verified Work"
        description="Systems developed during an internship and independent commercial work, emphasizing relational database architecture, RBAC, and validated server-side throughput."
      />
      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.id} index={i}>
            <ProjectCard project={project} priority={i === 0} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}