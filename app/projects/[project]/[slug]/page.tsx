import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site } from "../../../content";
import {
  formatDate,
  getAllWriteups,
  getWriteup,
  getWriteups,
} from "../../../writeups";

export async function generateStaticParams() {
  const writeups = await getAllWriteups();
  return writeups.map((post) => ({ project: post.project, slug: post.slug }));
}

// Every write-up is known at build time; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/projects/[project]/[slug]">): Promise<Metadata> {
  const { project: projectSlug, slug } = await params;
  const project = projects.find((p) => p.slug === projectSlug);
  const writeup = project && (await getWriteup(project.slug, slug));
  if (!writeup) return {};

  const { title, description, date, tags } = writeup.meta;
  const path = `/projects/${project.slug}/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: `${title} — ${site.name}`,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      publishedTime: date,
      authors: [site.name],
      tags,
      // Setting openGraph replaces the inherited one, image included, so
      // point back at the site card explicitly.
      images: "/opengraph-image",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: "/opengraph-image",
    },
  };
}

export default async function WriteupPage({
  params,
}: PageProps<"/projects/[project]/[slug]">) {
  const { project: projectSlug, slug } = await params;
  const project = projects.find((p) => p.slug === projectSlug);
  const writeup = project && (await getWriteup(project.slug, slug));
  if (!project || !writeup) notFound();

  const { content, meta } = writeup;
  const others = (await getWriteups(project.slug)).filter(
    (post) => post.slug !== slug,
  );

  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-6">
      <article className="pt-16 sm:pt-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted">
            <li>
              <Link
                href="/#projects"
                className="transition-colors hover:text-ink"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-ink"
              >
                {project.name}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-ink/80">
              {meta.title}
            </li>
          </ol>
        </nav>

        <header className="mt-10">
          <p className="font-mono text-xs text-muted tabular-nums">
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            {meta.tags.length > 0 && ` · ${meta.tags.join(" · ")}`}
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-3 leading-relaxed text-accent">{meta.description}</p>
        </header>

        <div className="mt-12 leading-relaxed text-ink/85">{content}</div>

        <footer className="mt-14 border-t border-rule pt-6">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            Related
          </h2>

          <ul className="mt-4 space-y-3 font-mono text-xs">
            <li>
              <Link
                href={`/projects/${project.slug}`}
                className="group text-muted transition-colors hover:text-ink"
              >
                <span
                  aria-hidden
                  className="mr-1.5 inline-block transition-transform duration-200 group-hover:-translate-x-1"
                >
                  ←
                </span>
                {project.name} overview
              </Link>
            </li>
            {others.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/projects/${project.slug}/${post.slug}`}
                  className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent"
                >
                  {post.title} →
                </Link>
              </li>
            ))}
          </ul>

          {(project.source || project.external) && (
            <ul className="mt-6 flex flex-wrap gap-5 font-mono text-xs">
              {project.source && (
                <li>
                  <a
                    href={project.source}
                    className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent"
                  >
                    Source ↗
                  </a>
                </li>
              )}
              {project.external && (
                <li>
                  <a
                    href={project.external.href}
                    className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent"
                  >
                    {project.external.label} ↗
                  </a>
                </li>
              )}
            </ul>
          )}
        </footer>
      </article>
    </main>
  );
}
