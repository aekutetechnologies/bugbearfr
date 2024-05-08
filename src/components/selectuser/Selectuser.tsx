import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { useState } from 'react';
const Selectuser = () => {
  const [cilent,setClient]=useState<boolean>(false);
  const [freelancer,setFreelancer]=useState<boolean>(false);
  const [pathstr,setPathstr]=useState<string>("");
  const[strbtn,setSterbtn] = useState<string>('');
  const handleclient=()=>{
    setClient(true);
    setFreelancer(false);
    setSterbtn("Client")
    setPathstr("/signupclient")
  }
  const handlefreelance=()=>{
    setFreelancer(true);
    setClient(false);
    setSterbtn("Freelancer")
    setPathstr("/signupfreelancer")
  }
  return (
    <>
    <h1 className='text-center text-3xl font-semibold mt-10 mb-10'>Join as a client or freelancer</h1>
    <div className='w-[45%] flex justify-center justify-evenly m-auto'>
        <div className={cilent?'w-[280px] border-[#65a30d] border-2 rounded':'w-[280px] border-2 rounded '} onClick={handleclient}>
          <div className='w-full flex justify-center mt-4 py-5'>
           <FaUserTie size={25} className="ml-2"/> 
          <div className={cilent?'h-7 w-7 rounded-full border-2 ml-auto mr-4 bg-[#65a30d]':'h-7 w-7 rounded-full border-2 ml-auto mr-4'}></div>
          </div>
            <p className='text-2xl font-semibold ml-2 mb-4'>I'm a client, hiring for a project</p>  
        </div>
        <div className={freelancer?'w-[280px] border-[#65a30d] border-2 rounded':'w-[280px] border-2 rounded '} onClick={handlefreelance}>
        <div className='w-full flex justify-center mt-4 py-5'>
           <FaUserShield size={25} className="ml-2"/> 
          <div className={freelancer?'h-7 w-7 rounded-full border-2 ml-auto mr-4 bg-[#65a30d]':'h-7 w-7 rounded-full border-2 ml-auto mr-4'}></div>
          </div>
            <p className='text-2xl font-semibold ml-2 mb-4'>i'm a freelancer, looking for work</p>
        </div>
    </div>
    <div className='w-full text-center'>
    <Link to={pathstr}>{pathstr.length>0?<button className=' px-11 bg-[#65a30d] py-2 rounded-full mt-10'>Join as {strbtn}</button>:<button className=' px-11 bg-gray-400 py-2 rounded-full mt-10'>Join</button>}</Link>
    <p className='mt-4'>Already have an account? <Link to="/login" className='text-[#65a30d] font-semibold'>Login</Link></p>
    </div>
    </>
  )
}

export default Selectuser