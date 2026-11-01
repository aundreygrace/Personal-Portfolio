/** Lightweight className combiner — no external dependency needed for this scope. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Only `http(s)`, `mailto:`, and `tel:` schemes are allowed to be rendered as links.
 * Protects against accidental `javascript:` or other unsafe schemes reaching an href.
 */
export function isSafeExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href);
}
