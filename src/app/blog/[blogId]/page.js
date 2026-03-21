import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { blogsData } from "@/utils/datas/blogsData";

const siteUrl = "https://sak03.github.io/sartaj.dev";

const getBlogBySlug = (blogId) => blogsData.find((item) => item.slug === blogId);

export function generateStaticParams() {
    return blogsData.map((blog) => ({ blogId: blog.slug }));
}

export function generateMetadata({ params }) {
    const blog = getBlogBySlug(params.blogId);

    if (!blog) {
        return {
            title: "Blog Not Found | Sartaj Alam",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = blog.seo?.metaTitle || blog.title;
    const description = blog.seo?.metaDescription || blog.shortDescription;
    const canonicalUrl = `${siteUrl}/blog/${blog.slug}`;

    return {
        title,
        description,
        keywords: [
            ...blog.tags,
            blog.category,
            "Sartaj Alam",
            "web development blog",
            "frontend blog",
        ],
        authors: [{ name: blog.author }],
        creator: blog.author,
        publisher: "Sartaj Alam",
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: "Sartaj Alam Portfolio",
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author],
            tags: blog.tags,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: "@sartaj_03",
        },
    };
}

const BlogDetails = ({ params }) => {
    const { blogId } = params;
    const blog = getBlogBySlug(blogId);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <main className="px-3 py-6 md:px-6 md:py-12">
            <article className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_22px_80px_rgba(15,23,42,0.08)]">
                <div
                    className="relative overflow-hidden px-0 py-8 md:py-10"
                    style={{
                        background: `linear-gradient(135deg, ${blog.coverPalette.from}, ${blog.coverPalette.to})`,
                    }}
                >
                    <div
                        className="pointer-events-none absolute -right-6 top-2 text-[7rem] font-black leading-none opacity-20 md:text-[10rem]"
                        style={{ color: blog.coverPalette.accent }}
                        aria-hidden="true"
                    >
                        {blog.id.replace("blog", "")}
                    </div>

                    <div className="px-6 md:px-10">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
                        >
                            <FiArrowLeft />
                            Back to blogs
                        </Link>

                        <div className="mt-8 max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                                {blog.category}
                            </p>
                            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                                {blog.title}
                            </h1>
                            <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">
                                {blog.shortDescription}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
                                <span>{blog.date}</span>
                                <span>{blog.readTime}</span>
                                <span>{blog.author}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-10 px-3 py-8 md:py-10 lg:grid-cols-[240px_1fr]">
                    <aside className="lg:sticky lg:top-8 lg:self-start">
                        <div className="mx-6 rounded-[24px] bg-black/[0.03] p-5 md:mx-8 lg:mx-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/45">
                                Key Takeaways
                            </p>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-black/70">
                                {blog.keyTakeaways.map((point) => (
                                    <li key={point} className="border-b border-black/5 pb-3 last:border-b-0 last:pb-0">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mx-6 mt-5 flex flex-wrap gap-2 md:mx-8 lg:mx-0">
                            {blog.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </aside>

                    <div className="px-6 md:px-8 lg:pl-0 lg:pr-10">
                        <p className="text-lg leading-8 text-black/75">{blog.intro}</p>

                        <div className="mt-10 space-y-10">
                            {blog.sections.map((section) => (
                                <section key={section.title}>
                                    <h2 className="text-2xl font-semibold text-black md:text-3xl">{section.title}</h2>
                                    <div className="mt-4 space-y-4">
                                        {section.paragraphs.map((paragraph) => (
                                            <p key={paragraph} className="text-base leading-8 text-black/72">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>

                                    {section.bullets ? (
                                        <ul className="mt-5 space-y-3 rounded-[24px] bg-black/[0.03] p-5 text-base leading-7 text-black/72">
                                            {section.bullets.map((bullet) => (
                                                <li key={bullet} className="flex gap-3">
                                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}

                                    {section.code ? (
                                        <pre className="mt-5 overflow-x-auto rounded-[24px] bg-[#111827] p-5 text-sm leading-7 text-slate-100">
                                            <code>{section.code}</code>
                                        </pre>
                                    ) : null}
                                </section>
                            ))}
                        </div>

                        <div className="mt-12 rounded-[28px] border border-black/10 bg-[#f8f7f2] p-6 md:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
                                Final Thought
                            </p>
                            <p className="mt-4 text-base leading-8 text-black/75">{blog.closing}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-between rounded-[28px] bg-black px-6 py-5 text-white">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/55">Next Read</p>
                        <p className="mt-2 text-lg font-medium">Explore more writing from the archive.</p>
                    </div>
                    <Link href="/blogs" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
                        Browse all
                        <FiArrowUpRight />
                    </Link>
                </div>
            </article>
        </main>
    );
};

export default BlogDetails;
