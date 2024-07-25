import React from 'react'
import { RiFilter3Line } from "react-icons/ri";
import './dash.css';
import { GoTag } from "react-icons/go";
import imgs from '../image/user.png'
import logo from '../image/bugbear_logo.jpg'
import { PiShareFat } from "react-icons/pi";
import { LuThumbsUp } from "react-icons/lu";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import user_man from './images/user_man.jpeg' 
import Post from '../Post/Post';
import { MdWork } from "react-icons/md";
import Navbar from '../nav/Navbar';
import { Link, Outlet } from 'react-router-dom';
const DashBoard = () => {
    return (
        <>
            <div className='h-14  py-1 bg-[#171717] top-0 flex sticky justify-center justify-evenly gap-56 md:gap-[650px]'>
                <div className=''>
                    <div className='h-[60px] w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                </div>
                <div className='text-2xl text-white mr-5 mt-4 flex gap-3'>
                    {/* <Link to="/login"><span>Login</span></Link>/<Link to='/signupclient'><span>Signup</span></Link> */}
                    <div><Link to='/dashboard/home'><IoHomeSharp/><p className='text-[10px]'>Home</p></Link></div>
                    <div><Link to='/dashboard/message'><FiMessageSquare/><p className='text-[10px]'>Messages</p></Link></div>
                    <div><Link to='/dashboard/jobs'><MdWork/><p className='text-[10px]'>Jobs</p></Link></div>
                    <div><FaRegBell/><p className='text-[10px]'>Notification</p></div>
                    <div><Link to='/dashboard/userprofile'><div className='h-10 w-10  overflow-none'><img src={user_man} alt="" className='h-full w-full rounded-full rounded-[100%]' /></div></Link></div>
                </div>
            </div>
            {/* <div className='flex justify-center gap-5 mt-10'>
                <div className='bg-white w-[270px] rounded-[10px] h-[400px]'>
                    <div className='rounded-t-[10px] bg-gray-200'>
                        <img className='h-12 w-12 m-auto relative top-3 rounded-full' src={imgs}></img>
                    </div>
                </div>
                <Post/>
                <div className='bg-white w-[350px] h-[300px] rounded'>
                    <div className='w-full flex justify-center justify-evenly p-2'>
                        <p className='font-bold text-2xl'>Educational resouces</p>
                        <div className='ml-auto'>
                        <div className='flex max-h-6 px-3 rounded border border-black mr-auto ml-4 mt-1b'><RiFilter3Line className='mt-1' />Filter</div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Outlet />
        </>
    )
}

export default DashBoard