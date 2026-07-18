import Link from "next/link";
import { FiAlertTriangle, FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { SITE_URL } from "@/lib/site";

const title = "Deploying Next.js Static Sites Without Build Surprises";
const description = "A practical guide to Next.js static export, generateStaticParams, asset paths, and preventing common build and deployment failures.";
const url = `${SITE_URL}/blogs/deploying-nextjs-static-sites`;

export const metadata = {
  title: "Deploying Next.js Static Sites Reliably",
  description,
  keywords: ["Next.js static export", "deploy Next.js", "generateStaticParams", "Next.js deployment"],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-03-10", authors: ["Sartaj Alam"] },
  twitter: { card: "summary_large_image", title, description },
};

const checks = ["Every dynamic URL is known at build time", "List links and detail lookups use the same slug", "Images and public assets exist with exact casing", "A production build passes before deployment"];

export default function StaticNextJsDeploymentArticle() {
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, datePublished: "2026-03-10", dateModified: "2026-07-18", author: { "@type": "Person", name: "Sartaj Alam", url: SITE_URL }, mainEntityOfPage: url };

  return (
    <article className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative overflow-hidden bg-gradient-to-br from-[#1a090a] via-[#47121c] to-[#9f1832] px-4 py-12 text-white sm:px-6 md:py-20">
        <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full border-[48px] border-white/5" />
        <div className="mx-auto max-w-5xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-rose-100 hover:text-white"><FiArrowLeft /> All articles</Link>
          <div className="mt-14 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-rose-200">Deployment field guide</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-.04em] text-balance sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-100/80">Static export is strict in a useful way: it exposes hidden assumptions before your users do.</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-rose-100/70"><time dateTime="2026-03-10">10 Mar 2026</time><span>8 min read</span><span>By Sartaj Alam</span></div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,680px)_260px] lg:gap-14">
          <div className="space-y-14 text-[17px] leading-8 text-muted-foreground">
            <p className="text-xl leading-9 text-foreground">Portfolios and content sites are excellent static-export candidates. The tradeoff is simple: Next.js must be able to produce every page without waiting for a future request.</p>

            <section>
              <p className="font-mono text-sm text-rose-700 dark:text-rose-300">01 / DETERMINISTIC ROUTES</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Tell the build which dynamic pages exist</h2>
              <p className="mt-5">A route such as <code className="rounded bg-muted px-1.5 py-1 font-mono text-sm text-foreground">/projects/[slug]</code> represents many possible URLs. In export mode the build cannot guess those values, so <code className="rounded bg-muted px-1.5 py-1 font-mono text-sm text-foreground">generateStaticParams()</code> provides the complete list.</p>
              <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-200"><code>{`export function generateStaticParams() {\n  return projects.map((project) => ({\n    slug: project.slug,\n  }));\n}`}</code></pre>
            </section>

            <section>
              <p className="font-mono text-sm text-rose-700 dark:text-rose-300">02 / FAILURE PATTERNS</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Most “random” failures are mismatches</h2>
              <p className="mt-5">A card may link with a slug while the detail page searches by id. An asset may work on a case-insensitive laptop but fail on a Linux server. A route may read request headers even though export mode has no request.</p>
              <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-950 dark:border-rose-900/60 dark:bg-rose-950/25 dark:text-rose-50"><div className="flex gap-3"><FiAlertTriangle className="mt-1 shrink-0 text-rose-600" /><div><h3 className="font-semibold">Watch the contract between files</h3><p className="mt-2 text-sm leading-7 text-rose-900/70 dark:text-rose-100/70">Route folder, generated parameter, link href, and data lookup must all agree on the same name and value.</p></div></div></div>
            </section>

            <section>
              <p className="font-mono text-sm text-rose-700 dark:text-rose-300">03 / THE WORKFLOW</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Build before deployment day</h2>
              <p className="mt-5">Development mode optimizes for feedback and can hide export-only problems. Run a production build whenever you add a route, change content structure, or introduce an integration. Small, frequent verification makes the failing change obvious.</p>
            </section>

            <section className="rounded-3xl bg-muted p-7 md:p-9"><p className="text-xs font-bold uppercase tracking-[.2em]">The takeaway</p><h2 className="mt-3 text-2xl font-semibold text-foreground">Static export rewards clear boundaries.</h2><p className="mt-4">When URLs, content, assets, and rendering requirements are deterministic, the site becomes fast, portable, and easy to host almost anywhere.</p></section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">Pre-flight check</p>
              <ul className="mt-5 space-y-4">{checks.map((check) => <li key={check} className="flex gap-3 text-sm leading-6 text-muted-foreground"><FiCheckCircle className="mt-1 shrink-0 text-emerald-600" /><span>{check}</span></li>)}</ul>
            </div>
          </aside>
        </div>

        <nav className="mt-14 border-t border-border pt-8" aria-label="Next article"><Link href="/blogs/how-ai-is-evolving-in-2026" className="group ml-auto flex max-w-xl items-center justify-between gap-5 rounded-2xl p-4 hover:bg-muted"><span><span className="text-xs uppercase tracking-[.2em] text-muted-foreground">Newest article</span><strong className="mt-1 block">How AI is evolving in 2026</strong></span><FiArrowRight className="transition group-hover:translate-x-1" /></Link></nav>
      </div>
    </article>
  );
}
