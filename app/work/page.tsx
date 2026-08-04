import Link from "next/link"
import type { Metadata } from "next"
import {
  credentials,
  experience,
  projects,
  selected,
  site,
  type Entry,
} from "@/lib/content"

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description: "Systems, subsystems, and side projects, with what each solved.",
}

function Card({ entry }: { entry: Entry }) {
  return (
    <article className="card">
      <h3>
        {entry.href ? (
          <a href={entry.href} target="_blank" rel="noopener noreferrer">
            {entry.name}
          </a>
        ) : (
          entry.name
        )}
      </h3>
      <p className="role">{entry.role}</p>
      <p className="meta">{entry.meta}</p>
      <p className="body">{entry.body}</p>
      <ul className="tags">
        {entry.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="cards">
        {entries.map((entry) => (
          <Card key={entry.name} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export default function Work() {
  return (
    <div className="page work">
      <main className="rise">
        <Link href="/" className="back">
          ← Back to home
        </Link>

        <h1>Work</h1>
        <p className="lede">
          A record of what I&apos;ve built and what each thing was actually
          solving.
        </p>

        <Section title="Experience" entries={experience} />
        <Section title="Selected work at Profound" entries={selected} />
        <Section title="Projects" entries={projects} />

        <section className="section">
          <h2>Education &amp; credentials</h2>
          <ul className="list">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="foot">
        <span className="status">
          <span className="dot" aria-hidden />
          {site.status}
        </span>
        <span className="meta">
          <span>{site.place}</span>
          <span>{site.updated}</span>
        </span>
      </footer>
    </div>
  )
}
