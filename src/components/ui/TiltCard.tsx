"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

interface TiltCardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly maxTilt?: number;
}

export function TiltCard({ children, className, maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  function handlePointerEnter() {
    // Measure once per hover session instead of on every pointermove.
    // getBoundingClientRect() forces a synchronous layout read — calling it
    // on every mousemove (60+ times/second) is exactly what Lighthouse's
    // "forced reflow" warning flags.
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    const rect = rectRef.current;
    if (!el || !rect) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    el.style.setProperty("--tilt-x", `${(0.5 - y) * maxTilt * 2}deg`);
    el.style.setProperty("--tilt-y", `${(x - 0.5) * maxTilt * 2}deg`);
    el.style.setProperty("--glow-x", `${x * 100}%`);
    el.style.setProperty("--glow-y", `${y * 100}%`);
  }

  function resetTilt() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    rectRef.current = null;
  }

  return (
    <div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerUp={resetTilt}
      className={`tilt-card ${className ?? ""}`}
      style={{
        transform: "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
      }}
    >
      <div className="relative z-0">{children}</div>
      <div className="tilt-card-glow" aria-hidden="true" />
    </div>
  );
}