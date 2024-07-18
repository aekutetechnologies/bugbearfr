import React from 'react'
import { RiFilter3Line } from 'react-icons/ri'
import './interview.css'

const data2 = [
    {
        title: "Technical interview",
        description: "Alical Johson",
        status: "Ongoing",
        percentage: 25
    },
    {
        title: "Technical interview",
        description: "Alical Johson",
        status: "Ongoing",
        percentage: 25
    },
    {
        title: "Technical interview",
        description: "Alical Johson",
        status: "Ongoing",
        
    },
]
const Interviews = () => {
    return (
        <>
            <div className='bg-white w-[350px] py-2 rounded p-2 mt-3'>
                <div className='w-full flex justify-center justify-evenly'>
                    <p className='font-bold text-2xl'>Interviews</p>
                    <div className='ml-auto'>
                        <div className='flex max-h-6 px-3 rounded border border-black mr-auto ml-4 mt-1b'><RiFilter3Line className='mt-1' />Filter</div>
                    </div>
                </div>
    
                {data2.map((item, index) => {
                    return (
                        <>
                            <div className='w-full bg-black rounded p-2 mt-2'>
                                <p className='text-white text-xl'>{item.title}</p>
                                <p className='text-white text-sm'>{item.description}</p>
                                <p className='text-white text-[8px] text-white'>Progress</p>
                                <div className='w-full flex justify-evenly gap-1'>
                                    <div className='w-[70%]'>
                                        <p>Date and Time of inteview</p>
                                        <p className='text-[9px] text-white'>May 23,2024,10.00AM</p>
                                        <p className='text-[9px] text-white'>Valid until April 15,2026</p>
                                    </div>
                                    <div className='w-[25%] ml-auto'>
                                    <button className='bg_btn rounded px-1'>Join Interview</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Interviews
