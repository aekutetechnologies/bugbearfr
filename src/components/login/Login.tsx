import React, { ChangeEvent, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import Navbar from '../nav/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../image/bugbear_logo.jpg'
import './login.css';
import { useState } from 'react';
import { RegisterApi } from '../../api/RegisterApi';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// try {
//     const response = await RegisterApi().REGISTER("login/",creadential);
//     setSuccessMessage('Registered successfully!');
//     console.log(SuccessMessage, response);

// } catch (error) {
//     console.error("Error registering:", error);
//     setErrorMessage('Something went wrong while registering. Please try again later.');
// }
interface Credential {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    // bg-[#FBFBFB]
    // bg-[#171717]
    const usenavigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem('token')
    }, [])
    const [creadential, setCreadential] = useState<Credential>({ email: "", password: "" })
    const [SuccessMessage, setSuccessMessage] = useState<string>("")
    const [ErrorMessage, setErrorMessage] = useState<string>("")
    const [pathstr, setPathstr] = useState<string>("")
    const [loginToken, setLoginToken] = useState<string>("")
    const [res, setRes] = useState<any>([])
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const handelinput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCreadential(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
    }
    
    const handleSubmit = async () => {
        if (password.length < 1) {
            console.log("toas")
            toast.error("please envet valid password")
        }

        try {
            const response = await RegisterApi().REGISTER("login/", creadential);
            setSuccessMessage('Registered successfully!');
            console.log(SuccessMessage, response);
            console.log('pas', password)

            setRes(response.access)
            if (response && response.msg === "Login Success" && response.token && response.token.access) {
                localStorage.setItem('token', response.token.access);
                toast.success("Login Success")
                usenavigate('/loginafter')
            } else {
                toast.error('Login failed. Please check your credentials.')
                setErrorMessage('Login failed. Please check your credentials.');
            }

        } catch (error) {
            console.error("Error registering:", error);
            toast.error('eroor')
            setErrorMessage('Something went wrong while registering. Please try again later.');
        }


        // fetch(apiUrl,{
        //     method:'POST',
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(creadential)
        // }).then(response=>response.json())
        // .then(result=>{
        //     console.log("res",result)
        // })
        // .catch(err=>console.log("errrr",err))
    }

    return (
        <>
        
        <div className='bg-[#171717]'>
        <div className='h-14  py-1 bg-[#171717] top-0 sticky'>
                <div>
                    <div className='h-10 w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                </div>
            </div>
            <div className='login floating w-[30%] m-auto'>
                <div className='text-center w-[85%] m-auto'>
                    <h1 className='font-semibold text-black py-8 text-3xl'>Login</h1>
                    <input type="email" name='email' placeholder='Username or Email' value={creadential.email} className='w-full border-2 border_input1 border-gray-500 rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handelinput} />
                    <input type="password" name='password' placeholder='Password' value={creadential.password} className='w-full border-2 border_input1 border-gray-500 rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handelinput} />
                    <button className='border border-black hover:bg-black text-black hover:text-white rounded-full w-full  py-2' onClick={handleSubmit}><span className=' px-10'>Submit</span></button>
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
                        <div className='h-[2px] w-[18%] bg-black mt-3'><span></span></div>
                        <span className='mx-2 text-black w-full'>Don't have an Bugbeartfront account? </span>
                        <div className='h-[2px] w-[18%] bg-black mt-3'><span></span></div>
                    </div>
                    <Link to='/selectuser' ><button className='border border-green-400 rounded-full py-2 mb-5'><span className='text-greeen px-10 text-green-400'>Sign Up</span></button></Link>
                </div>
            </div>
            <div className='h-[130px] bg-white w-[90%] my-10 rounded m-auto text-center'>
                <p className='text-black py-10'>© 2015 - 2024 Bugbeartfront® Global Inc. • Privacy Policy</p>
            </div>
            <ToastContainer />
        </div>
            
        </>
    )
}

export default Login