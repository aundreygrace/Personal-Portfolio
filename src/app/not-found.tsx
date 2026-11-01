import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase">
        404
      </p>
      <h1 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--text-main)]">
        Page not found.
      </h1>
      <p className="max-w-md text-sm text-[var(--text-muted)]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/">Back to home</Button>
    </div>
  );
}
