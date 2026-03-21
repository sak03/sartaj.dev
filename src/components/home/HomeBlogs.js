'use client'
import React from 'react'
import { blogsData } from '@/utils/datas/blogsData'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi'
import BlogCard from '@/components/blog/BlogCard'

const HomeBlogs = () => {
    return (
        <section className='home-project-body bg-[#f6f4ee]'>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <h5 className='home-project-title'>BLOGS</h5>
                </div>
                <Link href={'/blogs'} className='text-black flex pointer unddrline'>
                    See All
                    <FiChevronsRight className='my-0 text-2xl' />
                </Link>
            </div>
            <h3 className='home-project-subtitle'>My Latest Blogs</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {blogsData.slice(0, 3).map((item) => (
                    <BlogCard blog={item} key={item.id} compact />
                ))}
            </div>

            <div className='mt-6 md:hidden'>
                <Link href={'/blogs'} className='inline-flex items-center gap-2 text-sm font-medium text-black border border-black/10 rounded-full px-4 py-2'>
                    See All
                    <FiChevronsRight className='text-lg' />
                </Link>
            </div>
        </section>
    )
}

export default HomeBlogs
