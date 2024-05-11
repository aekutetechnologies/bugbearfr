import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from '../image/bugbear_logo.jpg'
const AfterLogin=()=>{
    const [datastore,setdatastore]=useState<any>([]);
    useEffect(() => {
        let token = localStorage.getItem('token');
        
        if (token) {
            setdatastore(token)
            // Set the token in the axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
        }
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/profile/");
            // Handle response data here
            console.log("User profile data:", response.data);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    useEffect(()=>{
        fetchUserProfile()
    },[datastore])
    return(
        <>
        <div className='h-14  py-1 bg-[#171717] top-0 sticky'>
                <div>
                    <div className='h-10 w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                </div>
            </div>
    <div className="w-full text-center"><h1 className="text-3xl font-bold text-white">Login Successfully</h1></div>
    </>
    )
}

export default AfterLogin