"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly index?: number;
  /** HTML tag to render as. Defaults to "div" — pass "li" when this Reveal
   *  sits directly inside a <ul>/<ol>, so list semantics stay valid for
   *  screen readers instead of breaking up the ol > li structure. */
  readonly as?: ElementType;
}

export function Reveal({ children, className, index = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = Math.min(index, 6) * 70;

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className ?? ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}