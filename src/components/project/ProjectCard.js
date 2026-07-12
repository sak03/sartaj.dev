import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project, featured = false }) => {
    return (
        <Link href={`/project/${project.id}`} className={`project-card ${featured ? 'project-card-featured' : ''}`}>
            <div className='project-card-media'>
                {project.imgUrl ? (
                    <Image
                        src={project.imgUrl}
                        alt={`${project.name} preview`}
                        width={760}
                        height={480}
                        className='project-card-image'
                    />
                ) : (
                    <div className='project-card-fallback' aria-hidden='true'>
                        {project.name.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                    </div>
                )}
                <span className='project-card-status'>{project.status}</span>
            </div>
            <div className='project-card-content'>
                <div className='project-card-meta'>
                    <span>{project.type}</span>
                    <span>{project.stDate} - {project.endDate}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.shortDescription}</p>
                <div className='project-card-stack'>
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
                <span className='project-card-link'>
                    View case study
                    <FiArrowUpRight aria-hidden='true' />
                </span>
            </div>
        </Link>
    );
};

export default ProjectCard;
