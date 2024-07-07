import React, { useState } from 'react'
import user from '../image/user_man.jpeg'
import { MdOutlineEdit } from "react-icons/md";
import './user.css'
const UserProfile = () => {
    const [show1, setShow1] = useState<Boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };
    //   const handleShowModal1 = () => {
    //     setShowModal1(true);
    //   };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    //   const handleCloseModal1 = () => {
    //     setShowModal1(false);
    //   };
    const ShowModel = () => {
        setShow1(true)
    }
    return (
        <>
            <div>
                <div className='w-[95%] h-72 bg-white rounded-[10px] m-auto flex justify-evenly'>
                    <div className='flex gap-1 w-[90%] mt-6'>
                        <div className='w-52 h-52 rounded'>
                            <img src={user} alt="" className='h-full w-full rounded' />
                        </div>
                        <div>
                            <h1 className='text-5xl'>Mahab Boz</h1>
                            <p className='text-xl mt-1'>UI/UX Designer</p>
                            <p className='text-gray-400 text-base mt-1'>New York,United States</p>
                            <p className='font-medium mt-1'>10 connectinos</p>
                            <p className='mt-1'>152 followers</p>
                        </div>
                        <div className='ml-auto'>
                            <MdOutlineEdit size={35} color="black" className='cursor-pointer ml-auto' onClick={handleShowModal} />
                            <p className='text-gray-400 mt-1'>mahab147@gmail.com</p>
                            <p className='mt-1'>+1 4537652129</p>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[470px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Edit intro</h1>
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-[47%]'>
                                <label htmlFor="" className='text-lg mb-1'>First name</label>
                                <input type="text" name="" id="" className='w-full border border-black rounded-[6px] h-10 outline-none' />
                            </div>
                            <div className='w-[47%] ml-auto'>
                                <label htmlFor="" className='text-lg mb-1'>Last name</label>
                                <input type="text" name="" id="" className='w-full border border-black rounded-[6px] h-10 outline-none' />
                            </div>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Designation</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Email</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Mobile</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default UserProfile
