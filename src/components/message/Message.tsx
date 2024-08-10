import React, { useState } from 'react'
import user from '../image/user_man.jpeg'
import { FiEdit } from "react-icons/fi";
import './message.css'
interface MessageData {
    name: string;
    uni: string;
    date: string;
    msg: string;
    image: string;
}

const data: MessageData[] = [
    {
        name: 'Ishika Rawat',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Ishika is good girl",
        image: user
    },
    {
        name: 'Mayank',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "mayank is good boy",
        image: user
    },
    {
        name: 'Manas',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Manas is good girl",
        image: user
    },
    {
        name: 'Don Rayburn',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Don is good girl",
        image: user
    },
    {
        name: 'Kapil',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Kapil is good girl",
        image: user
    },
    {
        name: 'Pranali',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Pranali is good girl",
        image: user
    }, {
        name: 'Pranali',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Pranali is good girl",
        image: user
    },
    {
        name: 'Pranali',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Pranali is good girl",
        image: user
    },
    {
        name: 'Pranali',
        uni: "Sastra University's",
        date: 'jul 3',
        msg: "Pranali is good girl",
        image: user
    }
]
// massege
const Message = () => {
    const [msgBox, setMsgBox] = useState(false);
    const [itemNo, setItemNo] = useState<number | null>(null)
    const showMsg = (index: number) => {
        setItemNo(index)
        setMsgBox(true)
    }
    return (
        <>
            <div className='bg-white w-[80%] m-auto rounded mt-5'>
                <div className='flex justify-evenly w-full border-b py-2'>
                    <p className='text-3xl font-medium ml-5'>Messaging</p>
                    <FiEdit size={25} className='ml-auto mr-5' />
                </div>
                <div className='flex'>
                    <div className='msg_list w-[32%] border-r'>
                        {data.map((item, index) => {
                            return (
                                <>
                                    <div>
                                        <div className='flex w-full mt-2' onClick={() => showMsg(index)}>
                                            <div className='w-20 h-20 rounded bg-gray-300 '>
                                                <img src={item.image} alt="" className='rounded-full m-auto mt-5 h-8 w-8' />
                                            </div>
                                            <div className='w-full px-1'>
                                                <div className='w-full flex justify-evenly'>
                                                    <p className='text-xl font-medium'>{item.name}</p>
                                                    <span className='ml-auto'>{item.date}</span>
                                                </div>
                                                <p className='text-lg'>{item.uni}</p>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })}
                    </div>
                    {msgBox && itemNo !== null && (
                        <div className='w-[68%]'>
                            <h2 className='text-2xl font-bold border-b py-2'>{data[itemNo].name}</h2>
                            <div className='mx-2 bg-gray-300 rounded-[10px] h-[500px] flex mt-2 flex-col'>
                                <div className='flex ml-4 mt-2'>
                                    <img src={data[itemNo].image} alt="" className='h-8 w-8 rounded-full' />
                                    <div className='rounded border p-2'>
                                        <p className='text-md'>{data[itemNo].msg}</p>
                                    </div>
                                </div>
                                <div className='mt-auto border-t rounded-b-[10px] h-14'>
                                    <input type="text" placeholder='Write a masssege...' className='w-full text-black border-none outline-none bg-gray-300'/>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Message