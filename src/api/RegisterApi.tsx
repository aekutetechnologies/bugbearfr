import React, { useState } from 'react'
import axios from 'axios';


const RegisterApi = () => {
    let apiUrl="http://127.0.0.1:8000/api/user"
    
    const REGISTER = async (endpoint: string, data:object) => {
      console.log("ala",data)
        try {
          const response = await axios.post(`${apiUrl}/${endpoint}`, data);
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