import Link from "next/link"
import { Fragment, intro, links, site } from "@/lib/content"

function Intro({ fragments }: { fragments: Fragment[] }) {
  return (
    <p className="intro">
      {fragments.map((fragment, i) => {
        if (typeof fragment === "string") return fragment
        if ("bright" in fragment)
          return (
            <span className="bright" key={i}>
              {fragment.bright}
            </span>
          )
        return (
          <a
            key={i}
            href={fragment.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fragment.text}
          </a>
        )
      })}
    </p>
  )
}

export default function Home() {
  const [first, ...rest] = site.name.split(" ")

  return (
    <div className="page home">
      <main className="inner rise">
        <h1 className="name">
          {first} <span className="last">{rest.join(" ")}.</span>
        </h1>

        <hr className="rule" />

        <Intro fragments={intro} />

        <nav className="row">
          <Link href="/work">Work</Link>
          <a href={`mailto:${links.email}`}>Email</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
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
