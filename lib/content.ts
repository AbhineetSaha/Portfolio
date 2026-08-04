/**
 * All site content lives here so copy can be edited in one place.
 * Figures are the measured ones from the ProfoundCMS contribution analysis —
 * keep them as stated, and keep "co-led" where it says co-led.
 */

export const profile = {
  name: "Abhineet Saha",
  role: "Software Engineer",
  location: "Cooper Square Technologies (Profound)",
  intro:
    "I build content infrastructure — the systems that let non-engineers change what a website says without breaking how it works.",
  bio: [
    "For the past six months I've worked on ProfoundCMS, a multi-tenant headless CMS, alongside five other engineers. My contribution there has a theme: I'm usually the person making sure the thing we shipped is actually correct. I wrote more of the test suite than anyone else on the team, traced our worst production latency back to a database function that was scanning every tenant's data, and found two SSRF vulnerabilities in code paths nobody was looking at.",
    "The work I'm proudest of started as a bug report: renaming a page's URL silently broke every piece of content bound to it. I designed and built the engine that fixed it — a resolver that scores how confident it is about each reconnection, quietly handles the obvious cases, and asks a human about the rest. The interesting part wasn't the matching algorithm. It was deciding where automation should stop.",
  ],
}

export const links = {
  email: "abhineetsaha.work@gmail.com",
  github: "https://github.com/AbhineetSaha",
  linkedin: "https://linkedin.com/in/abhineetsaha",
}

export const experience = {
  company: "Cooper Square Technologies (Profound)",
  title: "Software Engineer",
  period: "Jan 2026 — Present",
  summary:
    "Full-stack engineer on ProfoundCMS, a multi-tenant headless CMS built by six engineers. I own the route binding migration engine, the media library rebuild, and the Pages administration surface, and I led the database performance and security-hardening work.",
}

export const stats = [
  { value: "177", label: "pull requests merged" },
  { value: "144", label: "pull requests reviewed" },
  { value: "34%", label: "of the test suite authored" },
  { value: "3rd", label: "largest contributor of six" },
]

export type Work = {
  title: string
  meta: string
  body: string
  stack: string[]
}

export const work: Work[] = [
  {
    title: "Route Binding Migration Engine",
    meta: "Designed and built end-to-end · 1,451 lines, 99.7% sole-authored",
    body: "Renaming a route path orphaned every document binding attached to it, turning live pages into silent 404s. I built a constraint resolver that indexes candidate documents across primary and alias fields, scores each reconnection from 0–100, auto-resolves above the threshold, and escalates everything below it to a human review dialog. Shipped as a zero-downtime expand-phase database migration ahead of the consuming code, with roughly 1,300 lines of tests.",
    stack: ["TypeScript", "PostgreSQL / PL-pgSQL", "tRPC", "Zod", "Vitest"],
  },
  {
    title: "Database Performance & Multi-Tenant Correctness",
    meta: "Lead engineer for the performance workstream",
    body: "Sentry showed three route procedures at p99 latencies of 1.8s, 5.3s and 6.5s. I traced route.create to N correlated subqueries and rewrote them as a single set operation, found the route-matching function regex-scanning every tenant's routes — a latency bug and an isolation bug at once — and added the composite indexes that fixed checkPath with no application change. Separately authored the 560-line migration that introduced website-scoped RPC access control.",
    stack: ["PostgreSQL", "Supabase", "Sentry", "tRPC"],
  },
  {
    title: "Test Engineering Programme",
    meta: "Owner of the testing workstream · largest test author on the team",
    body: "A six-engineer team shipping ~95 commits a month had thin regression safety. Over five weeks and ~35 pull requests I built harnesses for the Supabase data layer, tRPC infrastructure and WASM boundaries, covered auth, API routes, server actions and the renderer core, and wrote the coverage tooling the team now uses. The highest-value tests were the failure paths nobody else was exercising.",
    stack: ["Vitest", "TypeScript", "React Testing Library"],
  },
  {
    title: "Security Hardening",
    meta: "Four remediations across a multi-tenant product",
    body: "Closed two server-side request forgery vectors by validating identifiers and encoding user-controlled URL segments in outbound API calls, shut an XSS vector by allow-listing postMessage origins and centralising markdown sanitisation across the CMS↔renderer trust boundary, and patched CVE-2026-23864 via a framework upgrade.",
    stack: ["Next.js", "TypeScript", "Content security"],
  },
  {
    title: "Media Library v2",
    meta: "Blue-green rebuild · 1,913 lines, 100% sole-authored",
    body: "Replaced a live media library without a big-bang cutover: a parallel route and component tree migrated incrementally alongside the legacy surface. Asset detail panels, bulk selection, pagination, and rename backed by a per-organisation filename uniqueness guarantee.",
    stack: ["React", "Next.js App Router", "PostgreSQL"],
  },
  {
    title: "Profound University — Sanity → ProfoundCMS",
    meta: "Co-led with one other engineer · ~48% of the integration layer",
    body: "Migrated a production education platform off Sanity and onto Profound's own CMS — the company's first real dogfooding. Wrote the CMS write client for document upserts, converted event pages into CMS-driven dynamic routes, decomposed lesson and knowledge-check pages into composable blocks, and derived application types from generated schemas.",
    stack: ["Next.js", "React", "TypeScript", "Turborepo"],
  },
  {
    title: "create-profound-app",
    meta: "Published npm CLI · authored release 0.1.6",
    body: "The scaffolder could only produce Next.js apps, which quietly contradicted our claim that the renderer was framework-agnostic. I restructured a 112-file template tree into per-framework namespaces and added a three-tier resolution layer — explicit flag, then inference from which of three published binaries invoked the CLI, then an interactive prompt — before adding TanStack Start as the second target. The matching renderer support shipped in the CMS the same day.",
    stack: ["TypeScript", "Bun", "TanStack Start"],
  },
]

export const skills = [
  {
    level: "Strong",
    items: [
      "TypeScript",
      "React",
      "Next.js (App Router, RSC)",
      "PostgreSQL & PL/pgSQL",
      "Vitest",
      "tRPC",
      "Supabase",
      "Test architecture",
      "Query optimisation",
      "Multi-tenant design",
    ],
  },
  {
    level: "Working",
    items: [
      "Zod",
      "TanStack Start",
      "Lexical",
      "Turborepo",
      "Bun",
      "Biome",
      "GitHub Actions",
      "Sentry",
      "CLI / DX tooling",
      "npm release practice",
    ],
  },
  {
    level: "Familiar",
    items: ["Docker", "Terraform (read-level)", "Rust (build tooling only)"],
  },
]

export const philosophy = [
  {
    title: "Automation that can be wrong should be designed to be wrong safely.",
    body: "The migration engine could have auto-resolved everything and been right most of the time. Instead it scores its own confidence and escalates what it isn't sure about. Being right most of the time isn't good enough when the failure mode is silently broken content.",
  },
  {
    title: "Tests are a design tool, not a chore.",
    body: "I ship tests with features because writing the test is usually where I find the edge case — aliases duplicated across four arrays, WASM initialisation failing, upstream proxies returning garbage.",
  },
  {
    title: "Measure before you optimise — and after.",
    body: "I traced our worst latency to production data rather than intuition, and the data was surprising: the bottleneck was a cross-tenant scan, not the query I expected. The lesson I took forward is that I should have measured afterwards too.",
  },
]
