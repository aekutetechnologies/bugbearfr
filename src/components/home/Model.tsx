import { CheckIcon } from 'lucide-react';
import React, { ChangeEvent } from 'react'
import { useState, useRef, useEffect  } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import './home.css'
interface ModelProps {
    show: boolean;
    setShow: (show: boolean) => void;
  }
const Model: React.FC<ModelProps> = ({show,setShow}) => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const modalRef = useRef<HTMLDivElement>(null);
  function setClose(){
    setShow(false)
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setClose();
    }
  };

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, []);
  return (
    <>
      <div className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center item-center'>
        <div ref={modalRef} className='w-[25%] mt-52 shadow h-[470px] rounded-xl bg-black text-center'>
          <div className="w-[80%] m-auto flex mt-10">
            <CheckIcon/><span className=''>10% off your next purchase</span>
          </div>
          <div className="w-[80%] m-auto mt-2 flex">
            <CheckIcon/><span className=''>Email-only deals</span>
          </div>
          <div className="w-[80%] m-auto mt-2 flex">
            <CheckIcon/><span>Invites to spacial events</span>
          </div>
          <div className="w-[80%] m-auto mt-1 flex">
            <CheckIcon/><span>Product tips and case studies</span>
          </div>
          <div className="w-[80%] m-auto mt-2 flex">
            <CheckIcon/><span>Notification on new arrivals</span>
          </div>
          {/* <p className='text-black mt-5 text-[15px] mb-5'>Enter Varification Code</p> */}
          <div className='w-[80%] m-auto jstify-evenly justify-around mt-14 justify-center item-center'>  
          <input type="text" className='w-full bg-gray-800 w-full border-gray-500 border-[1px] h-10 rounded p-2' placeholder='First Name' />
          <input type="text" className='w-full bg-gray-800 w-full border-gray-500 border-[1px] h-10 rounded p-2 mt-7' placeholder='Your email address' />
          </div>
          <div className='w-[80%] m-auto mt-7'>
          <button className='w-full h-11 rounded-full text-white bg-yellow-400 p-2'><span className='py-1'>Get Early Access</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Model