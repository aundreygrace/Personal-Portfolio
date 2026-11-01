import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-16 bg-[var(--bg-canvas)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
            <MapPin size={12} aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div>
          <h1 className="text-4xl leading-[1.1] font-[family-name:var(--font-heading)] font-bold tracking-[-0.02em] text-[var(--text-main)] md:text-5xl">
            Hi, I&apos;m {profile.fullName}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
            {profile.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.techHighlights.map((tech) => (
              <Badge key={tech} tone="accent">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" icon={<ArrowRight size={16} aria-hidden="true" />}>
              View Selected Projects
            </Button>
            <Button
              href={profile.resumeHref}
              variant="secondary"
              download="Aundrey-Grace-CV.pdf"
              icon={<Download size={16} aria-hidden="true" />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}