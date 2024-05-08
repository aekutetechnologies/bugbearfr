import React from 'react'
import { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import './signfreelance.css';
import { Link } from 'react-router-dom';
const SignupFreelancer = () => {
    const [typee, setType] = useState<string>('password');
    const [icon, setIcon] = useState<any>(eyeOff);
    
    const handleToggle=()=>{
        if(typee==="password")
        {
            setIcon(eye)
            setType("text")
        }
        else{
            setType("password")
            setIcon(eyeOff)
        }
    }
    return (
        <>
            <h1 className='text-3xl font-semibolt text-center'>Join as a client or freelancer</h1>
            <div className='w-[70%] m-auto'>
                <div className='w-[55%] m-auto'>
                    {/* <div className='flex justify-center justify-evenly w-full'>
                        <div className='mr-auto'>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='Username or Email' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' />
                        </div>
                        <div className=''>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Username or Email' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' />
                        </div>
                    </div> */}
                    <div className=''>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Email' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' />
                    </div>
                    <div className=''>
                            <label htmlFor="">Password</label>
                            <input type={typee} placeholder="Password" className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' /><span className="relative top-4 right-10" onClick={handleToggle}>
                            <Icon className="absolute mr-10" icon={icon} size={25} />
                        </span>
                    </div>
                    <div className=''>
                            <label htmlFor="">Country</label>
                            <input type="email" placeholder='Country name' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' />
                    </div>
                    <div className='flex mt-5'>
                        <input type="checkbox" className='px-2 largerCheckbox1 '/>
                        <p className='px-5'>Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy .</p>
                    </div>
                </div>
            </div>
            <div className='w-full text-center'>
                <button className=' px-11 bg-[#65a30d] py-2 rounded-full  mt-10'>Create my account</button>
            </div>
        </>
    )
}

export default SignupFreelancer
