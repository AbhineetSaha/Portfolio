import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { projects } from "./content";
import { components } from "./mdx-components";

/**
 * Write-ups are MDX files under content/projects/<project-slug>/. The filename
 * is the URL slug, so content/projects/pyxtrace/foo.mdx is served at
 * /projects/pyxtrace/foo. A project with no folder simply has no write-ups.
 * Files are read and compiled at build time; every page stays static.
 *
 * Every file starts with frontmatter:
 *
 *   ---
 *   title: Counting instead of timing
 *   description: One line, shown in listings and as the meta description.
 *   date: 2026-10-01
 *   tags: [Python, CI]
 *   ---
 */

export type Writeup = {
  project: string;
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  tags: string[];
};

const root = path.join(process.cwd(), "content", "projects");

function slugsFor(project: string): string[] {
  const dir = path.join(root, project);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.slice(0, -".mdx".length));
}

async function load(project: string, slug: string) {
  const source = fs.readFileSync(path.join(root, project, `${slug}.mdx`));
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });
  return { content, meta: parse(project, slug, frontmatter) };
}

/** Fails the build on a malformed file rather than rendering a broken page. */
function parse(
  project: string,
  slug: string,
  fm: Record<string, unknown> = {},
): Writeup {
  const where = `content/projects/${project}/${slug}.mdx`;
  const { title, description, date, tags = [] } = fm;

  if (typeof title !== "string" || !title)
    throw new Error(`${where}: frontmatter needs a title`);
  if (typeof description !== "string" || !description)
    throw new Error(`${where}: frontmatter needs a description`);

  // The YAML parser leaves dates as strings, but accept a Date in case that
  // ever changes.
  const iso =
    date instanceof Date ? date.toISOString().slice(0, 10) : String(date ?? "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso))
    throw new Error(`${where}: frontmatter date must be YYYY-MM-DD`);

  if (!Array.isArray(tags) || tags.some((t) => typeof t !== "string"))
    throw new Error(`${where}: frontmatter tags must be a list of strings`);

  return { project, slug, title, description, date: iso, tags };
}

/** One project's write-ups, newest first. */
export async function getWriteups(project: string): Promise<Writeup[]> {
  const all = await Promise.all(
    slugsFor(project).map(async (slug) => (await load(project, slug)).meta),
  );
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

/** Every write-up on the site, across all projects. */
export async function getAllWriteups(): Promise<Writeup[]> {
  const perProject = await Promise.all(
    projects.map((project) => getWriteups(project.slug)),
  );
  return perProject.flat();
}

export async function getWriteup(project: string, slug: string) {
  if (!slugsFor(project).includes(slug)) return undefined;
  return load(project, slug);
}

/** "2026-10-01" → "1 Oct 2026". Parsed as UTC so the day never shifts. */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
