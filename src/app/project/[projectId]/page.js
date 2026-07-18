import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { personalProjectsData, corporateProjectsData } from '@/utils/datas/projectsData';
import { SITE_URL } from '@/lib/site';

const allProjects = [...personalProjectsData, ...corporateProjectsData];

const getProject = (projectId) => allProjects.find((project) => project.id === projectId || project.slug === projectId);

export function generateStaticParams() {
    return allProjects.map((project) => ({ projectId: project.id }));
}

export function generateMetadata({ params }) {
    const project = getProject(params.projectId);

    if (!project) {
        return {
            title: 'Project Not Found | Sartaj Alam',
            robots: { index: false, follow: false },
        };
    }

    return {
        title: `${project.name} — Project Case Study`,
        description: project.shortDescription,
        alternates: { canonical: `${SITE_URL}/project/${project.id}` },
        openGraph: {
            title: `${project.name} — Project Case Study`,
            description: project.shortDescription,
            url: `${SITE_URL}/project/${project.id}`,
            type: 'article',
        },
    };
}

const ProjectDetails = ({ params }) => {
    const project = getProject(params.projectId);

    if (!project) {
        return (
            <div className='portfolio-page'>
                <p className='portfolio-body-text'>Project not found.</p>
                <Link href='/projects' className='portfolio-btn portfolio-btn-primary mt-5'>Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className='portfolio-page project-detail-page'>
            <Link href='/projects' className='project-back-link'>
                <FiArrowLeft aria-hidden='true' />
                Back to projects
            </Link>

            <section className='project-detail-hero'>
                <div>
                    <p className='portfolio-eyebrow'>{project.type}</p>
                    <h1 className='portfolio-hero-title'>{project.name}</h1>
                    <p className='portfolio-hero-text'>{project.longDescription}</p>
                    <div className='portfolio-actions'>
                        {project.liveUrl ? (
                            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='portfolio-btn portfolio-btn-primary'>
                                Live Preview
                                <FiArrowUpRight aria-hidden='true' />
                            </a>
                        ) : null}
                        {project.repoUrl ? (
                            <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='portfolio-btn portfolio-btn-secondary'>
                                Repository
                                <FiGithub aria-hidden='true' />
                            </a>
                        ) : null}
                        <Link href='/contact' className='portfolio-btn portfolio-btn-secondary'>Discuss Similar Work</Link>
                    </div>
                </div>

                <div className='project-detail-preview'>
                    {project.imgUrl ? (
                        <Image
                            src={project.imgUrl}
                            alt={`${project.name} screenshot`}
                            width={900}
                            height={620}
                            className='project-detail-image'
                            priority
                        />
                    ) : (
                        <div className='project-detail-fallback' aria-hidden='true'>
                            {project.name}
                        </div>
                    )}
                </div>
            </section>

            <section className='project-metric-grid'>
                {project.metrics.map((metric) => (
                    <div className='project-metric-card' key={metric.label}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                    </div>
                ))}
            </section>

            <section className='project-story-grid'>
                <article className='project-story-card'>
                    <p className='portfolio-eyebrow'>PROBLEM</p>
                    <p>{project.problem}</p>
                </article>
                <article className='project-story-card'>
                    <p className='portfolio-eyebrow'>SOLUTION</p>
                    <p>{project.solution}</p>
                </article>
                <article className='project-story-card'>
                    <p className='portfolio-eyebrow'>OUTCOME</p>
                    <p>{project.outcome}</p>
                </article>
            </section>

            <section className='portfolio-section project-detail-grid'>
                <div>
                    <p className='portfolio-eyebrow'>FEATURES</p>
                    <h2 className='portfolio-section-title'>What the project covers</h2>
                    <ul className='project-check-list'>
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className='portfolio-eyebrow'>MY ROLE</p>
                    <h2 className='portfolio-section-title'>{project.role}</h2>
                    <ul className='project-check-list'>
                        {project.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='portfolio-section project-tech-section'>
                <p className='portfolio-eyebrow'>TECH STACK</p>
                <div className='project-tech-list'>
                    {project.techStack.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
