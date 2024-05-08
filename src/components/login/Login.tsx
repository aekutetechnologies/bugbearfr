import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import Navbar from '../nav/Navbar';
import { Link } from 'react-router-dom';
import logo from '../image/bugbear_logo.jpg'
const Login: React.FC = () => {
    // bg-[#FBFBFB]
    return (
        <>
            <div className='h-14  py-1 bg-[#f6ff08] top-0 sticky'>
                <div>
                    <div className='h-10 w-52 py-1'><img src={logo} alt="" className='h-full w-full'/></div>
                </div>
            </div>
            <div className='w-[30%] m-auto border rounded border-black'>
                <div className='text-center w-[85%] m-auto'>
                    <h1 className='font-semibold py-8 text-3xl'>Login in to Bugbeartfront</h1>
                    <input type="text" placeholder='Username or Email' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' />
                    <input type="text" placeholder='Password' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' />
                    <button className='bg-black rounded-full w-full px-16 py-2'><span className='text-white px-10'>Submit</span></button>
                    <div className='w-full flex justify-center mt-5'>
                        <div className='h-[1px] w-full bg-black mt-3'><span></span></div>
                        <span className='mx-2'>or</span>
                        <div className='h-[1px] w-full bg-black mt-3'><span></span></div>
                    </div>
                    <div className='flex gap-1.5 justify-center m-auto w-[80%] mt-10 mb-10'>
                        <FcGoogle size={30} />
                        <FaFacebookF size={30} color='blue' />
                        <BsGithub size={30} />
                    </div>
                    <div className='w-full flex justify-center mt-3 pb-10'>
                        <div className='h-[1px] w-[18%] bg-black mt-3'><span></span></div>
                        <span className='mx-2 w-full'>Don't have an Bugbeartfront account? </span>
                        <div className='h-[1px] w-[18%] bg-black mt-3'><span></span></div>
                    </div>
                    <Link to='/selectuser'><button className='border border-green-400 rounded-full px-16 py-2 mb-5'><span className='text-greeen px-10 text-green-400'>Sign Up</span></button></Link>
                </div>
            </div>
            <div className='h-[130px] bg-black w-[90%] my-10 rounded m-auto text-center'>
                <p className='text-white py-10'>© 2015 - 2024 Bugbeartfront® Global Inc. • Privacy Policy</p>
            </div>
        </>
    )
}

export default Login