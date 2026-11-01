import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn, isSafeExternalHref } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseButtonProps {
  readonly variant?: ButtonVariant;
  readonly children: ReactNode;
  readonly className?: string;
  readonly icon?: ReactNode;
  /** Pass true, or a filename string, to force a real browser download
   *  instead of in-app navigation (needed for files like the CV PDF). */
  readonly download?: boolean | string;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  readonly href: string;
  readonly external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--interactive-primary-bg)] text-[var(--interactive-primary-text)] border-[var(--border-primary)]",
  secondary:
    "bg-[var(--bg-surface-elevated)] text-[var(--text-main)] border-[var(--border-primary)]",
  ghost:
    "bg-transparent text-[var(--text-main)] border-[var(--border-primary)] font-mono",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[4px] border-[1.5px] px-5 py-2.5 text-sm font-semibold shadow-[2px_2px_0px_0px_var(--border-primary)] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0px_0px_var(--border-primary)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_var(--border-primary)] motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--interactive-accent-bg)]";

export function Button({
  href,
  external = false,
  variant = "primary",
  children,
  className,
  icon,
  download,
  ...rest
}: ButtonAsLinkProps &
  Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "download">) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (!isSafeExternalHref(href) && !href.startsWith("#") && !href.startsWith("/")) {
    // Refuse to render a link with an unexpected scheme.
    return null;
  }

  // A download link must always be a real <a> tag. next/link intercepts the
  // click for client-side routing, which silently swallows the `download`
  // attribute — the browser then just opens the file instead of saving it.
  const forceNativeAnchor =
    Boolean(download) ||
    external ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (forceNativeAnchor) {
    return (
      <a
        href={href}
        className={classes}
        download={download === true ? "" : download || undefined}
        target={href.startsWith("http") && !download ? "_blank" : undefined}
        rel={href.startsWith("http") && !download ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {icon}
    </Link>
  );
}