import React from 'react'
import { RiFilter3Line } from 'react-icons/ri'
import './education.css'
const data1 = [
    {
        btn: "Study Materials"
    },
    {
        btn: "Video Courses"
    },
    {
        btn: "Quizzes"
    },
    {
        btn: "Labs"
    },
    {
        btn: "Tests"
    }

]
const data2 = [
    {
        title: "Intro to Cybersecurity",
        description: "A comprehensiveguide to cybersecurity basics..",
        status: "Ongoing",
        percentage: 25
    },
    {
        title: "Intro to Cybersecurity",
        description: "A comprehensiveguide to cybersecurity basics..",
        status: "Ongoing",
        percentage: 25
    },
    {
        title: "Intro to Cybersecurity",
        description: "A comprehensiveguide to cybersecurity basics..",
        status: "Ongoing",
        percentage: 75
    },
]
const Educational = () => {
    return (
        <>
            <div className='bg-white w-[350px] py-2 rounded p-2'>
                <div className='w-full flex justify-center justify-evenly'>
                    <p className='font-bold text-2xl'>Educational resouces</p>
                    <div className='ml-auto'>
                        <div className='flex max-h-6 px-3 rounded border border-black mr-auto ml-4 mt-1b'><RiFilter3Line className='mt-1' />Filter</div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-1 mt-2'>
                    {
                        data1.map((item, index) => {
                            return (
                                <>
                                    <button className='rounded-full px-2 bg-gray-300 text-[10px] py-1'>{item.btn}</button>
                                </>
                            )
                        })
                    }
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
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                            <div className={`bg_btn h-2.5 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                                            <p className='text-white text-[8px]'>Status:{item.status}</p>
                                        </div>
                                        
                                    </div>
                                    <div className='w-[25%] ml-auto'>
                                    <button className='bg_btn rounded px-1'>Contnue</button>
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

export default Educational
