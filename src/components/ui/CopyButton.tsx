"use client";

import { useState } from "react";
import { Check, Copy, X } from "lucide-react";

interface CopyButtonProps {
  readonly value: string;
  readonly label: string;
}

type CopyState = "idle" | "copied" | "failed";

function fallbackCopy(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textarea);
    return successful;
  } catch {
    return false;
  }
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");

  async function handleCopy() {
    let success = false;

    // navigator.clipboard only exists in secure contexts (https, or
    // localhost). On a phone opened via a plain http://<lan-ip>:3000 address
    // it's undefined, so fall back to the older execCommand method instead.
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        success = true;
      } catch {
        success = fallbackCopy(value);
      }
    } else {
      success = fallbackCopy(value);
    }

    setState(success ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-[2px] border border-[var(--border-primary)] bg-[var(--bg-surface-elevated)] px-2 py-1 font-mono text-[11px] font-medium text-[var(--text-main)] transition-colors hover:bg-[var(--bg-surface-tint)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--interactive-accent-bg)]"
      aria-label={`Copy ${label}`}
    >
      {state === "copied" ? <Check size={12} aria-hidden="true" /> : null}
      {state === "failed" ? <X size={12} aria-hidden="true" /> : null}
      {state === "idle" ? <Copy size={12} aria-hidden="true" /> : null}
      {state === "copied" ? "Copied" : state === "failed" ? "Failed" : "Copy"}
    </button>
  );
}
