import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import logo from '../image/bugbear_logo.jpg'
import { Link } from 'react-router-dom';
import { RegisterApi } from '../../api/RegisterApi';
import { ToastContainer, toast } from 'react-toastify';
import { PanelRightDashedIcon } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
const SignupClient = () => {
    const [type, setType] = useState<string>('password');
    const [icon, setIcon] = useState<any>(eyeOff);
    const [type2, setType2] = useState<string>('password');
    const [icon2, setIcon2] = useState<any>(eyeOff);
    const [pathstr, setPathstr] = useState<string>("");
    const [creadential, setCreadential] = useState<object>({ email: "", password: "", password2: "", tc: "", user_type: 3 })
    const [SuccessMessage, setSuccessMessage] = useState<string>("")
    const [ErrorMessage, setErrorMessage] = useState<string>("")
    const [registerToken, setRegisterToken] = useState<string>("")
    const [Email, setEmail] = useState<string>("")
    const [Password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [rightans, setRightans] = useState<boolean>(true)
    function isValidEmail(email: string) {
        // Define a regular expression pattern for email validation.
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return pattern.test(email);
    }
    function isValidPassword(password: string) {
        // Define a regular expression pattern for email validation.
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        console.log("password result", passwordRegex.test(password))
        return passwordRegex.test(password);
    }

    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        if (name === "tc") {
            console.log("Tccccc zal")
            setCreadential(prevState => ({
                ...prevState,
                [name]: checked ? "true" : "false"
            }));
        }
        else if (name === 'email') {
            setEmail(value);
            setCreadential({ ...creadential, [name]: value });
        }
        else if (name === 'password2') {
            setConfirmPassword(value);
            setCreadential({ ...creadential, [name]: value });
        }
        else if (name === 'password') {
            setPassword(value);
            setCreadential({ ...creadential, [name]: value });
        }
        else if (name === "tc") {
            console.log("Tccccc zal")
            setCreadential(prevState => ({
                ...prevState,
                [name]: checked ? "true" : "false"
            }));
        }

        else {
            setCreadential(prevState => ({
                ...prevState,
                [name]: value
            }));
        }

    }
    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye)
            setType("text")
        }
        else {
            setType("password")
            setIcon(eyeOff)
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
        let valid = true;
        if (!isValidEmail(Email)) {
            // Email is valid, proceed with form submission.

            toast.error("invalid email")
            console.log("email is not correct")
        }
        if (!isValidPassword(Password)) {

            toast.error("Invalid password");
            setRightans(false);
            valid = false;
            console.log("password is not correct")
        }
        if (confirmPassword !== Password) {
            toast.error("Password not match")
        }
        if (!valid) {
            return;
        }
        console.log("password:", Password)
        console.log("password2:", confirmPassword)
        console.log("email:", Email)
        try {
            const response = await RegisterApi().REGISTER("register/", creadential);
            setSuccessMessage('Registered successfully!');
            console.log(SuccessMessage, response);
            if (response.msg === "Registration Successful") {
                setRegisterToken(response.token.access)
                setPathstr("/signupclient")
                console.log("Tokennn:", registerToken)
                localStorage.setItem('token', registerToken)
            }

        } catch (error) {
            console.error("Error registering:", error);
            setErrorMessage('Something went wrong while registering. Please try again later.');
        }

    }
    console.log("bb", rightans)

    return (
        <>
            <div className=''>
                <div className='h-14  py-1 bg-[#171717] top-0 flex sticky justify-center justify-evenly gap-56 md:gap-[650px]'>
                    <div className=''>
                        <div className='h-[60px] w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                    </div>
                    <div className='text-2xl text-white mr-5 mt-4 '>
                        <Link to="/login"><span>Login</span></Link>/<Link to='/signupclient'><span>Signup</span></Link>
                    </div>
                </div>

                <div className='w-[70%] md:w-[25%] bg-white rounded-[15px] m-auto mt-20'>
                    <div className='w-[90%] m-auto'>
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
                        <p className='text-2xl font-semibold text-black mb-5 mt-3'>Create an account</p>
                        <div className=''>
                            <label htmlFor="" className='text-black'>Email</label>
                            <input type="email" name='email' placeholder='Email' className='w-full border border_input1 border-black rounded-[14px] p-2 outline-none md:h-11 mt-3 mb-4' onChange={handlechange} />
                        </div>
                        <div className=''>
                            <label htmlFor="" className='text-black'>Password</label>
                            <input type={type} name="password" placeholder="Password" className='w-full border border_input1 border-black rounded-[14px] p-2 outline-none md:h-11 mt-3 mb-4' onChange={handlechange} /><span className="relative top-4 right-10" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={25} />
                            </span>
                        </div>
                        {!rightans && <div><div className='flex gap-2'><li className=''>use 8 or more character</li><li>{"use upper case and lower cse letters(e.g.Aa)"}</li></div>
                            <div><div className='flex'><li>{"use number(e.g.1234)"}</li><li>{"Use Symbol(e.g.!#@$)"}</li></div></div></div>}
                        <div className=''>
                            <label htmlFor="" className='text-black'>Confirm Password</label>
                            <input type={type2} name="password2" placeholder="Confirm Password" className='w-full border border_input1 border-black rounded-[14px] p-2 outline-none md:h-11 mt-3 mb-4' onChange={handlechange} /><span className="relative top-4 right-10" onClick={handleToggle2}>
                                <Icon className="absolute mr-10" icon={icon2} size={25} />
                            </span>
                        </div>
                        <div className='flex mt-5'>
                            <input type="checkbox" name="tc" className='px-2 largerCheckbox1' onChange={handlechange} />
                            <p className='text-black px-5'>Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy .</p>
                        </div>
                        <div className='w-full text-center'>
                            <Link to={pathstr} onClick={handleSubmit}><button className=' px-11 bg-gray-300 hover:bg-[#65a30d] h-11 py-2 rounded-full w-full mb-10 mt-10'>Sign in</button></Link>
                        </div>
                    </div>
                </div>

                <div className='h-14  py-1 bg-[#171717] top-0 flex justify-center justify-evenly sticky mt-10'>
                    <div>
                        <div className='h-[60px] w-52 py-1 ml-5'><img src={logo} alt="" className='h-full w-full' /></div>
                    </div>
                    <div className='text-center text-white mx-40'>
                        <p>Copyrights @ bugbrear</p>
                    </div>

                    <div className='flex gap-1.5 justify-center'>
                        <FcGoogle size={30} />
                        <FaFacebookF size={30} color='blue' />
                        <BsGithub size={30} />
                    </div>

                </div>

                <ToastContainer />
            </div>

        </>
    )
}

export default SignupClient