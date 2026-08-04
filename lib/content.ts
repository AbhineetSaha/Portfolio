/**
 * Every word on the site lives here. Edit copy without touching layout.
 *
 * Figures come from the ProfoundCMS contribution analysis and are stated as
 * measured: no improvement percentages are claimed where none were recorded,
 * and shared work stays framed as shared.
 */

export const site = {
  name: "Abhineet Saha",
  title: "Abhineet Saha",
  description:
    "Software engineer. I work on multi-tenant content infrastructure — tests, migrations, and the queries underneath.",
  status: "Open to opportunities",
  place: "Vellore, IN",
  updated: "Updated August 2026",
}

export const links = {
  email: "abhineetsaha.work@gmail.com",
  github: "https://github.com/AbhineetSaha",
  linkedin: "https://linkedin.com/in/abhineetsaha",
}

/**
 * The landing paragraph. `bright` segments render at full contrast, plain text
 * one step down — the sentence carries its own emphasis that way.
 */
export type Fragment =
  | string
  | { bright: string }
  | { text: string; href: string }

export const intro: Fragment[] = [
  { bright: "I'm drawn to the unglamorous half of software." },
  " The tests nobody volunteers for, the migration that has to run before the feature can, the query quietly scanning every tenant's rows at 3am. I work on ",
  { bright: "ProfoundCMS" },
  ", a multi-tenant headless CMS built by six engineers, where I've written more of the test suite than anyone else and traced our worst production latency to a database function reading rows it had no business touching. The thing I'm proudest of started as a bug report: renaming a page's URL silently broke every piece of content bound to it. I built the engine that reconnects them, and that asks a human whenever it isn't sure. Before that, ",
  { text: "PyxTrace", href: "https://pypi.org/project/pyxtrace/" },
  " on PyPI and ",
  { text: "DocDrift", href: "https://github.com/AbhineetSaha/DocDrift" },
  ", which makes a pile of PDFs answer questions. ",
  { bright: "I care most about the failure modes nobody is watching." },
]

export type Entry = {
  name: string
  role: string
  meta: string
  body: string
  tags: string[]
  href?: string
}

export const experience: Entry[] = [
  {
    name: "Profound",
    role: "Software Engineer",
    meta: "Cooper Square Technologies · Jan 2026 — Present",
    body: "Full-stack engineer on ProfoundCMS, a multi-tenant headless CMS. Third-largest contributor of six by surviving code, second by merged pull requests, and the largest author of the test suite. I own the route binding migration engine, the media library rebuild, and the Pages administration surface, and I led the database performance and security-hardening work.",
    tags: ["TypeScript", "React", "Next.js", "PostgreSQL", "tRPC", "Supabase"],
  },
  {
    name: "Mozilla Open Source Community",
    role: "Technical Lead",
    meta: "Student chapter · VIT",
    body: "Led a cross-functional team of twelve-plus developers, mentoring on GitHub workflows, review practice, and project architecture.",
    tags: ["Open source", "Mentoring", "Git"],
  },
]

export const selected: Entry[] = [
  {
    name: "Route Binding Migration Engine",
    role: "Designed and built end-to-end",
    meta: "1,451 lines · 99.7% sole-authored",
    body: "Renaming a route path orphaned every document binding attached to it, turning live pages into silent 404s. I built a resolver that indexes candidate documents across primary and alias fields, scores each reconnection from 0 to 100, auto-resolves above the threshold, and escalates the rest to a human review dialog. Shipped as a zero-downtime expand-phase migration ahead of the code that consumed it, with roughly 1,300 lines of tests.",
    tags: ["TypeScript", "PL/pgSQL", "tRPC", "Vitest"],
  },
  {
    name: "Database Performance",
    role: "Lead engineer, performance workstream",
    meta: "Three worst p99 offenders",
    body: "Sentry showed three route procedures sitting at p99 latencies of 1.8s, 5.3s and 6.5s. I traced one to N correlated subqueries and rewrote them as a single set operation, found the route matcher regex-scanning every tenant's routes — a latency bug and an isolation bug at once — and added the composite indexes that fixed the third with no application change.",
    tags: ["PostgreSQL", "Supabase", "Sentry"],
  },
  {
    name: "Test Engineering",
    role: "Owner of the testing workstream",
    meta: "34% of all test code · 83 files",
    body: "A team shipping ~95 commits a month had thin regression safety. Over five weeks and about 35 pull requests I built harnesses for the Supabase data layer, tRPC infrastructure and WASM boundaries, then wrote the coverage tooling the team still uses. The tests worth having were the failure paths nobody else exercised.",
    tags: ["Vitest", "TypeScript", "React Testing Library"],
  },
  {
    name: "Security Hardening",
    role: "Four remediations",
    meta: "2 SSRF · 1 XSS · 1 CVE",
    body: "Closed two server-side request forgery vectors by validating identifiers and encoding user-controlled URL segments, shut an XSS vector by allow-listing postMessage origins and centralising markdown sanitisation across the trust boundary between the CMS and its renderer, and patched CVE-2026-23864.",
    tags: ["Next.js", "TypeScript", "AppSec"],
  },
  {
    name: "Media Library v2",
    role: "Blue-green rebuild",
    meta: "1,913 lines · 100% sole-authored",
    body: "Replaced a live media library without a big-bang cutover — a parallel route and component tree migrated incrementally alongside the legacy surface. Asset detail panels, bulk selection, pagination, and rename backed by a per-organisation filename uniqueness guarantee.",
    tags: ["React", "App Router", "PostgreSQL"],
  },
  {
    name: "create-profound-app",
    role: "Feature contributor · authored v0.1.6",
    meta: "Published npm CLI",
    body: "The scaffolder could only produce Next.js apps, which quietly contradicted our claim that the renderer was framework-agnostic. I restructured a 112-file template tree into per-framework namespaces and added a three-tier resolution layer — flag, then which of three published binaries invoked the CLI, then a prompt — before adding TanStack Start as the second target. The matching renderer support shipped the same day.",
    tags: ["TypeScript", "Bun", "TanStack Start"],
  },
]

export const projects: Entry[] = [
  {
    name: "PyxTrace",
    role: "Tracing and visualisation for Python",
    meta: "1,800+ downloads on PyPI",
    body: "A real-time performance monitoring and visualisation tool that makes a running program's behaviour legible instead of inferred. Built for clarity first.",
    tags: ["Python", "Flask", "Plotly"],
    href: "https://pypi.org/project/pyxtrace/",
  },
  {
    name: "DocDrift",
    role: "Document-grounded AI workspace",
    meta: "1,200+ PDFs indexed",
    body: "Upload PDFs, curate what the model is allowed to see, and chat with an assistant that cites the snippets it actually used rather than paraphrasing the whole corpus.",
    tags: ["Next.js", "FastAPI", "Supabase", "Gemini"],
    href: "https://github.com/AbhineetSaha/DocDrift",
  },
]

export const credentials = [
  "B.Tech Computer Science — Vellore Institute of Technology · 9.15 CGPA",
  "Microsoft Certified: Azure AI Engineer Associate",
  "GitHub Foundations",
  "Google Dev Sprint '25 — Finalist",
]
