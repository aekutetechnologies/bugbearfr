import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
interface ModelProps {
    show: boolean;
    setShow: (show: boolean) => void;
  }
const Model: React.FC<ModelProps> = ({show,setShow}) => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  function setClose(){
    setShow(false)
  }
  return (
    <>
      <div className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center item-center'>
        <div className='w-[25%] mt-52 shadow h-[250px] rounded-xl bg-black text-center'>
           <FaRegWindowClose className='ml-auto mr-5 mt-2' color='yellow' onClick={setClose}/> 
          <p className='text-white text-xl mt-5 mb-5'>Enter Your Email</p>
          {/* <p className='text-black mt-5 text-[15px] mb-5'>Enter Varification Code</p> */}
          <div className='w-[80%] m-auto jstify-evenly justify-around mt-5 mb-5 justify-center item-center'>  
          <input type="text" className='w-full outline-none text-black h-11 border border-white rounded' placeholder='Email' />
          </div>
          <div className='w-[80%] m-auto mt-10'>
          <button className='w-full h-11 rounded-full text-white bg-yellow-400 p-2'><span className='py-1'>Submit</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Model