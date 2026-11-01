import Image from "next/image";
import type { ReactNode } from "react";
import type { ProjectImageAsset } from "@/types/portfolio";

interface WindowFrameProps {
  readonly label: string;
  readonly image: ProjectImageAsset;
  readonly caption?: ReactNode;
  readonly priority?: boolean;
}

export function WindowFrame({ label, image, caption, priority = false }: WindowFrameProps) {
  return (
    <figure className="overflow-hidden rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] shadow-[4px_4px_0px_0px_var(--border-structural)]">
      <div className="flex items-center justify-between border-b-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-warm)] px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-primary)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-primary)]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[var(--border-primary)]" />
        </div>
        <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-[var(--text-muted)]">
          {label}
        </span>
      </div>
      <div className="relative max-h-[560px] overflow-y-auto bg-[var(--bg-surface-technical)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="border-t-[1.5px] border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] px-3 py-2 font-mono text-[11px] text-[var(--text-muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
