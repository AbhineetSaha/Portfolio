import type { Metadata } from "next";
import Link from "next/link";
import { site, profound, workPosts } from "../../content";

const description = `Write-ups of individual pieces of work on ${profound.org}, a multi-tenant headless CMS built by a six-engineer team.`;

export const metadata: Metadata = {
  title: `${profound.org} — work log`,
  description,
  alternates: { canonical: `/work/${profound.slug}` },
  openGraph: {
    type: "website",
    title: `${profound.org} work log — ${site.name}`,
    description,
    url: `${site.url}/work/${profound.slug}`,
  },
};

export default function WorkLogPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-6">
      <div className="pt-16 sm:pt-20">
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
            {profound.org}
          </h1>
          <p className="mt-2 font-mono text-sm text-accent">
            {profound.role} · {profound.period}
          </p>
          <div className="mt-8 space-y-4 leading-relaxed text-ink/85">
            {profound.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </header>

        <ol className="mt-14 border-t border-rule">
          {workPosts.map((post) => (
            <li key={post.slug} className="group border-b border-rule py-6">
              <p className="font-mono text-xs text-muted tabular-nums">
                {post.period}
              </p>
              <h2 className="mt-2 text-lg font-medium tracking-tight">
                <Link
                  href={`/work/${profound.slug}/${post.slug}`}
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
              </h2>
              <p className="mt-2 leading-relaxed text-ink/85">{post.dek}</p>
              <p className="mt-3 font-mono text-xs text-muted">
                {post.tags.join(" · ")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
