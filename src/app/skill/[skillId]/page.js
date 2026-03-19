import { frontEndSkills, backEndSkills, databaseSkills } from '@/utils/datas/skillData';

export function generateStaticParams() {
  return [...frontEndSkills, ...backEndSkills, ...databaseSkills].map(skill => ({ skillId: skill.id }));
}

const SkillDetails = ({ params }) => {
  const { skillId } = params;
  const skill = [...frontEndSkills, ...backEndSkills, ...databaseSkills].find(s => s.id === skillId);

  if (!skill) {
    return <p>Skill not found.</p>;
  }

  return (
      <div style={{ height: "70vh" }} className='flex flex-col justify-center items-center'>
          <h1 className="text-2xl font-semibold">{skill.title}</h1>
          <p className="text-lg text-gray-600">{skill.shortDescription}</p>
          <strong className="mt-2 text-red-500 mt-5">This page is under maintenance...</strong>
      </div>
  )
}

export default SkillDetails