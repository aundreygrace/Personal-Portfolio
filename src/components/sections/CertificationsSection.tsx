import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export function CertificationsSection() {
  return (
    <SectionWrapper id="credentials" tone="warm">
      <SectionHeading
        index="07"
        kicker="Verified Proficiency"
        title="Certifications & Credentials"
        description="Official industry certifications issued by recognized assessment bodies and verified software credentials."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} index={i} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] shadow-[3px_3px_0px_0px_var(--border-primary)]">
              <div className="relative aspect-[4/3] bg-[var(--bg-surface-technical)]">
                {cert.image ? (
                  <Image
                    src={cert.image.src}
                    alt={cert.image.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                    <ShieldCheck size={28} className="text-[var(--text-accent-blue)]" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Certificate image not supplied
                    </span>
                  </div>
                )}
                <Badge tone="verified" className="absolute bottom-2 right-2">
                  Verified
                </Badge>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {cert.issuer}
                </p>
                <h3 className="font-[var(--font-heading)] text-sm font-semibold leading-snug text-[var(--text-main)]">
                  {cert.name}
                </h3>
                <p className="mt-auto font-mono text-[11px] text-[var(--text-muted)]">
                  {cert.issueDate} – {cert.expiryDate}
                </p>
                {cert.verifyHref ? (
                  <a
                    href={cert.verifyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-accent-blue)] hover:underline"
                  >
                    Verify <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}