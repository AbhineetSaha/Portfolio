import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * How write-up MDX maps onto the site's existing type styles: section headings
 * match <Block> titles, lists match <List>, links match inline links elsewhere.
 * Code blocks and tables scroll inside themselves so they never widen the page.
 */

// Tighter spacing straight after a heading, as in <Block>.
const flow = "mt-4 first:mt-0 [h2+&]:mt-3 [h3+&]:mt-2";

export const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 font-mono text-xs uppercase tracking-wider text-muted first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 font-medium text-ink first:mt-0" {...props} />
  ),
  p: (props) => <p className={flow} {...props} />,
  ul: (props) => (
    <ul
      className={`${flow} space-y-3 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-2 [&>li]:before:h-px [&>li]:before:w-3 [&>li]:before:bg-rule [&>li]:before:content-['']`}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className={`${flow} list-decimal space-y-3 pl-6 marker:font-mono marker:text-xs marker:text-muted`}
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    const className =
      "border-b border-rule text-ink transition-colors hover:border-accent hover:text-accent";
    return href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className={className} {...props} />
    ) : (
      <a href={href} className={className} {...props} />
    );
  },
  strong: (props) => <strong className="font-medium text-ink" {...props} />,
  blockquote: (props) => (
    <blockquote
      className={`${flow} border-l border-rule pl-4 text-muted`}
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-rule" />,
  code: (props) => (
    <code
      className="bg-surface px-1 py-0.5 font-mono text-[0.875em] text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className={`${flow} overflow-x-auto border border-rule bg-surface p-4 font-mono text-xs leading-relaxed text-ink [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[1em]`}
      {...props}
    />
  ),
  table: (props) => (
    <div className={`${flow} overflow-x-auto`}>
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="whitespace-nowrap border-b border-rule py-2 pr-4 text-left font-mono text-xs font-normal uppercase tracking-wider text-muted last:pr-0"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-rule py-2 pr-4 align-top last:pr-0"
      {...props}
    />
  ),
};
