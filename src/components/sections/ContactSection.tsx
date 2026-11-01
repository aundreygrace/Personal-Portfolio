import { Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/BrandIcons";
import { CopyButton } from "@/components/ui/CopyButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: MessageCircle, label: "WhatsApp", value: profile.whatsapp, href: profile.whatsappHref, copy: true },
  { icon: GithubGlyph, label: "GitHub", value: "github.com/aundreygrace", href: "https://github.com/aundreygrace", copy: false },
  { icon: LinkedinGlyph, label: "LinkedIn", value: "linkedin.com/in/aundreygrace", href: "https://linkedin.com/in/aundreygrace", copy: false },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" tone="technical">
      <SectionHeading
        index="08"
        kicker="Direct Inquiries"
        title="Available for Professional Opportunities"
        description="For professional inquiries, collaboration opportunities, or discussions about software development, feel free to get in touch."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} index={i}>
              <div className="flex items-center justify-between gap-3 rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] px-4 py-3 shadow-[2px_2px_0px_0px_var(--border-primary)]">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex min-w-0 items-center gap-3"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[4px] border border-[var(--border-primary)] bg-[var(--bg-surface-tint)] text-[var(--text-accent-blue)]">
                    <channel.icon size={16} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-[var(--text-main)]">
                      {channel.value}
                    </span>
                  </span>
                </a>
                {channel.copy ? <CopyButton value={channel.value} label={channel.label} /> : null}
              </div>
            </Reveal>
          ))}

          <div className="flex items-center gap-2 pt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </div>
        </div>

        <Reveal index={channels.length}>
          <div className="rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--inverse-surface)] p-5 shadow-[4px_4px_0px_0px_var(--border-structural)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] text-[var(--inverse-on-surface)]/70">
                developer_status.json
              </span>
              <Badge tone="verified">Available</Badge>
            </div>
            <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-[var(--inverse-on-surface)]">
{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "status": "Available for Hire",
  "location": "${profile.location}",
  "contract_types": [
    "Full-time",
    "Contract",
    "Internship Extension"
  ],
  "primary_stack": ["PHP", "Laravel", "PostgreSQL"]
}`}
            </pre>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}