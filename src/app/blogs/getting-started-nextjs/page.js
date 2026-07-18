import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import { SITE_URL } from "@/lib/site";

const title = "Getting Started with Next.js: A Practical Beginner Guide";
const description = "Learn Next.js App Router fundamentals, layouts, rendering choices, metadata, and a reliable structure for your first production-ready app.";
const url = `${SITE_URL}/blogs/getting-started-nextjs`;

export const metadata = {
  title: "Getting Started with Next.js — Beginner Guide",
  description,
  keywords: ["Next.js beginner guide", "Next.js App Router", "learn Next.js", "React framework"],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-03-20", authors: ["Sartaj Alam"] },
  twitter: { card: "summary_large_image", title, description },
};

const takeaways = [
  "Folders become URL segments; page.js becomes the route UI.",
  "Server Components are the default—add client code only for interaction.",
  "Static rendering is ideal for portfolios, blogs, and stable content.",
  "Layouts and metadata solve repetition before it spreads.",
];

export default function GettingStartedNextJs() {
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, datePublished: "2026-03-20", dateModified: "2026-07-18", author: { "@type": "Person", name: "Sartaj Alam", url: SITE_URL }, mainEntityOfPage: url };

  return (
    <article className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-4 py-12 text-white sm:px-6 md:py-20">
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="mx-auto max-w-5xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"><FiArrowLeft /> All articles</Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[.28em] text-blue-200">Next.js · Beginner guide</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-.04em] text-balance sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">A calm route through the concepts that matter, without trying to learn the entire framework in one weekend.</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-100"><time dateTime="2026-03-20">20 Mar 2026</time><span>7 min read</span><span>By Sartaj Alam</span></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[220px_minmax(0,680px)] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-muted-foreground">You will learn</p>
          <ul className="mt-4 space-y-4">
            {takeaways.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><FiCheck className="mt-1 shrink-0 text-emerald-600" /><span>{item}</span></li>)}
          </ul>
        </aside>

        <div className="min-w-0 space-y-12 text-[17px] leading-8 text-muted-foreground">
          <p className="text-xl leading-9 text-foreground">Next.js feels large when every feature looks equally important. It becomes approachable when you see it as React plus a set of strong defaults for routing, rendering, assets, and production delivery.</p>

          <section>
            <p className="font-mono text-sm text-blue-600 dark:text-blue-300">01 / THE MENTAL MODEL</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Start with the app folder</h2>
            <p className="mt-5">Inside the App Router, a folder normally represents a URL segment and a <code className="rounded bg-muted px-1.5 py-1 font-mono text-sm text-foreground">page.js</code> file provides the screen. Create <code className="rounded bg-muted px-1.5 py-1 font-mono text-sm text-foreground">app/about/page.js</code> and Next.js creates <code className="rounded bg-muted px-1.5 py-1 font-mono text-sm text-foreground">/about</code>.</p>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm leading-7 text-slate-200"><code>{`app/\n  layout.js        // shared shell\n  page.js          // /\n  about/\n    page.js        // /about\n  blogs/\n    [slug]/\n      page.js      // /blogs/:slug`}</code></pre>
          </section>

          <section>
            <p className="font-mono text-sm text-blue-600 dark:text-blue-300">02 / SERVER FIRST</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Choose the browser boundary intentionally</h2>
            <p className="mt-5">Pages are Server Components by default. They can prepare content without shipping that component&apos;s JavaScript to the browser. Add <code className="rounded bg-muted px-1.5 py-1 font-mono text-sm text-foreground">&quot;use client&quot;</code> only when a component needs state, event handlers, effects, or browser APIs.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-semibold text-foreground">Keep on the server</h3><p className="mt-2 text-sm leading-7">Article content, project lists, data fetching, metadata, and non-interactive layouts.</p></div>
              <div className="rounded-2xl border border-border bg-card p-5"><h3 className="font-semibold text-foreground">Move to the client</h3><p className="mt-2 text-sm leading-7">Theme toggles, forms with live validation, modals, filters, and browser-only behavior.</p></div>
            </div>
          </section>

          <section>
            <p className="font-mono text-sm text-blue-600 dark:text-blue-300">03 / RENDERING</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Use the simplest rendering mode that fits</h2>
            <p className="mt-5">If content is known during the build, static rendering is fast, cacheable, and excellent for search. If it depends on the current request or changes constantly, render dynamically. The best default is not the fanciest option; it is the least complex option that stays correct.</p>
          </section>

          <section className="rounded-3xl bg-blue-50 p-6 text-blue-950 dark:bg-blue-950/40 dark:text-blue-50 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700 dark:text-blue-300">A useful first project</p>
            <h2 className="mt-3 text-2xl font-semibold">Build one small, complete website</h2>
            <p className="mt-4 leading-8 text-blue-900/75 dark:text-blue-100/75">Include a homepage, a list page, a detail route, shared layout, loading state, and real metadata. A connected project teaches more than disconnected examples because every architectural choice has a consequence.</p>
          </section>

          <nav className="border-t border-border pt-8" aria-label="Next article">
            <Link href="/blogs/understanding-react-server-components" className="group flex items-center justify-between gap-5 rounded-2xl p-4 transition hover:bg-muted">
              <span><span className="text-xs uppercase tracking-[.2em]">Next article</span><strong className="mt-1 block text-foreground">React Server Components, explained</strong></span><FiArrowRight className="shrink-0 transition group-hover:translate-x-1" />
            </Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
