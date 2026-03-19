
'use client'
import React from 'react';
import { personalProjectsData, corporateProjectsData } from '@/utils/datas/projectsData';
import Link from 'next/link';

const Projects = () => {
    return (
        <div className='home-project-body !bg-white'>
            <div className='mt-8'>
                <h5 className='home-project-title'>PROJECTS</h5>
            </div>
            {/* Personal Projects Section */}
            <h3 className='home-project-subtitle mb-4'>Personal Projects</h3>
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
            {/* Corporate Projects Section */}
            <h3 className='home-project-subtitle mt-12 mb-4'>Corporate Projects</h3>
            <div className='home-project-card-body'>
                {corporateProjectsData?.map((item, idx) => (
                    <Link
                        href={`/projects`}
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
    );
}

export default Projects;