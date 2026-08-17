import Link from "next/link";
import { ResumeButton } from "./resume";
import { Section } from "./section";
import {
  certifications,
  education,
  intro,
  leadership,
  links,
  now,
  projects,
  site,
  stack,
  work,
} from "./content";

export default function Home() {
  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-6">
      {/* Identity — everything that matters is above the fold. */}
      <section className="pt-20 sm:pt-28">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-accent">{site.role}</p>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-ink/90 sm:text-lg sm:leading-relaxed">
          {intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
          {[
            { label: "GitHub", href: links.github },
            { label: "LinkedIn", href: links.linkedin },
            { label: "LeetCode", href: links.leetcode },
            { label: "Email", href: `mailto:${links.email}` },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="border-b border-rule pb-0.5 text-muted transition-colors hover:border-accent hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ResumeButton />
          </li>
        </ul>
      </section>

      {/* Work and Projects are deliberately separate: one is a job, the other
          is what I build on my own. Conflating them overstates both. */}
      <Section title="Work">
        <ol className="-mt-2 space-y-6">
          {work.map((role) => (
            <li key={role.slug} className="group">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-medium tracking-tight">
                  <Link
                    href={`/work/${role.slug}`}
                    className="transition-colors group-hover:text-accent"
                  >
                    {role.org}
                    <span
                      aria-hidden
                      className="ml-1.5 inline-block text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </Link>
                </h3>
                <span className="font-mono text-xs text-muted tabular-nums">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{role.role}</p>
              <p className="mt-3 leading-relaxed text-ink/85">{role.summary}</p>
              <p className="mt-3 font-mono text-xs text-muted">
                {role.stack.join(" · ")}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Projects">
        <ol className="-mt-2">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              className="group border-t border-rule py-6 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden
                  className="font-mono text-xs text-muted tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium tracking-tight">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors group-hover:text-accent"
                  >
                    {project.name}
                    <span
                      aria-hidden
                      className="ml-1.5 inline-block text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </Link>
                </h3>
              </div>

              <p className="mt-1 pl-8 font-mono text-xs text-muted">
                {project.tagline}
              </p>
              <p className="mt-3 pl-8 leading-relaxed text-ink/85">
                {project.summary}
              </p>
              <p className="mt-3 pl-8 font-mono text-xs text-muted">
                {project.stack.join(" · ")}
              </p>

              {(project.source || project.external) && (
                <p className="mt-3 flex gap-4 pl-8 font-mono text-xs">
                  {project.source && (
                    <a
                      href={project.source}
                      className="border-b border-rule pb-0.5 text-muted transition-colors hover:border-accent hover:text-ink"
                    >
                      Source ↗
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external.href}
                      className="border-b border-rule pb-0.5 text-muted transition-colors hover:border-accent hover:text-ink"
                    >
                      {project.external.label} ↗
                    </a>
                  )}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Currently">
        <dl className="space-y-5">
          {now.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs text-accent">{item.label}</dt>
              <dd className="mt-1 leading-relaxed text-ink/85">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <ul>
          {education.map((item) => (
            <li key={item.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium">{item.role}</h3>
                <span className="font-mono text-xs text-muted tabular-nums">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">
                {item.org} · {item.note}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Elsewhere">
        <dl className="space-y-5">
          <div>
            <dt className="font-mono text-xs text-accent">Certifications</dt>
            <dd className="mt-1">
              <ul className="space-y-1 leading-relaxed text-ink/85">
                {certifications.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </dd>
          </div>
          {leadership.map((item) => (
            <div key={item.org}>
              <dt className="font-mono text-xs text-accent">
                {item.role} · {item.org}
              </dt>
              <dd className="mt-1 leading-relaxed text-ink/85">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Stack">
        <dl className="space-y-3">
          {stack.map((group) => (
            <div
              key={group.label}
              className="sm:flex sm:items-baseline sm:gap-4"
            >
              <dt className="font-mono text-xs text-muted sm:w-24 sm:shrink-0">
                {group.label}
              </dt>
              <dd className="text-ink/85">{group.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Contact">
        <p className="leading-relaxed text-ink/85">
          Best reached by email. I read everything, and I reply to anything that
          isn&rsquo;t a template.
        </p>
        <ul className="mt-4 space-y-2 font-mono text-sm">
          <li>
            <a
              href={`mailto:${links.email}`}
              className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              {links.email}
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
