import React from 'react'
import { workData } from "@/utils/datas/workExpData";
import { FiChevronsRight } from "react-icons/fi";
import Link from 'next/link';

const workCardClass =
    "relative flex items-center w-full min-h-[160px] p-8 bg-card border border-border text-card-foreground rounded-xl shadow-md mb-6 overflow-visible group cursor-pointer transition-colors";

const workCardBgNumClass =
    "pointer-events-none select-none absolute inset-0 flex items-center justify-center font-extrabold text-[16vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] 2xl:text-[6vw] text-foreground/10 z-0 group-hover:text-emerald-400/20 transition-colors";

const HomeWorkExp = () => {
    const filterData = workData?.filter((item)=> item.employmentType === "Full Time")
    return (
        <div className='work-body'>
            <div className='flex justify-between'>
                <h5 className='work-title'>WORK EXPERIENCES</h5>
                <Link href={'/work-experiences'} >
                    <span className='text-foreground flex pointer'><u>See All</u><FiChevronsRight className='my-0 text-2xl' /></span>
                </Link>
            </div>
            <h3 className='work-subtitle'>Companies I worked for</h3>
            <div className='work-card-body mt-5'>
                {filterData?.map((item, idx) => (
                    <Link
                        href={`/work-experience/${item.slug}`}
                        key={item.id}
                        className={workCardClass}
                        tabIndex={0}
                    >
                        <span className={workCardBgNumClass} aria-hidden="true">
                            0{idx + 1}
                        </span>
                        <div className="relative z-10 w-full">
                            <h3 className='exp-title'>{item.companyName}</h3>
                            <p className='text-muted-foreground'><small>{item.location}</small>  <small>{`${item.startDate} - ${item.endDate}`}</small></p>
                            <p className='text-muted-foreground'>{item.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeWorkExp
