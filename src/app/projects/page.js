import ProjectCard from '@/components/project/ProjectCard';
import { personalProjectsData, corporateProjectsData } from '@/utils/datas/projectsData';

const Projects = () => {
    return (
        <div className='portfolio-page projects-page'>
            <section className='portfolio-hero projects-hero'>
                <div>
                    <p className='portfolio-eyebrow'>PROJECTS</p>
                    <h1 className='portfolio-hero-title'>Selected work with practical UI, frontend architecture, and delivery focus.</h1>
                    <p className='portfolio-hero-text'>
                        These projects show how I think through structure, responsiveness, user flow, and maintainable implementation.
                    </p>
                </div>
                <div className='projects-hero-panel'>
                    <span>4</span>
                    <strong>Case studies</strong>
                    <p>Personal builds and professional work examples.</p>
                </div>
            </section>

            <section className='portfolio-section'>
                <div className='section-heading-row'>
                    <div>
                        <p className='portfolio-eyebrow'>PERSONAL PROJECTS</p>
                        <h2 className='portfolio-section-title'>Built to practice real product patterns.</h2>
                    </div>
                </div>
                <div className='project-card-grid'>
                    {personalProjectsData.map((project, index) => (
                        <ProjectCard project={project} featured={index === 0} key={project.id} />
                    ))}
                </div>
            </section>

            <section className='portfolio-section'>
                <div className='section-heading-row'>
                    <div>
                        <p className='portfolio-eyebrow'>PROFESSIONAL WORK</p>
                        <h2 className='portfolio-section-title'>Production experience from team environments.</h2>
                    </div>
                </div>
                <div className='project-card-grid'>
                    {corporateProjectsData.map((project) => (
                        <ProjectCard project={project} featured key={project.id} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
