import { frontEndSkills } from '@/utils/datas/skillData'
import Image from 'next/image'

const Skills = () => {
    console.log(frontEndSkills)
    return (
        <div className='home-skill-body'>
            <div className='flex justify-between'>
                <h5 className='home-skill-title'>SKILLS</h5>
            </div>
            <h3 className='home-skill-subtitle'>I'm Proficient In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {frontEndSkills.map((item) => (
                    <div className='home-skill-card' key={item.id}>
                        <div className='home-skill-card'>
                            <span className="text-5xl">
                                {item.icon}
                            </span>
                            <h3 className='home-skill-title'>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills