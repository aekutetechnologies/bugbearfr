// import React from 'react'

// const Jobs = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Jobs
import React, { useState } from 'react';

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

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
    };

    const handleCloseNotification = (id: number) => {
        setNotifications(notifications.filter(job => job.id !== id));
    };

    return (
        <div className='w-[85%] bg-white m-auto rounded'>
            <div className=''>
            {notifications.map(job => (
                <div key={job.id} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
                    <div>
                        <h3 className="font-semibold">{job.company}</h3>
                        <p>{job.position}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => handleJobClick(job)}
                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        >
                            View
                        </button>
                        <button
                            onClick={() => handleCloseNotification(job.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ))}
            </div>
            {selectedJob && (
                <div className="col-span-2 bg-white p-4 rounded shadow-md">
                    <h2 className="text-lg font-bold mb-2">{selectedJob.company}</h2>
                    <h3 className="text-md font-semibold mb-2">{selectedJob.position}</h3>
                    <p>{selectedJob.description}</p>
                </div>
            )}

        </div>
    );
};

export default Jobs;

