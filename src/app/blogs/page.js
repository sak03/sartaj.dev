'use client'
import React from 'react'
import { blogsData } from '@/utils/datas/blogsData'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi'

const Blogs = () => {
    return (
        <div className='home-project-body !bg-white'>
            <div className='mt-8'>
                <h5 className='home-project-title'>BLOGS</h5>
            </div>
            <h3 className='home-project-subtitle'>My Latest Blogs</h3>
            <div className='home-project-card-body'>
                {blogsData.map((item, idx) => (
                    <Link
                        href={`/blog/${item.id}`}
                        key={item.id}
                        className="relative flex items-center w-full min-h-[160px] p-8 bg-white rounded-xl shadow-md mb-6 overflow-visible group"
                    >
                        {/* Background number */}
                        <span
                            className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-extrabold text-[16vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] 2xl:text-[6vw] text-black/10 z-0 group-hover:text-blue-200 transition-colors"
                            aria-hidden="true"
                        >
                            0{idx + 1}
                        </span>
                        <div className="relative z-10 w-full">
                            <h3 className="exp-title mb-1">{item.title}</h3>
                            <p className="text-black text-xs mb-1">{item.date} | {item.author}</p>
                            <p className="text-black text-sm">{item.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blogs