"use client";

import { useRef } from "react";
import {
  certifications,
  education,
  leadership,
  links,
  profound,
  projects,
  resume,
  site,
  stack,
} from "./content";

/**
 * The résumé in a native <dialog>. showModal() gives the focus trap, the
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
        aria-labelledby="resume-name"
        // Clicking the backdrop hits the dialog element itself, not its contents.
        onClick={(e) => {
          if (e.target === ref.current) ref.current.close();
        }}
        className="m-auto max-h-[85dvh] w-[min(44rem,92vw)] overflow-y-auto border border-rule bg-paper p-0 text-ink backdrop:bg-ink/40"
      >
        <div className="sticky top-0 flex items-baseline justify-between gap-4 border-b border-rule bg-paper px-6 py-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Résumé
          </p>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            Close ✕
          </button>
        </div>

        <div className="px-6 py-8 sm:px-8">
          <header>
            <h2
              id="resume-name"
              className="text-2xl font-medium tracking-tight"
            >
              {site.name}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  href={`mailto:${links.email}`}
                >
                  {links.email}
                </a>
              </li>
              <li>{resume.phone}</li>
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  href={links.github}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  href={links.linkedin}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  href={links.leetcode}
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </header>

          <Part title="Education">
            {education.map((item) => (
              <Entry
                key={item.role}
                heading={item.org}
                sub={`${item.role} · ${item.note}`}
                meta={item.period}
              />
            ))}
          </Part>

          <Part title="Experience">
            <Entry
              heading={`${profound.company} (${profound.org})`}
              sub={profound.role}
              meta={`${profound.period} · ${profound.location}`}
              bullets={resume.bullets[profound.slug]}
            />
          </Part>

          <Part title="Projects">
            {projects.map((project) => (
              <Entry
                key={project.slug}
                heading={project.name}
                sub={`${project.tagline} — ${project.stack.join(", ")}`}
                bullets={resume.bullets[project.slug]}
              />
            ))}
          </Part>

          <Part title="Certifications">
            <ul className="space-y-1 leading-relaxed text-ink/85">
              {certifications.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </Part>

          <Part title="Activities">
            {leadership.map((item) => (
              <Entry
                key={item.org}
                heading={`${item.role} — ${item.org}`}
                bullets={[item.body]}
              />
            ))}
          </Part>

          <Part title="Skills">
            <dl className="space-y-2">
              {stack.map((group) => (
                <div key={group.label} className="sm:flex sm:gap-4">
                  <dt className="font-mono text-xs text-muted sm:w-24 sm:shrink-0 sm:pt-1">
                    {group.label}
                  </dt>
                  <dd className="text-ink/85">{group.items}</dd>
                </div>
              ))}
            </dl>
          </Part>
        </div>
      </dialog>
    </>
  );
}

function Part({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 border-t border-rule pt-5">
      <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
        {title}
      </h3>
      <div className="mt-4 space-y-5">{children}</div>
    </section>
  );
}

function Entry({
  heading,
  sub,
  meta,
  bullets,
}: {
  heading: string;
  sub?: string;
  meta?: string;
  bullets?: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h4 className="font-medium">{heading}</h4>
        {meta && (
          <span className="font-mono text-xs text-muted tabular-nums">
            {meta}
          </span>
        )}
      </div>
      {sub && <p className="mt-1 font-mono text-xs text-muted">{sub}</p>}
      {bullets && (
        <ul className="mt-2 space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 leading-relaxed text-ink/85">
              <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-rule" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
