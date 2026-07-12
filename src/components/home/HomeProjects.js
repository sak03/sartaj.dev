import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';
import ProjectCard from '@/components/project/ProjectCard';
import { personalProjectsData } from '@/utils/datas/projectsData';

const HomeProjects = () => {
    return (
        <section className='home-project-body featured-project-section'>
            <div className='section-heading-row'>
                <div>
                    <h5 className='home-project-title'>PROJECTS</h5>
                    <h3 className='home-project-subtitle'>Featured builds and case studies</h3>
                </div>
                <Link href='/projects' className='section-link'>
                    See All
                    <FiChevronsRight aria-hidden='true' />
                </Link>
            </div>

            <div className='project-card-grid'>
                {personalProjectsData.slice(0, 3).map((project, index) => (
                    <ProjectCard project={project} featured={index === 0} key={project.id} />
                ))}
            </div>
        </section>
    );
};

export default HomeProjects;
