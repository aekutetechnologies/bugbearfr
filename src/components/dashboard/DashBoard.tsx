import React from 'react'
import { RiFilter3Line } from "react-icons/ri";
import './dash.css';
import imgs from '../image/user.png'
const DashBoard = () => {
    return (
        <>
            <div>

            </div>
            <div className='flex justify-center gap-5'>
                <div className='bg-white w-[300px] rounded-[10px] h-[400px]'>
                    <div className='bg-gray-200'>
                        <img className=''></img>
                    </div>
                </div>
                <div className='w-[600px]'>
                    <div className='w-full bg-white flex justify-evenly rounded h-20 pt-5'>
                        <div className='bg_col flex max-h-6 px-3 rounded mr-auto ml-4'><RiFilter3Line className='mt-1' />Filter</div>
                        <div className='bg_col max-h-6 px-3 rounded mr-4'>Create</div>
                    </div>
                </div>
                <div className='bg-white w-[250px]'>Education resouces</div>
            </div>
        </>
    )
}

export default DashBoard