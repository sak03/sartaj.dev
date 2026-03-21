'use client'
import React from 'react'
import { blogsData } from '@/utils/datas/blogsData'
import BlogCard from '@/components/blog/BlogCard'

const Blogs = () => {
    return (
        <main className='px-3 py-6 md:px-5 md:py-12'>
            <section className='mx-auto max-w-6xl'>
                <div className='max-w-3xl'>
                    <p className='text-xs font-semibold uppercase tracking-[0.35em] text-black/45'>Blog Archive</p>
                    <h1 className='mt-4 text-4xl font-semibold leading-tight text-black md:text-6xl'>
                        Writing about frontend systems, product thinking, and cleaner builds.
                    </h1>
                    <p className='mt-5 max-w-2xl text-base leading-8 text-black/70'>
                        These posts are focused on practical learning. The goal is not just to explain concepts, but to make them easier to apply in real projects.
                    </p>
                </div>

                <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                    {blogsData.map((item) => (
                        <BlogCard blog={item} key={item.id} compact />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Blogs
