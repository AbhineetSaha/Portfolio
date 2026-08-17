/**
 * The one layout primitive the site needs: a numbered section with its label
 * in the left margin on wide screens, stacked above the content on narrow ones.
 */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 border-t border-rule pt-8 sm:mt-20">
      <div className="sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-8">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted sm:sticky sm:top-8 sm:mb-0 sm:self-start">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

/** A labelled prose block. Shared by the project pages and the work log. */
export function Block({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      {title && (
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          {title}
        </h2>
      )}
      <div className={`leading-relaxed text-ink/85${title ? " mt-3" : ""}`}>
        {children}
      </div>
    </section>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-rule" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
