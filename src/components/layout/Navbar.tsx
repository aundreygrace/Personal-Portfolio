"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(NAV_LINKS[0]?.href ?? "");
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);

  // Always-on section tracking — runs for the entire time the page is open,
  // not just once on load.
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveHref(`#${topMost.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = linkRefs.current.get(activeHref);
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeHref]);

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-[var(--border-primary)] bg-[var(--bg-canvas)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-base font-bold text-[var(--text-main)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[4px] border-[1.5px] border-[var(--border-primary)] bg-[var(--interactive-primary-bg)] text-sm font-bold text-[var(--interactive-primary-text)] shadow-[2px_2px_0px_0px_var(--border-primary)]">            AG
          </span>
          {profile.name}
        </Link>

        <nav className="relative hidden items-center gap-1 md:flex" aria-label="Primary">
          {pillStyle ? (
            <span
              aria-hidden="true"
              className="absolute top-1/2 h-8 -translate-y-1/2 rounded-[4px] bg-[var(--bg-surface-tint)] transition-[left,width] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />
          ) : null}
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              ref={(el) => {
                if (el) linkRefs.current.set(link.href, el);
              }}
              href={link.href}
              className={`relative z-10 rounded-[4px] px-3 py-1.5 text-sm font-medium transition-colors ${
                activeHref === link.href
                  ? "text-[var(--text-accent-blue)]"
                  : "text-[var(--text-main)] hover:text-[var(--text-accent-blue)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-[4px] border-[1.5px] border-[var(--border-primary)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="relative z-50 border-t-[1.5px] border-[var(--border-primary)] bg-[var(--bg-canvas)] px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 text-sm font-medium transition-colors ${
                    activeHref === link.href ? "text-[var(--text-accent-blue)]" : "text-[var(--text-main)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
