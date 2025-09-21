import React from 'react'
import { frontEndSkills } from '@/utils/datas/skillData'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi'
import Image from 'next/image'

const HomeSkills = () => {
    return (
        <div className='home-skill-body'>

            <div className='flex justify-between'>
                <h5 className='home-skill-title'>SKILLS</h5>
                <Link href={'skills'} >
                    <span className='text-black flex pointer'><u>See All</u><FiChevronsRight className='my-0 text-2xl' /></span>
                </Link>
            </div>
            <h3 className='home-skill-subtitle'>I'm Proficient In</h3>
            <div className='home-skill-card-body'>
                {frontEndSkills?.slice(0,5)?.map((item) => {
                    const Icon = item.icon;
                    return(
                    <div className='home-skill-card' key={item.id}>
                        <div className='home-skill-card'>
                            <span className={`${item?.iconColor} text-3xl`}>
                                {item.icon}
                        </span>
                        <h3 className='home-skill-title'>{item.title}</h3>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default HomeSkills