/**
 * Single source of truth for every word on this site.
 * Everything here is either verifiable from a public repo / package registry
 * or was stated directly by Abhineet. Nothing is inferred or embellished.
 */

export const site = {
  url: "https://abhineetsaha.vercel.app",
  name: "Abhineet Saha",
  role: "Software Engineer",
  description:
    "Software engineer working on CMS infrastructure, backend systems and developer tooling. Builds with TypeScript, Python and PostgreSQL.",
  location: "India",
};

export const links = {
  github: "https://github.com/AbhineetSaha",
  linkedin: "https://www.linkedin.com/in/abhineetsaha/",
  leetcode: "https://leetcode.com/u/AbhineetSaha/",
  email: "abhineetsaha.work@gmail.com",
};

/** Two sentences, max. This is the part people actually read. */
export const intro = [
  "I build backend systems, developer tools, and the infrastructure that sits underneath web applications.",
  "Most recently that meant CMS infrastructure — rendering, content modelling, and the tooling around them. Before that, mostly things I wanted to exist: a Python tracer, a routing engine scored on real accident data.",
];

export const now = [
  {
    label: "Recently",
    body: "Eight months on a multi-tenant CMS — routing, the database layer, the test suite and the editor-facing surfaces. Wrapped in August 2026.",
  },
  {
    label: "Exploring",
    body: "Systems design, database internals and query performance.",
  },
  {
    label: "Open source",
    body: "PyxTrace, plus assorted things that started as a problem I had.",
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Homepage blurb. Two or three lines, no marketing. */
  summary: string;
  stack: string[];
  source?: string;
  external?: { label: string; href: string };
  /** Case-study sections. Omitted sections simply don’t render. */
  detail?: {
    overview: string;
    problem?: string;
    contribution?: string[];
    approach?: string[];
    challenges?: string[];
    outcome?: string;
  };
};

/** Things I built because I wanted them to exist. Paid work lives in `work`. */
export const projects: Project[] = [
  {
    slug: "pyxtrace",
    name: "PyxTrace",
    tagline: "Python runtime tracer · on PyPI",
    summary:
      "Traces a Python program’s bytecode, heap and syscalls on one timeline, then renders it live. Published to PyPI as pyxtrace, MIT licensed.",
    stack: [
      "Python",
      "sys.settrace",
      "tracemalloc",
      "strace",
      "Typer",
      "Streamlit",
      "GitHub Actions",
    ],
    source: "https://github.com/AbhineetSaha/pyxTrace",
    external: { label: "PyPI", href: "https://pypi.org/project/pyxtrace/" },
    detail: {
      overview:
        "A tracing tool that puts a Python program under the microscope while it runs — bytecode execution, heap usage and (on Linux and macOS) system calls, correlated on a single timeline and streamed to a live dashboard.",
      problem:
        "Python’s profiling tools each answer one question in isolation. cProfile tells you where time went. tracemalloc tells you where memory went. strace tells you what the process asked the kernel for. None of them tell you that the allocation spike and the syscall storm happened in the same twelve milliseconds — and that correlation is usually the whole answer.",
      contribution: [
        "Designed and wrote the tool: tracer core, event model, CLI and dashboard.",
        "Packaged and published it to PyPI, currently at 1.2.0, supporting Python 3.8 and up.",
      ],
      approach: [
        "Three independent collectors — a sys.settrace hook for bytecode, periodic tracemalloc snapshots for the heap, and strace for syscalls — emit into one ordered event stream.",
        "Output is either a Rich summary in the terminal or an optional Streamlit dashboard, so the common case needs no browser.",
        "Presets (demo, perf, full) pick a tracing depth, because full bytecode tracing is far too heavy to be the default.",
        "Sessions record to JSONL and replay offline, so a trace can be analysed after the fact rather than only while it runs.",
        "Releases publish to PyPI from GitHub Actions, because a manual publish step is a release that eventually doesn’t happen.",
      ],
      challenges: [
        "Tracing every bytecode instruction is expensive enough to distort the program being measured. The presets and an event-rate throttle (10–500 events/sec) exist to keep the observer from becoming the bottleneck.",
        "Syscall tracing is platform-bound: it needs strace and elevated privileges on Linux, and doesn’t exist on Windows. The tracer degrades to bytecode and memory rather than refusing to run.",
      ],
    },
  },
  {
    slug: "saferoute-india",
    name: "SafeRoute India",
    tagline: "Routing scored on real accident data",
    summary:
      "Scores alternative driving routes against government road-accident records (MoRTH, NCRB, iRAD) and recommends the safest one, not just the fastest.",
    stack: [
      "FastAPI",
      "PostGIS",
      "LightGBM",
      "Redis",
      "React",
      "Docker",
    ],
    source: "https://github.com/AbhineetSaha/SafeRoute-India",
    detail: {
      overview:
        "A routing service that treats safety as a first-class routing metric. Given two points, it pulls candidate routes, scores each against historical accident data, and returns them ranked from 0–100 with a risk band.",
      problem:
        "Every consumer maps app optimises for time. On Indian roads that regularly means routing a driver through corridors with a documented accident history, because those corridors are fast. The accident data is public. Nothing was using it at routing time.",
      contribution: [
        "Built the service end to end: spatial data model, scoring algorithm, API and the map frontend.",
        "Ingested and normalised government accident datasets into a queryable spatial schema.",
      ],
      approach: [
        "PostGIS finds every recorded accident within 100 metres of a candidate route geometry.",
        "Those incidents are weighted by severity (fatal, grievous, minor), recency, and time-of-day pattern — a late-night blackspot should not penalise a 9am commute equally.",
        "Scored routes are cached in Redis, since the same corridors get requested constantly and the spatial query is the expensive part.",
        "Hotspot clustering surfaces dangerous stretches directly on the map instead of hiding them inside a score.",
        "A LightGBM model over 24 engineered features — severity, causal factors, temporal pattern, weather, distance to emergency infrastructure — handles risk prediction where the historical counts are too sparse to score directly.",
        "Thirteen REST endpoints cover route scoring, hotspot analysis, departure-time optimisation, risk forecasting, SOS context and community incident reporting.",
      ],
      challenges: [
        "Government accident data arrives in inconsistent shapes across sources and needs normalising before any of it is spatially queryable.",
        "A 100-metre radius search across a full route geometry is not cheap; the spatial indexes and the cache layer are what make it interactive rather than batch.",
      ],
    },
  },
  // Veda goes here — same shape as the entries above. Only `detail` is optional.
];

/**
 * The Profound work log. Profound is a job, not a personal project — these are
 * write-ups of individual pieces of work inside a product six engineers built,
 * so the framing stays honest about what was mine and what was the team's.
 */
export type WorkPost = {
  slug: string;
  title: string;
  /** One line under the title. Says what the work was, not why it mattered. */
  dek: string;
  period: string;
  tags: string[];
  /** Prose blocks. `h` starts a new section; `p` and `ul` render in order. */
  body: { h?: string; p?: string[]; ul?: string[] }[];
};

export const profound = {
  slug: "profound",
  org: "Profound",
  /** The legal entity, for anyone matching this against a CV. */
  company: "Cooper Square Technologies Inc.",
  role: "Software Engineer · Independent Contractor",
  location: "Remote",
  period: "Jan 2026 — Aug 2026",
  /** Homepage blurb for the Work section. */
  summary:
    "Multi-tenant headless CMS. Six-engineer team. I work on the routing engine, the database layer, the test suite and the editor-facing surfaces.",
  stack: ["TypeScript", "Next.js", "PostgreSQL", "tRPC"],
  intro: [
    "Profound is a multi-tenant headless CMS — schema builder, document and variant management, media library, routing engine, live preview. It is not my project. Six engineers build it, two of them own more of it than I do, and it existed before I arrived.",
    "What follows is a log of the pieces I worked on, oldest first — it reads better as an arc than as a feed. I have tried to be precise about which parts were mine alone, which were shared, and which I only touched. Where I don't have a number to back a claim, I say so instead of rounding it up.",
  ],
};

export const workPosts: WorkPost[] = [
  {
    slug: "multi-tenant-scoping",
    title: "Scoping the database by tenant",
    dek: "A 560-line migration adding website scoping to the RPC layer, in my second month.",
    period: "Feb 2026",
    tags: ["PostgreSQL", "PL/pgSQL", "Multi-tenancy"],
    body: [
      {
        p: [
          "The CMS serves many client websites out of one database. A set of routing RPCs were not scoped by website — they were correct in practice because of how the application called them, which is a different thing from being correct.",
        ],
      },
      {
        h: "The work",
        p: [
          "One migration, 560 lines of SQL, threading website scoping through the routing functions and their callers. It is not clever code. It is the kind of change where the only thing that matters is that you didn't miss one, because a miss in a multi-tenant product is a data leak rather than a bug.",
          "The same theme came back twice more — once in the performance work, where a route matcher was scanning across tenants, and once making proxied admin links resolve to the right organisation. Tenancy isn't a feature you finish.",
        ],
      },
      {
        p: [
          "This landed in my second month, which surprised me at the time. It's also the reason the later performance work read as a tenancy problem to me and not just a slow query.",
        ],
      },
    ],
  },
  {
    slug: "test-suite",
    title: "Becoming the person who writes the tests",
    dek: "Roughly 35 pull requests over five weeks, and the largest share of the test suite.",
    period: "Feb — Mar 2026",
    tags: ["Vitest", "TypeScript", "Testing"],
    body: [
      {
        p: [
          "A six-engineer team was merging around 95 commits a month into a CMS with thin regression coverage. Nobody assigned this to me. It was the most useful thing I could see to do, and doing it turned out to be the best map of the codebase I could have drawn.",
        ],
      },
      {
        h: "What went in",
        ul: [
          "Harnesses for the parts that make testing this codebase annoying: the Supabase data layer, tRPC context, and the WASM boundary.",
          "Coverage by subsystem rather than by file — auth and security, API routes, server actions, block lifecycle and CRUD procedures, the renderer core, script and asset procedures.",
          "Tooling that reports coverage, so the number was visible to everyone instead of being something you ran locally and forgot.",
        ],
      },
      {
        h: "The tests worth having",
        p: [
          "Not the happy paths. The highest-value tests were the ones covering failure: WASM failing to initialise, an upstream proxy returning garbage, the paths nobody exercises until production does it for them.",
          "I also fixed a flaky lazy-load test rather than retrying it. A flaky suite is worse than a small one, because people stop reading the red.",
        ],
      },
      {
        p: [
          "I ended up writing about a third of all test code in the repository, more than anyone else on the team. Six months later it is still the contribution I'd defend hardest, and it's the one that shows up on no dashboard.",
        ],
      },
    ],
  },
  {
    slug: "query-performance",
    title: "Three slow endpoints and a query that scanned every tenant",
    dek: "Sentry said 1.8s, 5.3s and 6.5s at p99. The worst one was also a tenancy bug.",
    period: "Apr 2026",
    tags: ["PostgreSQL", "PL/pgSQL", "Sentry"],
    body: [
      {
        p: [
          "Production Sentry data had three route procedures sitting at p99 latencies of 1,833ms, 5,305ms and 6,546ms. I took the investigation and the fixes.",
        ],
      },
      {
        h: "What each one turned out to be",
        ul: [
          "route.create at 6,546ms — block ID validation was running a correlated subquery per block. Rewritten as a single = ANY() set operation.",
          "route.checkPath at 5,305ms — a missing composite index on (website_id, path). Adding it fixed the endpoint with no application change at all, which is the most satisfying kind of fix and the least interesting to write about.",
          "route.getByPath at 1,833ms — the route pattern matcher was regex-scanning every tenant's routes to find one website's match. Filtering by tenant and marking the function STABLE fixed the latency. It was also, separately, an isolation problem: a function that reads across tenants to answer a single-tenant question is one bug away from returning the wrong one.",
        ],
      },
      {
        h: "The risky part",
        p: [
          "The rewrites dropped the previous function overloads, so every caller in the monorepo had to move in lockstep. That went out as one reviewed PR with the breaking change spelled out in the description, rather than a series of small ones that would each have left the tree half-migrated.",
        ],
      },
      {
        h: "What I got wrong",
        p: [
          "I recorded the baselines carefully and never recorded the after. The fixes are correct and the reasoning is documented, but I cannot tell you what the p99 became, which means I can't honestly claim an improvement figure. Measuring afterwards costs about ten minutes. I do it now.",
        ],
      },
    ],
  },
  {
    slug: "postmessage-and-sanitisation",
    title: "Two SSRF holes, an open postMessage and a CVE",
    dek: "Security work in a multi-tenant product, mostly found by reading code nobody was looking at.",
    period: "Apr — May 2026",
    tags: ["Security", "Next.js", "TypeScript"],
    body: [
      {
        p: [
          "None of these came from a report. They came from working in the surrounding code and noticing something.",
        ],
      },
      {
        h: "The findings",
        ul: [
          "An API key identifier went into an outbound URL without validation — a server-side request forgery vector, since the server would fetch whatever the identifier pointed at.",
          "User-controlled path segments were interpolated into GitHub API calls unencoded. Same class of bug, different door.",
          "The CMS and the previewed site talked over postMessage with no origin allow-list, so any page in that iframe could send messages the CMS trusted. Alongside it, markdown was rendered without sanitisation. Together that is an XSS path across the trust boundary between the CMS and content it does not control.",
          "CVE-2026-23864 in Next.js — an upgrade, plus verifying nothing in our usage broke on the way.",
        ],
      },
      {
        h: "The one that needed design, not a patch",
        p: [
          "The postMessage fix is origin allow-listing, which is small. The markdown fix is a single sanitisation layer that everything renders through, which is not small, because the interesting question is what to allow rather than what to strip. Sanitisers that strip too much break real content and get bypassed by whoever needs the content to work.",
        ],
      },
    ],
  },
  {
    slug: "cross-framework-cli",
    title: "A scaffolding CLI that only scaffolded one framework",
    dek: "Making 'framework-agnostic' true at the point a developer first types a command.",
    period: "May 2026",
    tags: ["TypeScript", "Bun", "TanStack Start", "npm"],
    body: [
      {
        p: [
          "create-profound-app is a published npm CLI that scaffolds an app pre-wired to the CMS. I did not create it and I do not maintain it — a colleague owns roughly three quarters of it. I contributed one feature, and it is the one that made the tool stop contradicting the product.",
        ],
      },
      {
        h: "The contradiction",
        p: [
          "We told people the renderer was framework-agnostic. The CLI produced Next.js apps and nothing else. That is the first thing a developer touches, so whatever it does is what they believe.",
        ],
      },
      {
        h: "What I built",
        ul: [
          "Restructured the template tree into per-framework namespaces, so adding a third framework is additive rather than a rewrite of the CLI.",
          "A three-tier framework resolution layer: an explicit --framework flag, else inference from which of the three published binaries invoked the process, else an interactive prompt.",
          "TanStack Start as the second target, including wiring its splat routing to the CMS's parametric route helper.",
        ],
      },
      {
        h: "The fiddly part",
        p: [
          "Binary-name inference. The package ships three bins, so running create-profound-tanstack has already answered the framework question and prompting again is rude. Working out how you were invoked is annoying because npm and bun expose that differently, so the CLI checks several sources. Flag coverage also has to be complete, or the tool hangs on a prompt in CI.",
        ],
      },
      {
        h: "What I'd do differently",
        p: [
          "I shipped it without tests. The resolution logic branches across flags, binary names and two template registries — precisely the shape unit tests exist for. I hold a much higher bar in product code and I applied a lower one here because it was 'just tooling'. That was not a good reason.",
        ],
      },
    ],
  },
  {
    slug: "pages-surface",
    title: "The Pages surface",
    dek: "The screen editors use to reason about site structure, and what it has to admit it doesn't know.",
    period: "May 2026",
    tags: ["React", "Next.js", "RSC"],
    body: [
      {
        p: [
          "Pages is where an editor sees how the site is put together — what routes exist, what content is bound to them, what will actually resolve. I built and iterated most of this surface; a colleague holds the rest.",
        ],
      },
      {
        h: "The design problem",
        p: [
          "The honest state of a page is more complicated than 'published'. A page can exist, have content, and still not be reachable because its route has no binding. Showing that as a normal page is a lie. Hiding it is worse.",
          "So the surface distinguishes bindings that were set manually from ones resolved automatically, and it renders a distinct preview state for pages that currently cannot route. It is less tidy than a uniform list. It is also the only version that tells the truth.",
        ],
      },
      {
        p: [
          "The route rename flow from the migration engine lands here too — this is where an editor triggers a rename and reviews what the resolver wasn't sure about.",
        ],
      },
    ],
  },
  {
    slug: "live-preview-overlays",
    title: "Editing overlays that don't know what framework they're on",
    dek: "In-context editing inside a cross-origin preview iframe, for any host frontend.",
    period: "May — Jun 2026",
    tags: ["TypeScript", "React", "TanStack Start"],
    body: [
      {
        p: [
          "A headless CMS sells on being framework-agnostic. That claim gets tested by live preview: an editor loads their real site in an iframe, clicks a heading, and edits it in place. The overlay doing that cannot assume React, or Next.js, or anything about how the host page renders.",
        ],
      },
      {
        h: "What the work involved",
        ul: [
          "An overlay script that operates on the DOM directly rather than through any framework's component tree, so the same script works against a Next.js app and a TanStack Start app.",
          "Click interception that distinguishes 'the editor is selecting a block' from 'the editor is using the site', which is subtler than it sounds when the site has its own click handlers.",
          "Cross-origin message passing between the CMS shell and the previewed site, which later became a security problem worth its own write-up.",
        ],
      },
      {
        p: [
          "I wrote a bit over half of the overlay script; the rest is a colleague's. Rendering support for TanStack Start in the CMS renderer was mine, and I shipped scaffolding support for the same framework in our CLI the same day — the two halves of one capability.",
        ],
      },
    ],
  },
  {
    slug: "university-migration",
    title: "Moving a production education platform off Sanity",
    dek: "Dogfooding: migrating Profound University onto Profound's own CMS. Co-led.",
    period: "Jun — Jul 2026",
    tags: ["Next.js", "TypeScript", "Turborepo"],
    body: [
      {
        p: [
          "Profound University is a real platform with real users, running on Sanity. Moving it onto our own CMS was the first serious test of whether the product worked for someone who wasn't us. I co-led this with one other engineer — we wrote roughly half the integration layer each.",
        ],
      },
      {
        h: "What I worked on",
        ul: [
          "The CMS write client for document upserts, and migrating the data layer and diploma issuance across.",
          "Turning /events/{event} into a CMS-driven dynamic route, plus catch-all CMS routing for the rest.",
          "Splitting lesson detail and knowledge-check pages into composable CMS blocks instead of hardcoded templates.",
          "Deriving application types from the generated CMS schemas, so the app breaks at compile time when the model changes rather than at runtime.",
          "Removing the Sanity code once nothing depended on it.",
        ],
      },
      {
        h: "Why it was worth doing",
        p: [
          "Consuming your own CMS finds things no internal test suite does — reference hydration for author avatars, image reference resolution, locale routing surviving the move to a shared proxy. Several CMS improvements came directly out of being annoyed by our own product for a few weeks.",
        ],
      },
    ],
  },
  {
    slug: "media-library-rebuild",
    title: "Rebuilding a live media library without taking it down",
    dek: "A blue-green rewrite: new route, parallel component tree, incremental cutover.",
    period: "Jun — Aug 2026",
    tags: ["React", "Next.js", "PostgreSQL"],
    body: [
      {
        p: [
          "The old media library worked, in the sense that it did not crash. Editors used it daily and disliked it. Rewriting a surface people depend on every day is the kind of task that goes badly if you do it in one commit.",
        ],
      },
      {
        h: "The approach",
        p: [
          "Blue-green, at the component level. I built a new route with a parallel component tree next to the existing one instead of editing it in place. Both shipped, both worked, and the new one grew feature by feature until it was worth switching to — grid and pagination first, then bulk selection, then the asset details panel, then rename.",
          "Every one of those was a small merge that could not break the library people were currently using. Nothing had to be finished before anything else could ship.",
        ],
      },
      {
        h: "The one genuinely tricky bit",
        p: [
          "Rename. Filenames have to be unique per organisation, which means the check belongs in the database rather than in the form, and the failure has to come back as something an editor can act on rather than a constraint violation. That was more work than the entire grid.",
        ],
      },
      {
        p: [
          "The new tree is around 1,900 lines and all of it is mine. It runs alongside the legacy library rather than having replaced it in one motion, which is exactly what I wanted.",
        ],
      },
    ],
  },
  {
    slug: "route-binding-migration",
    title: "Renaming a URL without breaking every page behind it",
    dek: "A confidence-scored resolver that reconnects orphaned content bindings when an editor restructures a route.",
    period: "Jul 2026",
    tags: ["TypeScript", "PostgreSQL", "tRPC", "Vitest"],
    body: [
      {
        p: [
          "This is the piece of work I would show someone first. I designed and built it end to end — the database migration, the resolution engine, the API procedures, the review UI and the tests. It is about 1,450 lines of engine plus roughly 1,300 lines of tests, and four lines of it were written by somebody else.",
        ],
      },
      {
        h: "The problem",
        p: [
          "A route in the CMS is a pattern like /blog/[slug]. Documents get bound to it through its parameters. Rename the path — say to /articles/[postSlug] — and every one of those bindings points at a parameter that no longer exists. The pages don't error. They just quietly stop resolving, and the first person to find out is a reader hitting a 404 on content that was published months ago.",
          "So route renaming was effectively forbidden. Editors who wanted to restructure URLs had to ask an engineer, and the engineer had to do it by hand.",
        ],
      },
      {
        h: "The approach",
        p: [
          "The shape of it is a constraint resolver. Before anything changes, take a snapshot of every existing binding. Then index every candidate document by (schema name, slug field, normalised value), reading both the primary slug field and the alias fields. For each parameter in the new route, score the candidates from 0 to 100.",
          "Anything at 90 or above resolves automatically. Anything below that gets surfaced in a review dialog for a human to decide. A binding's confidence is the min() of its parameters, not the average — one uncertain parameter should drag the whole binding into review, and averaging would hide exactly the case you want to catch.",
        ],
      },
      {
        h: "The parts that were actually hard",
        ul: [
          "Ambiguity detection. A single document can list the same slug across four separate alias arrays. Naive candidate counting saw four matches, called it ambiguous and pushed an unambiguous binding into manual review. The fix was collapsing candidates by document before the count — a small function that removed a large amount of pointless human work.",
          "Renamed parameters. When a parameter's name changes but its position doesn't, name matching finds nothing. There's a positional fallback for that, plus spelling tolerance for the near-misses.",
          "Two generations of data. Legacy JSONB rows store keys in snake_case; newer writes use camelCase. Every read path has to tolerate both, because there is no moment where the old rows stop existing.",
        ],
      },
      {
        h: "Migration discipline",
        p: [
          "The schema change shipped first, on its own, in a 295-line PostgreSQL migration — an expand phase, deployed and running before any code depended on it. The engine came afterwards. That ordering is the difference between a rollout and an outage.",
        ],
      },
      {
        h: "What I took from it",
        p: [
          "The matching algorithm is the least interesting part. The design decision that mattered was choosing where automation stops. It could have auto-resolved everything and been right most of the time — but the failure mode here is silently broken published content, and most of the time is not good enough when nobody finds out.",
        ],
      },
    ],
  },
  {
    slug: "reproducible-rust-builds",
    title: "Build integrity in a language I don't write",
    dek: "Tracking Cargo.lock and enforcing --locked in CI. Small, boring, worth it.",
    period: "Aug 2026",
    tags: ["Rust", "CI"],
    body: [
      {
        p: [
          "The repository has two Rust services. I have written zero lines of Rust in them and I don't claim the language — my involvement is dependency and CI hygiene, and I'd rather say that plainly than let a lockfile commit look like Rust experience on a contribution graph.",
          "What was wrong: Cargo.lock wasn't tracked, so the services didn't build the same way twice. Tracking it and enforcing --locked in CI makes the build reproducible. Ten minutes of work, no visible result, and it stops the class of incident where CI is green and a machine somewhere isn't.",
        ],
      },
    ],
  },
];

/** Paid work. One entry today; the shape holds for more. */
export const work = [profound];

export const education = [
  {
    role: "B.Tech, Computer Science and Engineering",
    org: "Vellore Institute of Technology, Andhra Pradesh",
    period: "2022 — 2026",
    note: "CGPA 9.25",
  },
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
  },
];

/** Things I did that weren't a job and weren't a repo. */
export const leadership = [
  {
    role: "Technical Lead",
    org: "Mozilla Open Source Community, VIT-AP",
    body: "Led a cross-functional team of 12+, contributing to global open-source projects and mentoring juniors on GitHub workflows and software architecture.",
  },
  {
    role: "Finalist",
    org: "Google Dev Sprint '25",
    body: "Built and presented a working prototype under time constraints, judged by industry leads.",
  },
];

/**
 * The résumé, as it reads on the PDF. Only the parts that don't already exist
 * elsewhere in this file live here — education, certifications, leadership,
 * stack and the project list are reused rather than restated.
 */
export const resume = {
  phone: "+91 9933998330",
  bullets: {
    profound: [
      "Designed and shipped a route-binding migration engine that turned destructive URL changes into a confidence-scored, reviewable workflow, preventing broken content bindings.",
      "Optimised PostgreSQL/tRPC APIs by eliminating N+1 queries, adding indexes and batching, and fixing cross-tenant scans across endpoints with 1.8–6.5s p99 latency.",
      "Improved reliability and security by authoring 34% of the test suite, implementing multi-tenant database scoping, and remediating 2 SSRF vulnerabilities, 1 XSS vector and 1 CVE.",
      "Rebuilt the Media Library using a blue-green migration, and co-led the Sanity-to-ProfoundCMS migration, contributing roughly 48% of the CMS integration layer.",
    ],
    pyxtrace: [
      "Built and published an open-source Python profiler to PyPI, combining bytecode tracing, heap profiling and OS syscall monitoring with real-time visualisation.",
      "Designed a cross-platform tracing architecture with pluggable Linux, macOS, Windows and fallback backends.",
      "Implemented configurable tracing modes to balance profiling depth against runtime overhead, making long-running workloads practical to trace.",
      "Automated PyPI releases with GitHub Actions and added JSONL session recording with offline replay.",
    ],
    "saferoute-india": [
      "Architected an accident-aware route scoring platform over Indian government accident datasets, scoring routes 0–100 on severity, distance, recency and time-of-day risk.",
      "Built a PostGIS geospatial scoring engine to analyse accident exposure along route corridors and identify safety hotspots across road networks.",
      "Developed a LightGBM risk prediction pipeline using 24 engineered features covering severity, causal factors, temporal patterns, weather and emergency infrastructure.",
      "Delivered 13 REST APIs for route scoring, hotspot analysis, departure-time optimisation, risk forecasting, SOS context and community incident reporting.",
    ],
  } as Record<string, string[]>,
};

export const stack = [
  { label: "Languages", items: "TypeScript · Python · JavaScript · Java · SQL" },
  { label: "Backend", items: "Node.js · Express · FastAPI · tRPC" },
  { label: "Frontend", items: "React · Next.js · Tailwind CSS" },
  { label: "Data", items: "PostgreSQL · PostGIS · Redis · Supabase" },
  { label: "Tools", items: "Git · GitHub Actions · Docker · Linux · Bun" },
];
