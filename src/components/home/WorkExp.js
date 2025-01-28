import React from 'react'
import { workData } from "@/utils/datas/workExpData"

const WorkExp = () => {
    console.log("workData", workData)
    return (
        <div className='work-body'>
            <h5 className='work-title'>WORK EXPERIENCES</h5>
            <h3 className='work-subtitle'>Companies I worked for</h3>
            <div className='work-card-body'>
                {workData?.map((item) => (
                    <div className='work-card' key={item.id}>
                        <h1 className='exp-count my-0'>{item.num}</h1>
                        <h3 className='exp-title'>{item.companyName}</h3>
                        <p className='text-black'><small>{item.location}</small>  <small>{`${item.stDate} - ${item.endDate}`}</small></p>
                        <p className='text-black'>{item.shortDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExp