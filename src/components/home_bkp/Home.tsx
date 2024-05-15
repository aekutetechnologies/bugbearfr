import React, { useState } from 'react'
import './home.css'
import logo from '../image/bugbear_logo.jpg';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { RxDropdownMenu } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import user from './h-image/user.png';
import user2 from './h-image/user_2.jpg';
import bgimg2 from './h-image/bgimg2.png'
import { CiFacebook } from "react-icons/ci";

import { url } from 'inspector';
import Sliderbar from './Sliderbar';
const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const images = [
    {
      name:'L Rao',
      img:user2,
      title:"[Email is protectd for demo]",
      country:"india",
      complete:1,
  },
  {
    name:'swarup',
    img:user,
    title:"[Email is protectd for demo]",
    country:"india",
    complete:2,
  },
  {
    name:'MD.shahin shahin',
    img:user,
    title:"[Email is protectd for demo]",
    country:"Bangladesh",
    complete:1,
},
{
  name:'pibimic593 pibimic593',
  img:user,
  title:"[Email is protectd for demo]",
  country:"Ukrain",
  complete:1,
},
{
  name:'jade McKenzie',
  img:user,
  title:"[Email is protectd for demo]",
  country:"Nizeria",
  complete:1,
}
]

  return (
    <>
      <div className='bg-gray-300 flex'>
        <div className='flex'>
          <li className='flex'><MdOutlineWifiCalling3 /><span>+44770090030</span></li>
          <li className='flex'><MdOutlineMail /><span>demoemail@gmail.com</span></li>
        </div>
        <div></div>
      </div>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-xl flex font-bold justify-evenly justify-around lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Home
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              FAQs
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Jobs
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Blogs
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
              Contact Us
            </a>
          </div>
          <div className='flex justify-evenly'>
            <button className="inline-flex mx-4 rounded-full items-center font-bold bg_color border-0 py-2 px-4 text-white">
              Login
            </button>
            <button className="inline-flex mx-4 rounded-full items-center font-bold bg_color border-0 py-2 px-4 text-white">
              register
            </button>
          </div>
        </div>
      </nav>
      <div className='home_banner text_color w-full flex justify-center'>
        <div className='w-[98%] m-auto flex my-20 h-[600px]'>
          <div className='w-full'>
            <h1 className='text_color font-semibold text-4xl'>GET STARTED</h1>
            <h1 className='text-black text-5xl font-bold mt-5'>Find the Best Micro Jobs in Our Marketplace.</h1>
            <div className='w-[80%]'>
              <p className='text-gray-300 text-[20px] mt-5'>Using Microlab, You can make your can earn by complete job and also post job for various purpose with no extra effort. Jumpstart your business with a premium Script.</p>
            </div>
            <div className='h-20 w-[96%] mt-5 bg-white rounded-full m-auto shadow-xl shadow-red-500'>
              <div className='w-[90%] m-auto py-4 text-black flex'>
                <select className='w-full bg-white border-none outline-none text-black'>
                  <option value="1">select collection</option>
                  <option value="2">Design illustration</option>
                  <option value="3">Data collection</option>
                  <option value="4">Digital marketing</option>
                  <option value="5">Email marketing</option>
                  <option value="6">Forums</option>
                  <option value="7">HR tarining</option>
                  <option value="8">Lifestyle</option>
                  <option value="9">Music</option>
                  <option value="10">Others</option>
                </select>
                <input type="text" className='outline-none bg-white w-full' placeholder='search' />
                <button className='bg_color w-[50%] rounded-full h-11'>Search</button>
              </div>
              <h1 className='text-black ml-5 mt-11'>Popular Jobs Category</h1>
              <div className='flex w-[80%] justify-evenly mt-5'>
                <button className='border hover:border-yellow-300 px-3 rounded text-black hover:text-yellow-300'>Digital marketing</button>
                <button className='border hover:border-yellow-300 px-3 rounded text-black hover:text-yellow-300'>Writing & Translation</button>
                <button className='border hover:border-yellow-300 px-3 boder-rounded text-black hover:text-yellow-300'>Data Cullection</button>
              </div>
            </div>
          </div>
          <div className='w-full side_img'>
          </div>
        </div>
      </div>
      <div className='w-full mt-10 mb-10'>
        <div className='w-[95%] flex flex-wrap justify-evenly m-auto'>
          <div className='w-[400px] shadow h-[250px] overflow-hidden'>
            <div className='relative right-10 bg-yellow-300 rounded-full h-28 w-28 bottom-10'></div>
            <div className='w-full'><PiBagFill className='m-auto' size={70} color="yellow" /></div>
            <h1 className='text-5xl font-semibold text-center'>175K+</h1>
            <h1 className='text-center'>TOTAL JOS POSTS</h1>
          </div>
          <div className='w-[400px] shadow h-[250px] overflow-hidden'>
            <div className='relative right-10 bg-yellow-300 rounded-full h-28 w-28 bottom-10'></div>
            <RxDropdownMenu className='m-auto' size={70} color="yellow" />
            <h1 className='text-5xl font-semibold text-center'>500M+</h1>
            <h1 className='text-center'>COMPLETED PROJECTS</h1>
          </div>
          <div className='w-[400px] shadow h-[250px] overflow-hidden'>
            <div className='relative right-10 bg-yellow-300 rounded-full h-28 w-28 bottom-10'></div>
            <FaUserTie className='m-auto' size={70} color="yellow" />
            <h1 className='text-5xl font-semibold text-center'>150K+</h1>
            <h1 className='text-center'>REGISTERED FREELANCER</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mb-10">
        <div className='w-full md:w-[50%] bg2_img h-[500px]'>
          <div className='bg_color2 h-full w-full'>
            <div className='w-[95%] m-auto h-full'>
              <h1 className='font-bold text-5xl py-20 text-black'>I Want To Show my Talent Here</h1>
              <p className='text-white text-xl'>Find your jobs by Searching related your job title. Or browse job by Category as per your need and profession</p>
              <div className='w-full text-center py-20'>
                <button className='bg-black rounded text-center text-white px-5 h-11 '>Find a job</button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[50%] bg3_img'>
          <div className='w-[95%] m-auto '>
          <h1 className='font-bold text-5xl py-16 text-black'>I Want To Hire Freelancer for my Project</h1>
          <p className='text-black text-xl'>Find your jobs by Searching related your job title. Or browse job by Category as per your need and profession</p>
          <div className='w-full text-center py-20'>
                <button className='rounded text-center bg_color text-white px-5 h-11 '>Find a job</button>
              </div>
          </div>
        </div>
      </div>
      <div className='py-10'>
        <h1 className='font-bold text-center text-4xl'>Most Job Completed Freelancers</h1>
        <div className='h-2 rounded-full w-[100px] bg_color m-auto my-4'></div>
        <p className='text-gra-400 text-center'>Possimus laborum voluptates vel eveniet, repellat quod fuga, voluptas Molestias reprehenderit est voluptatibus doloremque?</p>
        <Sliderbar images={images}/>
      </div>
    </>

  );
}


export default Home