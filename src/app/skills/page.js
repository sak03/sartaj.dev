import { frontEndSkills } from '@/utils/datas/skillData'
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <div className='home-skill-body'>
            <div className='flex justify-between'>
                <h5 className='home-skill-title'>SKILLS</h5>
            </div>
            <h3 className='home-skill-subtitle'>I'm Proficient In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {frontEndSkills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </div>
    )
}

export default Skills