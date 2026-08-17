import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { links, site } from "./content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-paper focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
        >
          Skip to content
        </a>

        <header className="mx-auto flex w-full max-w-2xl items-baseline justify-between gap-4 px-6 pt-8 sm:pt-12">
          <Link
            href="/"
            className="font-mono text-xs tracking-tight text-muted transition-colors hover:text-ink"
          >
            {site.name.toLowerCase().replace(" ", "-")}
          </Link>
          <nav aria-label="Elsewhere">
            <ul className="flex gap-4 font-mono text-xs text-muted">
              <li>
                <a
                  className="transition-colors hover:text-ink"
                  href={links.github}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-ink"
                  href={links.linkedin}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="mx-auto w-full max-w-2xl px-6 pb-12 pt-16">
          <p className="border-t border-rule pt-6 font-mono text-xs text-muted">
            {site.name} · {site.location}
          </p>
        </footer>
      </body>
    </html>
  );
}
