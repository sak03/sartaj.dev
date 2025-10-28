
import React from 'react'
import { workData } from "@/utils/datas/workExpData";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div className='work-body'>
      <div className='flex justify-between'>
        <h5 className='work-title'>WORK EXPERIENCES</h5>
      </div>
      <h3 className='work-subtitle'>Companies I worked for</h3>
      <div className='work-card-body'>
        {workData?.map((item, idx) => (
          <div className='work-card' key={item.id}>
            <h1 className='exp-count my-0'>0{idx + 1}</h1>
            <div className='flex'>
              <h3 className='exp-title'>{item.companyName}</h3>
              <p className='mt-3 ml-3 pointer'>{item?.companyLink ? <a href={item?.companyLink} target='_blank' alt={item.companyName + ' logo'}><FaExternalLinkAlt /></a> : ""}</p>
            </div>
            <p className='text-black'><small>{item.location}</small>  <small>{`${item.stDate} - ${item.endDate}`}</small></p>
            <p className="text-black">
              {item.shortDescription?.length > 80
                ? `${item.shortDescription.slice(0, 80)}...`
                : item.shortDescription}
            </p>
            <div>
              <a className='flex pointer'>
              <p className="">Get full details</p>
              <FaExternalLinkAlt className='text-sm mt-1 ml-2'/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience