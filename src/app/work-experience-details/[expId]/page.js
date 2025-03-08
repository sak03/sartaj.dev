import { workData } from "@/utils/datas/workExpData";

export function generateStaticParams() {
  return workData.map(exp => ({ expId: exp.id }));
}

const WorkExperienceDetails = ({ params }) => {
  const { expId } = params;
  const experience = workData.find(exp => exp.id === expId);

  if (!experience) {
    return <p>Experience not found.</p>;
  }

  return (
    <div style={{ height: "70vh" }} className='flex flex-col justify-center items-center text-center'>
      <h1 className="text-2xl font-semibold">{experience.companyName}</h1>
      <p className="text-lg text-gray-600">{experience.shortDescription}</p>
      <strong className="mt-2 text-red-500 mt-5">This page is under maintenance...</strong>
    </div>
  )
}

export default WorkExperienceDetails;