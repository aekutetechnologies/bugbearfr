import React from 'react'
import { RiFilter3Line } from 'react-icons/ri'
import Post from '../Post/Post'
import imgs from '../image/user.png'
import Educational from '../educational/Educational'
import Certification from '../certification/Certification'
import Interviews from '../Interviews/Interviews'

const DashboardHome = () => {
  return (
    <>
    <div className='flex justify-center gap-5 mt-10'>
                <div className='bg-white w-[270px] rounded-[10px] h-[400px]'>
                    <div className='rounded-t-[10px] bg-gray-200'>
                        <img className='h-12 w-12 m-auto relative top-3 rounded-full' src={imgs}></img>
                    </div>
                </div>
                <Post/>
                <div className=''>
                <Educational/>
                <Certification/>
                <Interviews/>
                </div>
            </div>
    </>
  )
}

export default DashboardHome