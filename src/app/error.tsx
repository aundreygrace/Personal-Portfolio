"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log diagnostic info only — never render internals to the visitor.
    console.error("Unhandled application error:", error.digest ?? error.message);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
        Error
      </p>
      <h1 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--text-main)]">
        Something went wrong.
      </h1>
      <p className="max-w-md text-sm text-[var(--text-muted)]">
        An unexpected error occurred while rendering this page. You can try again.
      </p>
      <Button href="#" variant="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
