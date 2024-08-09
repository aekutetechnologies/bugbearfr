import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import logo from '../image/bugbear_logo.jpg';
import './after.css';
import user from '../image/user.png'
import { RegisterApi } from '../../api/RegisterApi';
import { toast, ToastContainer } from "react-toastify";
import { PenBox } from "lucide-react";
import { MdOutlineEdit } from "react-icons/md";
const AfterLogin = () => {
    const [datastore, setdatastore] = useState<any>([]);
    const [isHovered, setIsHovered] = useState(false);
    const [info, setInfo] = useState<object>({ first_name: "", last_name: "", dob: "", country: "", city: "", address: "", phone: "" });
    const [image, setImage] = useState<string | null>(null);
    const [image2, setImage2] = useState<string | undefined>(undefined);
    const [profile, setProfile] = useState<string | Blob>("")
    const [SuccessMessage, setSuccessMessage] = useState<string>("")
    const [ErrorMessage, setErrorMessage] = useState<string>("")

    const inputRef = useRef<HTMLInputElement | null>(null);
    const token = localStorage.getItem('token');
    const handleImageClick = () => {
        inputRef.current?.click();
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfile(file)
            console.log("from api", datastore.profile_pic)
            console.log("from component", file)
            setImage(URL.createObjectURL(file)); // Create a URL for the selected file
        }
        console.log(e.target.files)
    }
    const handleChangeInfo = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;   
        setInfo(prevState => ({ ...prevState, [name]: value }));
        // setCreadential(prevState => ({...prevState,   [name]: value }));    
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        

        if (token) {

            // Set the token in the axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        }
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get(" https://bugbearback.onrender.com/api/user/user-details/",{
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                      });
            setdatastore(response.data);
            console.log("fetch success", response)
            if (response) {
                setImage2(response.data.profile_pic_url)
            }
          
        } catch (error) {
            console.error("Error fetching profile:", error);
            toast.error("Error fetching profile.");
        }

    }
    const HandleProfile = async () => {

        const formData = new FormData();
        formData.append("profile_pic", profile);
        try {
            console.log("Profilee", profile)
            const response = await axios.post(" https://bugbearback.onrender.com/api/user/upload-profile-pic/", formData);
            console.log("uploaded", response);
        } catch (error) {
            console.log('Error register:', error);
        }
    }

    const fetchUserProfile = async () => {
        HandleProfile()
        try {
            const response = await RegisterApi().REGISTER("user-details/", info)
            setSuccessMessage('Registered successfully!');
            console.log(SuccessMessage, response);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    useEffect(() => { 
        fetchProfile()
    }, [])

    return (
        <>
            <div className='h-14  py-1 bg-[#161616] top-0 sticky'>
                <div className="flex">
                    <div className='h-10 w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                </div>
            </div>
            {/* <div className="w-full text-center">
                <h1 className="text-3xl font-bold text-white">Login Successfully</h1>
                <p className="text-3xl font-bold text-white">Email:{datastore.email}</p>
                <p className="text-3xl font-bold text-white">user Active:{datastore.is_active}</p>
                <p className="text-3xl font-bold text-white">user Type:{datastore.user_type_name}</p>
            </div> */}
            <div className='w-[40%] m-auto bg-black'>
                <div className="w-[80%] m-auto flex justify-center mb-10">
                    <div className="w-[130px] h-[130px]" onClick={handleImageClick}>
                        {image ? <img src={image} alt="Profile Preview" className="mt-3 rounded-full w-full h-full" /> : <>{datastore.profile_pic_url ? (<img src={datastore.profile_pic_url} alt="Profile Picture" className="mt-3 w-full h-full rounded-full" />) : (<img src={user} alt="User Placeholder" className="mt-3 w-full h-auto" />)}</>}
                        <div className="relative bottom-10 ml-auto bg-[#f6ff00] rounded-full h-6 w-6 flex item-center justify-center"><MdOutlineEdit className="mt-1" /></div>
                        <input type="file" onChange={handleChange} ref={inputRef} className="hidden text-white file:w-[60%] file:h-9 mt-3 mb-4" />
                    </div>
                </div>
                {/* <div className="w-[25%] bg-green-300">
                
                <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Last name</label><br />
                <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Phone</label><br />
                <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Dath of birth</label><br />
                <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>City</label><br />
                <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Address</label><br />
                <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>country</label><br />
                </div> */}
                <div className='w-full m-auto'>
                    <div className="w-[85%] m-auto flex justify-center gap-2">
                        <div className="w-full ">
                            <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>First name:</label>
                            <input type="email" name='first_name' placeholder='First Name' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                        </div>
                        <div className="w-full ">
                            <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Last name:</label>
                            <input type="email" name='last_name' placeholder='Last Name' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                        </div>
                    </div>
                    <div className="w-[85%] m-auto">
                        <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Phone:</label>
                        <input type="number" name='phone' placeholder='Phone' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                    </div>
                    <div className="w-[85%] m-auto">
                        <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Address:</label>
                        <input type="text" name='address' placeholder='Address' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                    </div>
                    <div className="w-[85%] m-auto flex justify-center gap-2">
                        <div className="w-full">
                            <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>City:</label>
                            <input type="text" name='city' placeholder='City' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>country:</label>
                            <input type="text" name='country' placeholder='country' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                        </div>
                    </div>
                    <div className="w-[85%] m-auto">
                        <label htmlFor="" className='text-white md:h-9 mt-3 mb-4'>Dath of birth:</label>
                        <input type="date" name='dob' className='w-full ml-auto mr-5 border-2 border_input1 border-black rounded p-2 outline-none md:h-9 mt-3 mb-4' onChange={handleChangeInfo} />
                    </div>
                    <div className='w-[85%] m-auto'>
                        <button className=' px-11 bg-[#f6ff00] py-2 rounded-full mt-3 mb-4' onClick={fetchUserProfile}>Submit</button>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default AfterLogin