import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiCheck, FiCompass, FiShield, FiZap } from "react-icons/fi";
import { SITE_URL } from "@/lib/site";

const title = "AI in 2026: From Chatbots to Teammates That Take Action";
const description = "How AI is evolving in 2026—from multimodal assistants to agents, changing workflows, trust and safety, and the durable skills people should build now.";
const url = `${SITE_URL}/blogs/how-ai-is-evolving-in-2026`;

export const metadata = {
  title: "How AI Is Evolving in 2026",
  description,
  keywords: ["AI in 2026", "future of AI", "AI agents", "multimodal AI", "AI and jobs", "artificial intelligence trends"],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", publishedTime: "2026-07-18", modifiedTime: "2026-07-18", authors: ["Sartaj Alam"], tags: ["Artificial Intelligence", "AI Agents", "Future of Work"] },
  twitter: { card: "summary_large_image", title, description },
};

const shifts = [
  { icon: <FiZap />, label: "Then", title: "Generate an answer", text: "One prompt produced text, an image, or a code snippet." },
  { icon: <FiCompass />, label: "Now", title: "Complete a workflow", text: "Systems can plan steps, use tools, inspect results, and keep moving." },
  { icon: <FiShield />, label: "Next constraint", title: "Earn reliable trust", text: "Capability only matters when actions remain observable and controllable." },
];

export default function AiEvolutionArticle() {
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, datePublished: "2026-07-18", dateModified: "2026-07-18", author: { "@type": "Person", name: "Sartaj Alam", url: SITE_URL }, publisher: { "@type": "Person", name: "Sartaj Alam" }, mainEntityOfPage: url, keywords: "AI in 2026, AI agents, multimodal AI, future of work" };

  return (
    <article className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative isolate overflow-hidden bg-[#080719] px-4 py-12 text-white sm:px-6 md:py-20">
        <div className="absolute left-1/2 top-[-11rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[100px]" />
        <div className="absolute -bottom-44 right-[-7rem] -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[90px]" />
        <div className="mx-auto max-w-6xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-violet-200 hover:text-white"><FiArrowLeft /> All articles</Link>
          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,800px)_1fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-violet-300/25 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-violet-200">Artificial Intelligence</span><span className="text-sm text-white/50">Perspective · July 2026</span></div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-.05em] text-balance sm:text-6xl lg:text-7xl">{title}</h1>
            </div>
            <p className="border-l border-violet-300/25 pl-6 text-base leading-8 text-white/65">The important shift is not that AI can say more. It is that AI can now do more—and that changes products, teams, and responsibility.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/55"><time dateTime="2026-07-18">18 Jul 2026</time><span>9 min read</span><span>By Sartaj Alam</span></div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {shifts.map((item) => <div key={item.label} className="rounded-3xl border border-border bg-card p-6"><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">{item.icon}</span><p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">{item.label}</p><h2 className="mt-2 text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p></div>)}
        </div>

        <div className="mx-auto mt-16 max-w-[760px] space-y-16">
          <p className="text-xl leading-9 text-foreground">For years, most people experienced AI as prediction hidden inside search, recommendations, or fraud detection. Generative AI made the technology visible. The next phase is making it operational: systems that understand mixed media, remember context, and act through software.</p>

          <section>
            <p className="font-mono text-sm text-violet-700 dark:text-violet-300">01 / FROM MODELS TO SYSTEMS</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">The model is becoming one part of the product</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
              <p>A capable model alone does not create a dependable assistant. Modern AI products combine a model with search, memory, tools, permissions, evaluation, and a user interface that lets people understand what happened.</p>
              <p>This is why the word <em>agent</em> matters. An agent does not only draft an answer. It can break a goal into steps, call tools, compare the result with the goal, and continue. Google DeepMind now describes agents executing complex work across areas such as product development and cyber defence—and also warns that greater autonomy requires stronger safeguards.</p>
            </div>
            <a href="https://deepmind.google/blog/securing-the-future-of-ai-agents/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300">Google DeepMind: securing AI agents <FiArrowUpRight /></a>
          </section>

          <section>
            <p className="font-mono text-sm text-violet-700 dark:text-violet-300">02 / MULTIMODAL BY DEFAULT</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">AI is learning the language of real work</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
              <p>Work rarely arrives as a clean paragraph. It arrives as a screen, spreadsheet, conversation, diagram, voice note, codebase, or camera feed. Multimodal systems can reason across several of these formats in one workflow.</p>
              <p>For product builders, this changes the interface. The “prompt box” becomes less central. AI can sit inside an editor, understand what is already on screen, and respond with an edit or an action. The best AI experiences will increasingly feel like well-designed product features, not separate chatbots.</p>
            </div>
          </section>

          <aside className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-700 to-indigo-950 p-7 text-white md:p-10">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[32px] border-white/10" />
            <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-200">The design opportunity</p>
            <p className="relative mt-4 max-w-xl text-2xl font-medium leading-10">Do not ask where to add a chatbot. Ask where a user is losing time, context, or confidence—and whether AI can remove that friction safely.</p>
          </aside>

          <section>
            <p className="font-mono text-sm text-violet-700 dark:text-violet-300">03 / WORK IS BEING RECOMPOSED</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Tasks change before whole jobs do</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
              <p>The loudest debate asks whether AI will replace jobs. A more useful near-term question is which tasks are being automated, accelerated, or newly possible. A developer may spend less time writing boilerplate and more time defining architecture, reviewing behavior, and validating edge cases.</p>
              <p>Anthropic&apos;s Economic Index now measures real-world AI use through factors including task complexity, skill level, purpose, autonomy, and success. That framework reflects the reality: “AI use” is not one activity, and its impact depends on how responsibility is divided between a person and a system.</p>
              <p>Stanford&apos;s 2026 AI Index similarly describes capability, investment, and adoption rising while governance, evaluation, and transparency struggle to keep pace. Progress is real; preparedness is uneven.</p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://www.anthropic.com/research/economic-index-primitives" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300">Anthropic Economic Index <FiArrowUpRight /></a>
              <a href="https://hai.stanford.edu/ai-index" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300">Stanford AI Index 2026 <FiArrowUpRight /></a>
            </div>
          </section>

          <section>
            <p className="font-mono text-sm text-violet-700 dark:text-violet-300">04 / TRUST BECOMES THE PRODUCT</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">More autonomy requires better control</h2>
            <p className="mt-6 text-[17px] leading-8 text-muted-foreground">A generated paragraph can be reviewed before use. An agent that sends email, edits production data, or spends money creates a different risk. Good systems need scoped permissions, previews for consequential actions, logs, undo paths, and clear moments for human approval.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Show sources and uncertainty", "Ask before irreversible actions", "Keep an auditable activity trail", "Make correction and undo easy", "Test failure modes, not only demos", "Protect private context by default"].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground"><FiCheck className="mt-1 shrink-0 text-emerald-600" /><span>{item}</span></li>)}
            </ul>
          </section>

          <section>
            <p className="font-mono text-sm text-violet-700 dark:text-violet-300">05 / WHAT TO LEARN NOW</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Durable skills beat tool chasing</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
              <p>Specific tools will change quickly. Problem framing, domain knowledge, taste, communication, and verification will remain valuable because they determine whether a fast output is actually a good outcome.</p>
              <p>For developers, learn to design tool boundaries, evaluate outputs, manage context, and keep humans in control. Use AI to increase the speed of exploration, but keep engineering judgment attached to the result.</p>
            </div>
          </section>

          <section className="rounded-[32px] border border-violet-200 bg-violet-50 p-7 text-violet-950 dark:border-violet-900/60 dark:bg-violet-950/25 dark:text-violet-50 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-700 dark:text-violet-300">My view</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">AI is becoming a new layer of computing, not a single feature.</h2>
            <p className="mt-5 text-[17px] leading-8 text-violet-900/75 dark:text-violet-100/75">The winners will not be the people who automate everything. They will be the people who know what should be automated, what must remain human, and how to design a trustworthy boundary between the two.</p>
          </section>

          <div className="border-t border-border pt-8 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">A note on sources:</strong> This article was updated on 18 July 2026 using the Stanford AI Index, Anthropic Economic Index, and Google DeepMind&apos;s published agent-safety work. Predictions are clearly presented as perspective, not certainty.</div>
        </div>
      </div>
    </article>
  );
}
