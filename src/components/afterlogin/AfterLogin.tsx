import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import logo from '../image/bugbear_logo.jpg'
const AfterLogin = () => {
    const [datastore, setdatastore] = useState<any>([]);
    const [isHovered, setIsHovered] = useState(false);
    const [image,setImage]=useState('');
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.files)
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        let token = localStorage.getItem('token');

        if (token) {

            // Set the token in the axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        }
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/user-details/");
            // Handle response data here
            console.log("User profile data:", response.data);
            setdatastore(response.data)

        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    useEffect(() => {
        fetchUserProfile()
    }, [])
    return (
        <>
            <div className='h-14  py-1 bg-[#171717] top-0 sticky'>
                <div className="flex">
                    <div className='h-10 w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                    <div className="ml-auto"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <h1 className="text-xl text-white font-bold mr-14">User</h1>
                        {isHovered?<div className="relative">
                            <div className="absolute w-[240px] bg-white text-center right-5">
                            <h1 className="border-b">Upload your profile photo</h1>
                            <div className="text-center w-full">
                                <input type="file" onChange={handleChange} className="text-center mx-2"/>
                                <button className="border rounded">Upload</button>
                            </div>
                            </div>
                        </div>:<></>}
                    </div>
                </div>
            </div>
            <div className="w-full text-center">
                <h1 className="text-3xl font-bold text-white">Login Successfully</h1>
                <p className="text-3xl font-bold text-white">Email:{datastore.email}</p>
                <p className="text-3xl font-bold text-white">user Active:{datastore.is_active}</p>
                <p className="text-3xl font-bold text-white">user Type:{datastore.user_type_name}</p>
            </div>
        </>
    )
}

export default AfterLogin