import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-6 pt-24">
      <h1 className="text-3xl font-medium tracking-tight">404</h1>
      <p className="mt-3 leading-relaxed text-ink/85">
        That page doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block border-b border-rule pb-0.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink"
      >
        ← Back
      </Link>
    </main>
  );
}
