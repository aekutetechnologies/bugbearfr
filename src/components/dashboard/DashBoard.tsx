import React from 'react'
import { RiFilter3Line } from "react-icons/ri";
import './dash.css';
import { GoTag } from "react-icons/go";
import imgs from '../image/user.png'
import { PiShareFat } from "react-icons/pi";
import { LuThumbsUp } from "react-icons/lu";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { IoChatbubbleOutline } from "react-icons/io5";
import Post from '../Post/Post';
const DashBoard = () => {
    return (
        <>
            <div>
            </div>
            <div className='flex justify-center gap-5'>
                <div className='bg-white w-[300px] rounded-[10px] h-[400px]'>
                    <div className='rounded-t-[10px] bg-gray-200'>
                        <img className='h-12 w-12 m-auto relative top-3 rounded-full' src={imgs}></img>
                    </div>
                </div>
                <Post/>
                <div className='bg-white w-[250px] rounded'>Education resouces</div>
            </div>
        </>
    )
}

export default DashBoard