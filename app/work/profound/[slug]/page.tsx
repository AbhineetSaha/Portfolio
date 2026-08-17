import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, profound, workPosts } from "../../../content";
import { Block, List } from "../../../section";

export function generateStaticParams() {
  return workPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/profound/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = workPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: `/work/${profound.slug}/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} — ${site.name}`,
      description: post.dek,
      url: `${site.url}/work/${profound.slug}/${post.slug}`,
    },
  };
}

export default async function WorkPostPage({
  params,
}: PageProps<"/work/profound/[slug]">) {
  const { slug } = await params;
  const index = workPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = workPosts[index];
  const next = workPosts[index + 1];

  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-6">
      <article className="pt-16 sm:pt-20">
        <Link
          href={`/work/${profound.slug}`}
          className="group font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          <span
            aria-hidden
            className="mr-1.5 inline-block transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          {profound.org} work log
        </Link>

        <header className="mt-10">
          <p className="font-mono text-xs text-muted tabular-nums">
            {post.period} · {profound.org}
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 leading-relaxed text-accent">{post.dek}</p>
        </header>

        <div className="mt-12 space-y-10">
          {post.body.map((block, i) => (
            <Block key={block.h ?? i} title={block.h}>
              {block.p && (
                <div className="space-y-4">
                  {block.p.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {block.ul && (
                <div className={block.p ? "mt-4" : undefined}>
                  <List items={block.ul} />
                </div>
              )}
            </Block>
          ))}
        </div>

        <footer className="mt-14 border-t border-rule pt-6">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            Worked with
          </h2>
          <p className="mt-2 font-mono text-xs text-ink/80">
            {post.tags.join(" · ")}
          </p>

          {next && (
            <p className="mt-8 font-mono text-xs">
              <span className="text-muted">Next: </span>
              <Link
                href={`/work/${profound.slug}/${next.slug}`}
                className="border-b border-rule pb-0.5 transition-colors hover:border-accent hover:text-accent"
              >
                {next.title} →
              </Link>
            </p>
          )}
        </footer>
      </article>
    </main>
  );
}
