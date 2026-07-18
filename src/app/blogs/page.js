import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Web Development & AI Blog",
  description:
    "Practical articles by Sartaj Alam about Next.js, React architecture, deployment, artificial intelligence, and building better web products.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Web Development & AI Blog | Sartaj Alam",
    description: "Practical notes on modern web development, architecture, deployment, and AI.",
    url: `${SITE_URL}/blogs`,
  },
};

export default function BlogsPage() {
  return (
    <div className="blog-archive px-4 py-10 sm:px-6 md:py-16">
      <section className="mx-auto max-w-6xl" aria-labelledby="blog-heading">
        <div className="grid items-end gap-8 border-b border-border pb-10 md:grid-cols-[1fr_320px] md:pb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
              Notes from the build
            </p>
            <h1 id="blog-heading" className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-foreground text-balance sm:text-6xl lg:text-7xl">
              Clear thinking for a fast-moving web.
            </h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground md:pb-1">
            Practical field notes about frontend architecture, reliable deployment, and the way AI is changing how we build—not recycled tutorials.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard blog={post} featured={index === 0} key={post.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
