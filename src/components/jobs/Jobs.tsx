// import React from 'react'

// const Jobs = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Jobs
import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import './jobs.css'
type Job = {
    id: number;
    company: string;
    position: string;
    description: string;
};

const jobs: Job[] = [
    { id: 1, company: 'Company A', position: 'Developer', description: 'Job description for Developer at Company A' },
    { id: 2, company: 'Company B', position: 'Designer', description: 'Job description for Designer at Company B' },
    { id: 3, company: 'Company C', position: 'Manager', description: 'Job description for Manager at Company C' },
];

const Jobs: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [notifications, setNotifications] = useState<Job[]>(jobs);
    const [topJobLine, setTopJobLine] = useState<boolean>(true)
    const [appliedLine, setAppliedLine] = useState<boolean>(false)

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
    };

    const handleCloseNotification = (id: number) => {
        setNotifications(notifications.filter(job => job.id !== id));
    };
    const setBorderOfTopJob = () => {
        setAppliedLine(false)
        setTopJobLine(true)
    }
    const setBorderOfApplied = () => {
        setTopJobLine(false)
        setAppliedLine(true)
    }

    return (
        <div className='w-[85%] bg-white m-auto rounded mt-10'>
            <div className='w-full flex'>
                <div className='w-[30%] border-r jobs_list'>
                    <div className='w-full flex'>
                        <div className={topJobLine ? 'border-b-2 border-black w-[50%]' : 'w-[50%]'} onClick={setBorderOfTopJob}>
                            <h1 className='text-center font-bold text-xl'>
                                Top jobs
                            </h1>
                        </div>
                        <div className={appliedLine ? 'border-b-2 border-black w-[50%]' : 'w-[50%]'} onClick={setBorderOfApplied}>
                            <h1 className='text-center font-bold text-xl'>
                                Applied
                            </h1>
                        </div>
                    </div>
                    {topJobLine && <div className=''>
                        {notifications.map(job => (
                            <div key={job.id} className="items-center justify-between bg-gray-100 p-2 border-b" >
                                <div className='w-full text-left' >
                                    <MdClose size={25} className='ml-auto' onClick={() => handleCloseNotification(job.id)} />
                                </div>
                                <div onClick={() => handleJobClick(job)}>
                                    <h3 className="font-semibold">{job.company}</h3>
                                    <p>{job.position}</p>
                                </div>

                            </div>
                        ))}
                    </div>}
                    {appliedLine && <div>
                        <p className='text-xl font-medium'>No Applications</p>
                        </div>}
                    
                </div>
                <div className='w-[70%]'>
                {selectedJob && (
                        <div className="col-span-2 bg-white p-4 rounded shadow-md">
                            <h2 className="text-lg font-bold mb-2">{selectedJob.company}</h2>
                            <h3 className="text-md font-semibold mb-2">{selectedJob.position}</h3>
                            <p>{selectedJob.description}</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Jobs;

