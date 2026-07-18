import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SITE_URL } from "@/lib/site";

const title = "React Server Components, Explained Without the Hype";
const description = "A practical mental model for React Server Components, Client Components, smaller browser bundles, and maintainable server-client boundaries.";
const url = `${SITE_URL}/blogs/understanding-react-server-components`;

export const metadata = {
  title: "React Server Components, Explained Clearly",
  description,
  keywords: ["React Server Components", "Server vs Client Components", "Next.js architecture", "React performance"],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-03-15", authors: ["Sartaj Alam"] },
  twitter: { card: "summary_large_image", title, description },
};

export default function ReactServerComponentsArticle() {
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, datePublished: "2026-03-15", dateModified: "2026-07-18", author: { "@type": "Person", name: "Sartaj Alam", url: SITE_URL }, mainEntityOfPage: url };

  return (
    <article className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative isolate overflow-hidden border-b border-emerald-800/40 bg-[#07140f] px-4 py-12 text-white sm:px-6 md:py-20">
        <div className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="mx-auto max-w-5xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-emerald-200 hover:text-white"><FiArrowLeft /> All articles</Link>
          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_210px] md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-emerald-300">React architecture</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-.04em] text-balance sm:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/70">The useful question is not “server or client?” It is “where does this work actually need to happen?”</p>
            </div>
            <div className="border-l border-emerald-300/30 pl-5 text-sm leading-7 text-emerald-100/65"><time dateTime="2026-03-15">15 Mar 2026</time><br />6 min read<br />Sartaj Alam</div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[760px] px-4 py-12 sm:px-6 md:py-16">
        <p className="text-xl leading-9 text-foreground">Traditional React applications can send JavaScript for UI that never becomes interactive. Server Components let that display work stay on the server while React still composes the page as one tree.</p>

        <section className="mt-14">
          <span className="font-mono text-sm text-emerald-700 dark:text-emerald-300">01</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">What they actually solve</h2>
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-muted-foreground">
            <p>When a component only reads data and returns markup, the browser should not have to download and hydrate all of its implementation. A Server Component runs away from the browser, can access server-side resources, and sends a rendered result through React&apos;s server format.</p>
            <p>This can reduce client JavaScript and keep database or API access close to the place that assembles the screen. It is an architectural tool first and a performance optimization second.</p>
          </div>
        </section>

        <section className="mt-14">
          <span className="font-mono text-sm text-emerald-700 dark:text-emerald-300">02</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Think in boundaries, not page types</h2>
          <div className="mt-7 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-border p-6 sm:border-b-0 sm:border-r"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700 dark:text-emerald-300">Server side</p><h3 className="mt-3 text-xl font-semibold">Prepare and compose</h3><ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground"><li>Fetch and shape data</li><li>Read files or databases</li><li>Render article and catalogue UI</li><li>Keep secrets off the client</li></ul></div>
              <div className="p-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-700 dark:text-cyan-300">Client side</p><h3 className="mt-3 text-xl font-semibold">Interact and respond</h3><ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground"><li>Handle clicks and typing</li><li>Use state and effects</li><li>Access browser APIs</li><li>Deliver instant feedback</li></ul></div>
            </div>
          </div>
          <p className="mt-6 text-[17px] leading-8 text-muted-foreground">A route can be mostly server-rendered and still contain small interactive islands. Pass serializable data into focused Client Components at the leaves instead of turning the whole page into client code.</p>
        </section>

        <section className="mt-14">
          <span className="font-mono text-sm text-emerald-700 dark:text-emerald-300">03</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">The rule that keeps code clear</h2>
          <blockquote className="mt-6 border-l-4 border-emerald-500 bg-emerald-50 px-6 py-5 text-xl font-medium leading-9 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-50">Use Server Components for data and display. Introduce a Client Component where interaction begins.</blockquote>
          <p className="mt-6 text-[17px] leading-8 text-muted-foreground">This is a starting point, not a law. Context providers, third-party libraries, and real-time behavior sometimes move the boundary. The goal is to make each exception deliberate.</p>
        </section>

        <section className="mt-14 rounded-3xl bg-muted p-7 md:p-9">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">Final thought</p>
          <h2 className="mt-3 text-2xl font-semibold">Server Components do not replace client-side React.</h2>
          <p className="mt-4 text-[17px] leading-8 text-muted-foreground">They stop us from treating the browser as the only place React can do useful work. When the boundary follows the product&apos;s actual needs, the result is usually smaller, safer, and easier to reason about.</p>
        </section>

        <nav className="mt-12 border-t border-border pt-8" aria-label="Next article"><Link href="/blogs/deploying-nextjs-static-sites" className="group flex items-center justify-between gap-5 rounded-2xl p-4 hover:bg-muted"><span><span className="text-xs uppercase tracking-[.2em] text-muted-foreground">Next article</span><strong className="mt-1 block">Deploying static Next.js sites</strong></span><FiArrowRight className="transition group-hover:translate-x-1" /></Link></nav>
      </div>
    </article>
  );
}
