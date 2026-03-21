// 'use client';
import { workData } from "@/utils/datas/workExpData";
import Image from "next/image";

export function generateStaticParams() {
  return workData.map((experience) => ({ expId: experience.slug }));
}

const WorkExperienceDetails = ({ params }) => {
  const { expId } = params;

  const experience = workData.find(exp => exp.slug === expId);

  if (!experience) {
    return <p>Experience not found.</p>;
  }

  return (
    <div className="px-6 md:px-20 py-10">

      {/* Banner */}
      <Image
        src={experience?.bannerUrl}
        alt={experience?.companyName}
        className="w-full h-60 object-cover rounded-xl mb-6"
        width={1200}
        height={400}
      />

      {/* Company Info */}
      {experience?.companyUrl ? (
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 mb-4"
        >
        <Image
          src={experience?.companyLogo}
          alt="logo"
          className="w-14 h-14 rounded-full"
          width={120}
          height={100}
        />
        <div>
          <h1 className="text-2xl font-bold">
            {experience?.companyName}
          </h1>
          <p className="text-gray-500">
            {experience?.location} • {experience?.employmentType}
          </p>
        </div>
      </a>) : (
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={experience?.companyLogo}
              alt="logo"
              className="w-14 h-14 rounded-full"
              width={120}
              height={100}
            />
            <div>
              <h1 className="text-2xl font-bold">
                {experience?.companyName}
              </h1>
              <p className="text-gray-500">
                {experience?.location} • {experience?.employmentType}
              </p>
            </div>
          </div>
      )}

      {/* Duration */}
      <p className="text-sm text-gray-600 mb-4">
        {experience?.startDate} - {experience?.endDate}
      </p>

      {/* About Company */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About Company</h2>
        <p>{experience?.aboutCompany}</p>
      </section>

      {/* Responsibilities */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc ml-6">
          {experience?.responsibilities?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {experience?.techStack?.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {experience?.projects?.map((proj, i) => (
          <div key={i} className="mb-3 border p-3 rounded-lg">
            <h3 className="font-semibold">{proj.name}</h3>
            <p className="text-sm text-gray-600">{proj.description}</p>
          </div>
        ))}
      </section>

      {/* Work Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Work Timeline</h2>
        <ul className="list-disc ml-6">
          {experience?.workProgress?.map((item, i) => (
            <li key={i}>
              {item.title} - <span className="text-gray-500">{item.date}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default WorkExperienceDetails;
