import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { workData } from "@/utils/datas/workExpData";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return workData.map((experience) => ({ expId: experience.slug }));
}

export function generateMetadata({ params }) {
  const experience = workData.find((item) => item.slug === params.expId);

  if (!experience) {
    return {
      title: "Experience Not Found | Sartaj Alam",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${experience.companyName} — Work Experience`,
    description: experience.shortDescription,
    alternates: { canonical: `${SITE_URL}/work-experience/${experience.slug}` },
    openGraph: {
      title: `${experience.companyName} — Work Experience`,
      description: experience.shortDescription,
      url: `${SITE_URL}/work-experience/${experience.slug}`,
      type: "profile",
    },
  };
}

const WorkExperienceDetails = ({ params }) => {
  const experience = workData.find((item) => item.slug === params.expId);

  if (!experience) {
    return (
      <div className="portfolio-page">
        <p className="portfolio-body-text">Experience not found.</p>
        <Link href="/work-experiences" className="portfolio-btn portfolio-btn-primary mt-5">Back to Experience</Link>
      </div>
    );
  }

  return (
    <div className="portfolio-page experience-detail-page">
      <Link href="/work-experiences" className="project-back-link">
        <FiArrowLeft aria-hidden="true" />
        Back to experience
      </Link>

      <section className="experience-hero">
        <div className="experience-banner">
          <Image
            src={experience.bannerUrl}
            alt={`${experience.companyName} banner`}
            width={1200}
            height={520}
            className="experience-banner-image"
            priority
          />
        </div>
        <div className="experience-summary-card">
          <Image
            src={experience.companyLogo}
            alt={`${experience.companyName} logo`}
            width={96}
            height={96}
            className="experience-logo"
          />
          <p className="portfolio-eyebrow">{experience.employmentType}</p>
          <h1>{experience.companyName}</h1>
          <p>{experience.shortDescription}</p>
          <div className="experience-meta-list">
            <span>{experience.location}</span>
            <span>{experience.startDate} - {experience.endDate}</span>
          </div>
          {experience.companyUrl ? (
            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
              Company website
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </section>

      <section className="portfolio-section project-story-grid">
        <article className="project-story-card">
          <p className="portfolio-eyebrow">COMPANY</p>
          <p>{experience.aboutCompany}</p>
        </article>
        <article className="project-story-card">
          <p className="portfolio-eyebrow">IMPACT</p>
          <p>{experience.achievements?.join(". ")}.</p>
        </article>
        <article className="project-story-card">
          <p className="portfolio-eyebrow">ROLE</p>
          <p>Built, maintained, optimized, and integrated frontend/full-stack modules in production-focused workflows.</p>
        </article>
      </section>

      <section className="portfolio-section project-detail-grid">
        <div>
          <p className="portfolio-eyebrow">RESPONSIBILITIES</p>
          <h2 className="portfolio-section-title">What I owned</h2>
          <ul className="project-check-list">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="portfolio-eyebrow">PROJECTS</p>
          <h2 className="portfolio-section-title">Work delivered</h2>
          <div className="experience-project-list">
            {experience.projects.map((project) => (
              <article key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-card-stack">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section project-tech-section">
        <p className="portfolio-eyebrow">TECH STACK</p>
        <div className="project-tech-list">
          {experience.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkExperienceDetails;
