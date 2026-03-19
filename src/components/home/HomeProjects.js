'use client'
import React from 'react'
import { personalProjectsData } from '@/utils/datas/projectsData'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi'

const HomeProjects = () => {
  
  return (
    <div className='home-project-body'>
      <div className='flex justify-between'>
        <h5 className='home-project-title'>PROJECTS</h5>
        <Link href={'projects'} >
          <span className='text-black flex pointer'><u>See All</u><FiChevronsRight className='my-0 text-2xl' /></span>
        </Link>
      </div>
      <h3 className='home-project-subtitle'>My Free Time Projects</h3>
      <div className='home-project-card-body'>
        {personalProjectsData?.map((item, idx) => (
          <Link
            href={`/project/${item.id}`}
            key={item.id}
            className="relative flex items-center w-full min-h-[160px] p-8 bg-white rounded-xl shadow-md mb-6 overflow-visible group cursor-pointer"
            tabIndex={0}
          >
            {/* Background number using Tailwind utility classes */}
            <span
              className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-extrabold text-[16vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] 2xl:text-[6vw] text-black/10 z-0 group-hover:text-blue-200 transition-colors"
              aria-hidden="true"
            >
              0{idx + 1}
            </span>
            <div className="relative z-10 w-full">
              <h3 className='exp-title'>{item.name}</h3>
              <p className='text-black'><small>{item.location}</small>  <small>{`${item.stDate} - ${item.endDate}`}</small></p>
              <p className='text-black'>{item.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeProjects