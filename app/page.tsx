import { ThemeToggle } from "@/components/theme-toggle"
import {
  experience,
  links,
  philosophy,
  profile,
  skills,
  stats,
  work,
} from "@/lib/content"

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border pt-10 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-10">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:mb-0">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-20 flex items-baseline justify-between font-mono text-sm">
        <span className="text-foreground">{profile.name}</span>
        <nav className="flex gap-5">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="rise space-y-20">
        <section>
          <h1 className="max-w-2xl text-2xl leading-snug tracking-tight sm:text-3xl">
            {profile.intro}
          </h1>
          <p className="mt-6 font-mono text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </section>

        <Section label="About">
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section label="Now">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-medium">{experience.title}</h3>
            <span className="font-mono text-xs text-muted-foreground">
              {experience.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {experience.company}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {experience.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl tracking-tight">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label="Selected work">
          <ol className="space-y-12">
            {work.map((item) => (
              <li key={item.title}>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {item.meta}
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {item.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section label="Skills">
          <dl className="space-y-6">
            {skills.map((group) => (
              <div key={group.level}>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.level}
                </dt>
                <dd className="mt-2 leading-relaxed">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label="Approach">
          <ul className="space-y-8">
            {philosophy.map((entry) => (
              <li key={entry.title}>
                <h3 className="font-medium leading-snug">{entry.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {entry.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Contact">
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${links.email}`}
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {links.email}
              </a>
            </li>
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                github.com/AbhineetSaha
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                linkedin.com/in/abhineetsaha
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="mt-20 border-t border-border pt-8 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
