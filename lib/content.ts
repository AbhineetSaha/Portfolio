/**
 * Every word on the site lives here. Edit copy without touching layout.
 *
 * Figures come from the ProfoundCMS contribution analysis and are stated as
 * measured: no improvement percentages are claimed where none were recorded,
 * and shared work stays framed as shared.
 */

export const site = {
  name: "Abhineet Saha",
  statement:
    "I work on the unglamorous half of software — the tests, the migrations, and the queries underneath.",
  role: "Software Engineer at Profound",
  place: "Vellore, IN",
  updated: "August 2026",
  description:
    "Software engineer working on multi-tenant content infrastructure — test architecture, database performance, and safe migrations.",
}

export const links = {
  email: "abhineetsaha.work@gmail.com",
  github: "https://github.com/AbhineetSaha",
  linkedin: "https://linkedin.com/in/abhineetsaha",
}

export const about = [
  "I'm six months into ProfoundCMS, a multi-tenant headless CMS built by six engineers, and my contribution there has a theme: I'm usually the one making sure the thing we shipped is actually correct. I've written more of the test suite than anyone else on the team, traced our worst production latency to a database function reading rows it had no business touching, and found two SSRF holes in code paths nobody was looking at.",
  "The work I'm proudest of started as a bug report. Renaming a page's URL silently broke every piece of content bound to it, so I designed the engine that reconnects them — one that scores how confident it is about each reconnection, handles the obvious cases quietly, and asks a human about the rest. The interesting part was never the matching algorithm. It was deciding where automation should stop.",
]

/** The numbers, stated plainly. Left column reads as a ledger. */
export const record = [
  { figure: "177", label: "pull requests merged, 28% of the repository's total" },
  { figure: "144", label: "pull requests reviewed for teammates, second on the team" },
  { figure: "34%", label: "of all test code in the codebase, the largest share" },
  { figure: "3rd", label: "largest contributor of six, by code still in production" },
]

export type Entry = {
  title: string
  blurb: string
  figure: string
  tags: string
  href?: string
}

export const work: Entry[] = [
  {
    title: "Route Binding Migration Engine",
    blurb:
      "Renaming a route path orphaned every document binding attached to it, turning live pages into silent 404s. I designed and built the resolver that indexes candidate documents across primary and alias fields, scores each reconnection from 0 to 100, auto-resolves above the threshold, and escalates the rest to human review. Shipped as a zero-downtime expand-phase migration ahead of the code that consumed it, with roughly 1,300 lines of tests.",
    figure: "1,451 lines · 99.7% mine",
    tags: "TypeScript · PL/pgSQL · tRPC · Vitest",
  },
  {
    title: "Database Performance",
    blurb:
      "Sentry put three route procedures at p99 latencies of 1.8s, 5.3s and 6.5s. I traced one to N correlated subqueries and rewrote them as a single set operation, caught the route matcher regex-scanning every tenant's routes — a latency bug and an isolation bug at once — and added the composite indexes that fixed the third with no application change.",
    figure: "3 worst p99 offenders",
    tags: "PostgreSQL · Supabase · Sentry",
  },
  {
    title: "Test Engineering",
    blurb:
      "A team shipping around 95 commits a month had thin regression safety. Over five weeks and about 35 pull requests I built harnesses for the Supabase data layer, tRPC infrastructure and WASM boundaries, then wrote the coverage tooling the team still runs. The tests worth having were the failure paths nobody else exercised.",
    figure: "83 test files",
    tags: "Vitest · TypeScript · React Testing Library",
  },
  {
    title: "Security Hardening",
    blurb:
      "Closed two server-side request forgery vectors by validating identifiers and encoding user-controlled URL segments in outbound calls, shut an XSS vector by allow-listing postMessage origins and centralising markdown sanitisation across the trust boundary between the CMS and its renderer, and patched CVE-2026-23864.",
    figure: "2 SSRF · 1 XSS · 1 CVE",
    tags: "Next.js · TypeScript · AppSec",
  },
  {
    title: "Media Library v2",
    blurb:
      "Replaced a live media library without a big-bang cutover — a parallel route and component tree migrated incrementally alongside the legacy surface. Asset detail panels, bulk selection, pagination, and rename backed by a per-organisation filename uniqueness guarantee.",
    figure: "1,913 lines · 100% mine",
    tags: "React · App Router · PostgreSQL",
  },
  {
    title: "create-profound-app",
    blurb:
      "Our scaffolding CLI could only produce Next.js apps, which quietly contradicted the claim that the renderer was framework-agnostic. I restructured a 112-file template tree into per-framework namespaces and added a three-tier resolution layer — flag, then which of three published binaries invoked the CLI, then a prompt — before adding TanStack Start as a second target. The matching renderer support shipped the same day.",
    figure: "npm · authored v0.1.6",
    tags: "TypeScript · Bun · TanStack Start",
  },
]

export const projects: Entry[] = [
  {
    title: "PyxTrace",
    blurb:
      "A real-time performance monitoring and visualisation tool for Python that makes a running program's behaviour legible instead of inferred. Built for clarity first.",
    figure: "1,800+ downloads",
    tags: "Python · Flask · Plotly",
    href: "https://pypi.org/project/pyxtrace/",
  },
  {
    title: "DocDrift",
    blurb:
      "Upload PDFs, curate what the model is allowed to see, and chat with an assistant that cites the snippets it actually used rather than paraphrasing the whole corpus.",
    figure: "1,200+ PDFs indexed",
    tags: "Next.js · FastAPI · Supabase · Gemini",
    href: "https://github.com/AbhineetSaha/DocDrift",
  },
]

export const elsewhere = [
  {
    title: "Technical Lead, Mozilla Open Source Community",
    blurb:
      "Led a cross-functional team of twelve-plus developers, mentoring on Git workflows, review practice, and project architecture.",
    figure: "12+ developers",
  },
  {
    title: "B.Tech Computer Science, Vellore Institute of Technology",
    blurb: "",
    figure: "9.15 CGPA",
  },
  {
    title: "Microsoft Certified: Azure AI Engineer Associate",
    blurb: "",
    figure: "Certification",
  },
  {
    title: "GitHub Foundations",
    blurb: "",
    figure: "Certification",
  },
  {
    title: "Google Dev Sprint '25",
    blurb: "",
    figure: "Finalist",
  },
]
