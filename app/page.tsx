import {
  about,
  elsewhere,
  links,
  projects,
  record,
  site,
  work,
  type Entry,
} from "@/lib/content"

/** Two-digit index numbers, so the rails line up as a column. */
const pad = (n: number) => String(n).padStart(2, "0")

function Section({
  num,
  title,
  children,
}: {
  num: number
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="section" id={title.toLowerCase()}>
      <header>
        <span className="num">{pad(num)}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  )
}

function Row({
  index,
  entry,
  compact,
}: {
  index: number
  entry: Entry
  compact?: boolean
}) {
  return (
    <article className={compact ? "row compact" : "row"}>
      <span className="index">{pad(index)}</span>
      <div>
        <h3>
          {entry.href ? (
            <a href={entry.href} target="_blank" rel="noopener noreferrer">
              {entry.title}
            </a>
          ) : (
            entry.title
          )}
        </h3>
        {entry.blurb ? <p>{entry.blurb}</p> : null}
        {entry.tags ? <p className="tags">{entry.tags}</p> : null}
      </div>
      <span className="fig">{entry.figure}</span>
    </article>
  )
}

export default function Home() {
  return (
    <div className="page settle">
      <header className="masthead">
        <span className="wordmark">{site.name}</span>
        <nav>
          <a href="#record">Record</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="opening">
        <h1>{site.statement}</h1>
        <div className="sub">
          <span className="mono">{site.role}</span>
          <span className="mono">{site.place}</span>
        </div>
      </div>

      <Section num={1} title="About">
        <div className="body-col prose">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section num={2} title="Record">
        <div className="body-col">
          <div className="ledger">
            {record.map((item) => (
              <div className="line" key={item.figure}>
                <span className="figure">{item.figure}</span>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section num={3} title="Work">
        <div className="rows">
          {work.map((entry, i) => (
            <Row key={entry.title} index={i + 1} entry={entry} />
          ))}
        </div>
      </Section>

      <Section num={4} title="Projects">
        <div className="rows">
          {projects.map((entry, i) => (
            <Row key={entry.title} index={i + 1} entry={entry} />
          ))}
        </div>
      </Section>

      <Section num={5} title="Elsewhere">
        <div className="rows">
          {elsewhere.map((entry, i) => (
            <Row
              key={entry.title}
              index={i + 1}
              entry={{ ...entry, tags: "" }}
              compact={!entry.blurb}
            />
          ))}
        </div>
      </Section>

      <Section num={6} title="Contact">
        <div className="body-col contact">
          <a href={`mailto:${links.email}`}>{links.email}</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            github.com/AbhineetSaha
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/abhineetsaha
          </a>
        </div>
      </Section>

      <footer className="colophon">
        <span className="mono">
          {site.name} — {site.place}
        </span>
        <span className="mono">Updated {site.updated}</span>
      </footer>
    </div>
  )
}
