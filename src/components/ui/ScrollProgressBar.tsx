"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      ticking.current = false;
    }

    function onScroll() {
      // rAF-throttled: caps updates to once per animation frame instead of
      // firing on every raw scroll event, which can be 60+ times/second.
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateProgress);
      }
    }

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-[3px] w-full">
      <div
        className="h-full bg-gradient-to-r from-[var(--interactive-accent-bg)] via-[var(--status-verified)] to-[var(--interactive-primary-bg)] transition-[width] duration-150 ease-out motion-reduce:transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
