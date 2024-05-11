import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import logo from '../image/bugbear_logo.jpg'
import { Link } from 'react-router-dom';
import { RegisterApi } from '../../api/RegisterApi';
const SignupClient = () => {
    const [type, setType] = useState<string>('password');
    const [icon, setIcon] = useState<any>(eyeOff);
    const [type2, setType2] = useState<string>('password');
    const [icon2, setIcon2] = useState<any>(eyeOff);
    const [pathstr,setPathstr]=useState<string>("");
    const [creadential, setCreadential] = useState<object>({ email: "", password: "",password2:"",tc:"",user_type:3 })
    const [SuccessMessage, setSuccessMessage] = useState<string>("")
    const [ErrorMessage, setErrorMessage] = useState<string>("")
    const [registerToken, setRegisterToken] = useState<string>("")
   
    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value,checked } = e.target;
        if(name==="tc")
        {console.log("Tccccc zal")
            setCreadential(prevState => ({
                ...prevState,
                [name]: checked ? "true" : "false"
            }));
        }
        else{
            setCreadential(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }
    const handleToggle=()=>{
        if(type==="password")
        {
            setIcon(eye)
            setType("text")
        }
        else{
            setType("password")
            setIcon(eyeOff)
        }
    }
    const handleToggle2=()=>{
        if(type2==="password")
        {
            setIcon2(eye)
            setType2("text")
        }
        else{
            setType2("password")
            setIcon2(eyeOff)
        }
    }
    const handleSubmit = async () => {
        try {
            const response = await RegisterApi().REGISTER("register/", creadential);
            setSuccessMessage('Registered successfully!');
            console.log(SuccessMessage, response);
            if (response.msg === "Registration Successful") {
                setRegisterToken(response.token.access)
                setPathstr("/signupclient")
                console.log("Tokennn:", registerToken)
                localStorage.setItem('token',registerToken)
            }
        } catch (error) {
            console.error("Error registering:", error);
            setErrorMessage('Something went wrong while registering. Please try again later.');
        }
    }

    return (
        <>
        <div className='h-14  py-1 bg-[#171717] top-0 sticky'>
                <div>
                    <div className='h-10 w-52 py-1'><img src={logo} alt="" className='h-full w-full'/></div>
                </div>
            </div>
            <h1 className='text-3xl font-semibolt text-white text-center'>Sign up to hire talent</h1>
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
                            <label htmlFor="" className='text-white'>Email</label>
                            <input type="email" name='email' placeholder='Email' className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handlechange}/>
                    </div>
                    <div className=''>
                            <label htmlFor="" className='text-white'>Password</label>
                            <input type={type} name="password" placeholder="Password" className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handlechange}/><span className="relative top-4 right-10" onClick={handleToggle}>
                            <Icon className="absolute mr-10" icon={icon} size={25} />
                        </span>
                    </div>
                    <div className=''>
                            <label htmlFor="" className='text-white'>Confirm Password</label>
                            <input type={type2} name="password2" placeholder="Confirm Password" className='w-full border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handlechange}/><span className="relative top-4 right-10" onClick={handleToggle2}>
                            <Icon className="absolute mr-10" icon={icon2} size={25} />
                            </span>
                    </div>
                    <div className='flex mt-5'>
                        <input type="checkbox" name= "tc" className='px-2 largerCheckbox1' onChange={handlechange}/>
                        <p className='text-white px-5'>Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy .</p>
                    </div>
                </div>
            </div>
            <div className='w-full text-center'>
                <Link to={pathstr} onClick={handleSubmit}><button className=' px-11 bg-[#65a30d] py-2 rounded-full mt-10'>Create my account</button></Link>
            </div>
        </>
    )
}

export default SignupClient