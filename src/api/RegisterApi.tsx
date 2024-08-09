import React, { useState } from 'react'
import axios from 'axios';


const RegisterApi = () => {
    let apiUrl=" https://bugbearback.onrender.com/api/user"
    const token = localStorage.getItem('token');
    const REGISTER = async (endpoint: string, data:object) => {
      console.log("ala",data)
        try {
          const response = await axios.post(`${apiUrl}/${endpoint}`, data
        );
            console.log("Done!",response.data)
          return response.data;
        } catch (error) {
          console.log('Error register:', error);
          throw error;
        }
      };
  return {REGISTER}
}
export {RegisterApi}