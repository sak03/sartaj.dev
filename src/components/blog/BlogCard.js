import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function BlogCard({ blog, featured = false }) {
  return (
    <article className={`group h-full ${featured ? "md:col-span-2" : ""}`}>
      <Link
        href={`/blogs/${blog.slug}`}
        className={`flex h-full overflow-hidden rounded-[26px] border border-border bg-card text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_24px_70px_rgba(4,120,87,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${featured ? "min-h-[430px] flex-col md:grid md:grid-cols-[1.05fr_.95fr]" : "flex-col"}`}
      >
        <div className={`relative isolate overflow-hidden bg-gradient-to-br ${blog.palette} ${featured ? "min-h-[240px] md:min-h-full" : "min-h-[210px]"}`}>
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute -bottom-12 -right-4 h-44 w-44 rounded-full border border-white/20 bg-white/10 blur-[1px]" />
          <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                {blog.category}
              </span>
              <span className="font-mono text-sm text-white/65">/{blog.index}</span>
            </div>
            <p className={`max-w-sm font-semibold leading-[1.05] text-white ${featured ? "text-4xl md:text-5xl" : "text-3xl"}`}>
              {featured ? "Ideas for people who build the web." : blog.category}
            </p>
          </div>
        </div>

        <div className={`flex flex-1 flex-col p-6 ${featured ? "justify-center md:p-9" : "md:p-7"}`}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <time dateTime={blog.date}>{blog.dateLabel}</time>
            <span aria-hidden="true">•</span>
            <span>{blog.readTime}</span>
          </div>
          <h2 className={`mt-4 font-semibold leading-tight text-foreground text-balance ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {blog.title}
          </h2>
          <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-muted-foreground">
            {blog.excerpt}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            Read article
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
