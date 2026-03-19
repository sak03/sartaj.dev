import React from 'react';
import { frontEndSkills, backEndSkills, databaseSkills } from '@/utils/datas/skillData';
import Link from 'next/link';

const Skills = () => {
    return (
        <div className='home-skill-body !bg-white'>
            <div className='mt-8'>
                <h5 className='home-skill-title'>SKILLS</h5>
            </div>
            <h3 className='home-skill-subtitle'>I'm Proficient In</h3>
            {/* Front End Skills */}
            <h3 className='text-3xl my-3 text-blue-300'>Front End Skills</h3>
            <div className='home-skill-card-body flex flex-col'>
                {frontEndSkills?.map((item, idx) => (
                    <Link
                        href={'/skills'}
                        key={item.id}
                        className="relative home-skill-card flex items-center min-h-[120px] p-6 bg-white rounded-xl shadow-md mb-6 overflow-visible w-full group cursor-pointer"
                        tabIndex={0}
                    >
                        {/* Background icon */}
                        <span className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[13vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] text-black/10 z-0 group-hover:text-blue-200 transition-colors" aria-hidden="true">
                            {item.icon}
                        </span>
                        <div className="relative z-10 w-full flex flex-col">
                            <h3 className='home-skill-title'>{item.title}</h3>
                            <p className='text-black mt-2'>{item.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Back End Skills */}
            <h3 className='text-3xl my-3 text-blue-300'>Back End Skills</h3>
            <div className='home-skill-card-body flex flex-col'>
                {backEndSkills?.map((item, idx) => (
                    <Link
                        href={'/skills'}
                        key={item.id}
                        className="relative home-skill-card flex items-center min-h-[120px] p-6 bg-white rounded-xl shadow-md mb-6 overflow-visible w-full group cursor-pointer"
                        tabIndex={0}
                    >
                        {/* Background icon */}
                        <span className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[13vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] text-black/10 z-0 group-hover:text-blue-200 transition-colors" aria-hidden="true">
                            {item.icon}
                        </span>
                        <div className="relative z-10 w-full flex flex-col">
                            <h3 className='home-skill-title'>{item.title}</h3>
                            <p className='text-black mt-2'>{item.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Database Skills */}
            <h3 className='text-3xl my-3 text-blue-300'>Database Skills</h3>
            <div className='home-skill-card-body flex flex-col'>
                {databaseSkills?.map((item, idx) => (
                    <Link
                        href={'/skills'}
                        key={item.id}
                        className="relative home-skill-card flex items-center min-h-[120px] p-6 bg-white rounded-xl shadow-md mb-6 overflow-visible w-full group cursor-pointer"
                        tabIndex={0}
                    >
                        {/* Background icon */}
                        <span className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[13vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] text-black/10 z-0 group-hover:text-blue-200 transition-colors" aria-hidden="true">
                            {item.icon}
                        </span>
                        <div className="relative z-10 w-full flex flex-col">
                            <h3 className='home-skill-title'>{item.title}</h3>
                            <p className='text-black mt-2'>{item.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Skills;