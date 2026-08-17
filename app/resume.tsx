"use client";

import { useRef } from "react";
import { resumePdf, site } from "./content";

/**
 * The résumé PDF in a native <dialog>. showModal() gives the focus trap, the
 * inert background and Esc-to-close for free — none of that is worth
 * reimplementing.
 */
export function ResumeButton() {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="border-b border-rule pb-0.5 text-muted transition-colors hover:border-accent hover:text-ink"
      >
        Résumé
      </button>

      <dialog
        ref={ref}
        aria-label="Résumé"
        // Clicking the backdrop hits the dialog element itself, not its contents.
        onClick={(e) => {
          if (e.target === ref.current) ref.current.close();
        }}
        className="m-auto flex h-[90dvh] w-[min(56rem,94vw)] flex-col border border-rule bg-paper p-0 text-ink backdrop:bg-ink/50"
      >
        <div className="flex items-baseline justify-between gap-4 border-b border-rule px-5 py-3">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {site.name} — Résumé
          </p>
          <div className="flex gap-4 font-mono text-xs">
            <a
              href={resumePdf}
              download
              className="text-muted transition-colors hover:text-accent"
            >
              Download ↓
            </a>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="text-muted transition-colors hover:text-ink"
            >
              Close ✕
            </button>
          </div>
        </div>

        {/* Inline PDF viewing is unreliable on mobile browsers, so the object
            falls back to a plain link rather than an empty grey box. */}
        <object
          data={resumePdf}
          type="application/pdf"
          className="min-h-0 flex-1 bg-surface"
          aria-label="Résumé, PDF"
        >
          <div className="flex h-full items-center justify-center p-8 text-center">
            <p className="leading-relaxed text-ink/85">
              Your browser won&rsquo;t display the PDF inline.{" "}
              <a
                href={resumePdf}
                className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent"
              >
                Open it in a new tab ↗
              </a>
            </p>
          </div>
        </object>
      </dialog>
    </>
  );
}
