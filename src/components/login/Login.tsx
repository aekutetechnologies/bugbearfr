import React, { ChangeEvent, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import Navbar from '../nav/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
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
    const [type, setType] = useState<string>('password');
    const [icon, setIcon] = useState<any>(eyeOff);
    const [type2, setType2] = useState<string>('password');
    const [icon2, setIcon2] = useState<any>(eyeOff);
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

    const handleToggle2 = () => {
        if (type2 === "password") {
            setIcon2(eye)
            setType2("text")
        }
        else {
            setType2("password")
            setIcon2(eyeOff)
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
                <div className='h-14  py-1 bg-[#171717] top-0 flex sticky justify-center justify-evenly gap-56 md:gap-[650px]'>
                    <div className=''>
                        <div className='h-[60px] w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                    </div>
                    <div className='text-2xl text-white mr-5 mt-4 '>
                        <Link to="/login"><span>Login</span></Link>/<Link to='/signupclient'><span>Signup</span></Link>
                    </div>
                </div>
                <div className='login w-[55%] h-[450px] p-5 m-auto flex justify-center justify-evenly mt-20'>
                    <div className='text-center mx-3 w-[40%]'>
                        <div className='h-14 rounded-full border border-black flex justify-center justify-evenly pt-3 mt-16'>
                            <FcGoogle size={30} />
                            <span>Sign in with Google</span>
                        </div>
                        <div className='h-14 rounded-full border border-black flex justify-center justify-evenly pt-3 mt-4 mb-4'>
                            <BsGithub size={30} />
                            <span>Sign in with Github</span>
                        </div>
                        <p className='text-black text-[12px] text-center'>
                            By signing , you agree to the <a href="">Term of Servie</a> and ackonowledge you've read our <a href="">Provacy Policy</a>
                        </p>

                    </div>
                    <div className='w-[0.5px] bg-gray-300 h-[300px]'>
                    </div>
                    <div className="mx-3 w-[40%] ">
                        <p className='text-black font-semibold text-3xl text-center'>Log in</p>
                        <label htmlFor="" className='text-xl text-gray-400'>Email</label>
                        <input type="email" name='email' placeholder='Username or Email' value={creadential.email} className='w-full border-2 border_input1 border-gray-500 rounded-[10px] p-2 outline-none md:h-11 mt-3 mb-4' onChange={handelinput} />
                        <div className='flex w-full'>
                            <label htmlFor="" className='text-xl text-gray-400'>Password</label>
                            <span className="ml-auto mr-5" onClick={handleToggle2}>
                                <Icon className="" icon={icon2} size={15} /><span className='pt-3 mx-1'>{type2 === "password" ? "Hide" : "Show"}</span>
                            </span>
                        </div>
                        <input type={type2} name='password' placeholder='Password' value={creadential.password} className='w-full border-2 border_input1 border-gray-500 rounded-[10px] p-2 outline-none md:h-11 mt-3 mb-4' onChange={handelinput} />
                        <div className='w-full text-right'>
                            <a href="" className=''>Forget Password</a>
                        </div>
                        <div>
                            <input type="checkbox" className='check' />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <button className='bg-gray-200 text-white font-bold hover:bg-black text-black hover:text-white rounded-full w-full  py-3 mt-5' onClick={handleSubmit}><span className=' px-10'>Log in</span></button>
                        <button className='text-xl border border-black text-black rounded-full w-full  py-2 mt-5' onClick={handleSubmit}><span className=' px-10'>Create an account</span></button>

                    </div>

                </div>
                <div className='h-14  py-1 bg-[#171717] top-0 flex justify-center justify-evenly sticky mt-20'>
                    <div>
                        <div className='h-[60px] w-52 py-1 ml-5'><img src={logo} alt="" className='h-full w-full' /></div>
                    </div>
                    <div className='text-center text-white mx-40'>
                        <p>Copyrights @ bugbrear</p>
                    </div>

                    <div className='flex gap-1.5 justify-center'>
                        <FcGoogle size={30} />
                        <FaFacebookF size={30} color='white' />
                        <BsGithub size={30} color="white" />
                    </div>

                </div>

                <ToastContainer />
            </div>

        </>
    )
}

export default Login