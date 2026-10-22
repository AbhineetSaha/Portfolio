# abhineetsaha.com

Personal site. Next.js 16 (App Router), React 19, Tailwind v4, TypeScript.
Every route is statically prerendered and ships no client JavaScript of its own.

## Development

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

## Editing content

All copy lives in [`app/content.ts`](app/content.ts) — identity, intro, projects,
experience, stack, links. Nothing is hardcoded into markup, so changing a word
never means touching a component.

Adding a project means appending to the `projects` array. The route
(`/projects/<slug>`), the sitemap entry and the homepage listing all follow from
it. Every field in `detail` is optional: sections you leave out simply don't
render, so an entry can start as a one-line summary and grow later.

### Project write-ups

Long-form write-ups live next to their project, not in a separate blog. Add an
MDX file to `content/projects/<project-slug>/` and it is served at
`/projects/<project-slug>/<file-name>`, listed under "Write-ups" on the project
page, counted on the homepage card and added to the sitemap. Each file needs
frontmatter:

```mdx
---
title: Counting instead of timing
description: One line, used in listings and as the meta description.
date: 2026-10-01
tags: [Python, CI]
---
```

A project with no folder (or an empty one) simply shows no write-ups. Element
styles for MDX live in [`app/mdx-components.tsx`](app/mdx-components.tsx).

Ground rule for this file: nothing goes in that isn't verifiable or true.
No invented metrics, no rounded-up scope, no implementation details of
production work that haven't been cleared for publication.

## Structure

```
app/
├── content.ts            # all site copy
├── layout.tsx            # fonts, metadata, header, footer
├── page.tsx              # homepage
├── section.tsx           # the one layout primitive
├── writeups.ts           # loads project write-ups from content/projects/
├── mdx-components.tsx    # how write-up MDX maps onto the site's styles
├── projects/[project]/   # project case studies
│   └── [slug]/           # a project's write-ups
├── icon.svg              # favicon
├── opengraph-image.tsx   # social card
├── sitemap.ts
└── robots.ts
content/
└── projects/<slug>/*.mdx # write-ups, one folder per project
```

Design tokens (five colors, one radius, one container width) are defined at the
top of [`app/globals.css`](app/globals.css).
