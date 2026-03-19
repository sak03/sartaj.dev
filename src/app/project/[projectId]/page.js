import { personalProjectsData, corporateProjectsData } from '@/utils/datas/projectsData';

export function generateStaticParams() {
  return personalProjectsData.concat(corporateProjectsData).map(project => ({ projectId: project.id }));
}

const ProjectDetails = ({ params }) => {
    const { projectId } = params;
    const project = [...personalProjectsData, ...corporateProjectsData].find(p => p.id === projectId);

    if (!project) {
        return <p>Project not found.</p>;
    }
  return (
      <div style={{ height: "70vh" }} className='flex justify-center flex-col items-center'>
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          <p className="text-lg text-gray-600">{project.shortDescription}</p>
          <strong className="mt-2 text-red-500 mt-5">This page is under maintenance...</strong>
      </div>
  )
}

export default ProjectDetails