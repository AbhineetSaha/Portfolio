import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site } from "../../content";
import { Block, List } from "../../section";
import { formatDate, getWriteups } from "../../writeups";

export function generateStaticParams() {
  return projects.map((project) => ({ project: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[project]">): Promise<Metadata> {
  const { project: slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const description = project.summary;
  return {
    title: `${project.name} — ${project.tagline}`,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — ${site.name}`,
      description,
      url: `${site.url}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[project]">) {
  const { project: slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = project.detail;
  const writeups = await getWriteups(project.slug);

  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-6">
      <article className="pt-16 sm:pt-20">
        <Link
          href="/"
          className="group font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          <span
            aria-hidden
            className="mr-1.5 inline-block transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          Back
        </Link>

        <header className="mt-10">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-accent">
            {project.tagline}
          </p>
        </header>

        {detail ? (
          <div className="mt-10 space-y-10">
            <Block title="Overview">
              <p>{detail.overview}</p>
            </Block>

            {detail.problem && (
              <Block title="Problem">
                <p>{detail.problem}</p>
              </Block>
            )}

            {detail.contribution && (
              <Block title="What I did">
                <List items={detail.contribution} />
              </Block>
            )}

            {detail.approach && (
              <Block title="Approach">
                <List items={detail.approach} />
              </Block>
            )}

            {detail.challenges && (
              <Block title="Challenges">
                <List items={detail.challenges} />
              </Block>
            )}

            {detail.outcome && (
              <Block title="Outcome">
                <p>{detail.outcome}</p>
              </Block>
            )}
          </div>
        ) : (
          <p className="mt-10 leading-relaxed text-ink/85">{project.summary}</p>
        )}

        <footer className="mt-12 border-t border-rule pt-6">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            Built with
          </h2>
          <p className="mt-2 font-mono text-xs text-ink/80">
            {project.stack.join(" · ")}
          </p>

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

        {writeups.length > 0 && (
          <section id="write-ups" className="mt-12 border-t border-rule pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
              Write-ups
            </h2>
            <ol className="mt-2">
              {writeups.map((post) => (
                <li
                  key={post.slug}
                  className="group border-b border-rule py-6 last:border-b-0"
                >
                  <p className="font-mono text-xs text-muted tabular-nums">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <h3 className="mt-2 text-lg font-medium tracking-tight">
                    <Link
                      href={`/projects/${project.slug}/${post.slug}`}
                      className="transition-colors group-hover:text-accent"
                    >
                      {post.title}
                      <span
                        aria-hidden
                        className="ml-1.5 inline-block text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                      >
                        →
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/85">
                    {post.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>
    </main>
  );
}
