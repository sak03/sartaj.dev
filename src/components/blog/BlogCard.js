import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const BlogCard = ({ blog, compact = false }) => {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className={`group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] ${compact ? '' : ''}`}
        >
            <div
                className={`relative flex flex-col justify-between ${compact ? 'min-h-[148px] p-5' : 'min-h-[160px] p-5 md:p-6'}`}
                style={{
                    background: `linear-gradient(135deg, ${blog.coverPalette.from}, ${blog.coverPalette.to})`,
                }}
            >
                <div className='relative z-10'>
                    <h3 className={`mt-3 max-w-[14rem] font-semibold leading-tight text-white ${compact ? 'text-xl' : 'text-2xl'}`}>
                        {blog.coverLabel}
                    </h3>
                </div>
                <p className='text-xs uppercase tracking-[0.18em] text-white/75'>{blog.readTime}</p>
                <div
                    className={`pointer-events-none absolute font-black leading-none opacity-20 ${compact ? '-bottom-7 -right-2 text-[4.5rem]' : '-bottom-8 right-0 text-[5rem]'}`}
                    style={{ color: blog.coverPalette.accent }}
                    aria-hidden='true'
                >
                    {blog.id.replace('blog', '')}
                </div>
            </div>

            <div className={`${compact ? 'p-5' : 'p-5 md:p-6'}`}>
                <div className='flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-black/45'>
                    <span>{blog.date}</span>
                    <span>{blog.author}</span>
                </div>
                <h4 className={`mt-3 font-semibold leading-snug text-black ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
                    {blog.title}
                </h4>
                <p className={`mt-3 text-black/70 ${compact ? 'line-clamp-3 text-sm leading-6' : 'line-clamp-3 text-sm md:text-base leading-7'}`}>
                    {blog.shortDescription}
                </p>
            </div>
        </Link>
    )
}

export default BlogCard
