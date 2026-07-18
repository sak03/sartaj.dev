import React from 'react';
import { frontEndSkills, backEndSkills, databaseSkills } from '@/utils/datas/skillData';

export const metadata = {
    title: 'Technical Skills',
    description: 'Technical skills of Sartaj Alam across React, Next.js, Laravel, Node.js, databases, responsive UI, and modern web development.',
    alternates: { canonical: '/skills' },
};

const skillCardClass =
    "relative home-skill-card flex items-center min-h-[120px] p-6 bg-card border border-border text-card-foreground rounded-xl shadow-md mb-6 overflow-visible w-full group cursor-pointer transition-colors";

const skillCardBgIconClass =
    "pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[13vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] text-foreground/10 z-0 group-hover:text-emerald-400/20 transition-colors";

const SkillCard = ({ item }) => (
    <a
        href={item.officialUrl}
        key={item.id}
        className={skillCardClass}
        tabIndex={0}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span className={skillCardBgIconClass} aria-hidden="true">
            {item.icon}
        </span>
        <div className="relative z-10 w-full flex flex-col">
            <h3 className='home-skill-title'>{item.title}</h3>
            <p className='text-muted-foreground mt-2'>{item.shortDescription}</p>
        </div>
    </a>
);

const Skills = () => {
    return (
        <div className='home-skill-body'>
            <div className='mt-8'>
                <h5 className='home-skill-title'>SKILLS</h5>
            </div>
            <h3 className='home-skill-subtitle'>I&apos;m Proficient In</h3>

            <h3 className='text-3xl my-3 text-emerald-600 dark:text-emerald-300'>Front End Skills</h3>
            <div className='home-skill-card-body flex flex-col'>
                {frontEndSkills?.map((item) => (
                    <SkillCard item={item} key={item.id} />
                ))}
            </div>

            <h3 className='text-3xl my-3 text-emerald-600 dark:text-emerald-300'>Back End Skills</h3>
            <div className='home-skill-card-body flex flex-col'>
                {backEndSkills?.map((item) => (
                    <SkillCard item={item} key={item.id} />
                ))}
            </div>

            <h3 className='text-3xl my-3 text-emerald-600 dark:text-emerald-300'>Database Skills</h3>
            <div className='home-skill-card-body flex flex-col'>
                {databaseSkills?.map((item) => (
                    <SkillCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
