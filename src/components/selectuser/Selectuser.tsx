import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import logo from "../image/bugbear_logo-removebg-preview.png";
import { useState } from "react";
import "./seluser.css";

import imgFreelancer from "./image/freelancer.png";

const Selectuser = () => {
  const [cilent, setClient] = useState<boolean>(false);
  const [freelancer, setFreelancer] = useState<boolean>(false);
  const [pathstr, setPathstr] = useState<string>("");
  const [strbtn, setSterbtn] = useState<string>("");
  const handleclient = () => {
    setClient(true);
    setFreelancer(false);
    setSterbtn("Client");
    setPathstr("/signupclient");
  };
  const handlefreelance = () => {
    setFreelancer(true);
    setClient(false);
    setSterbtn("Freelancer");
    setPathstr("/signupfreelancer");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
 
    <div className="flex flex-col min-h-[100vh] text-white bg-gradient-to-b from-black to-sky-900">
      <nav className="flex items-center justify-between flex-wrap p-6 container">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 flex-grow">
          <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block  flex-grow lg:flex lg:w-[900px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-center gap-4  lg:max-w-[50%] lg:ml-auto lg:">
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10  hover:border-white ${
                isOpen
                  ? "block mt-4 lg:inline-block lg:mt-0 text-white-200 border-none"
                  : "hidden"
              }`}
            >
              Hire Freelancers
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-black border rounded-xl py-2 px-4 font-semibold bg-yellow-200 border-[rgba(255,255,255,0.4)] hover:bg-yellow-300  ${
                isOpen
                  ? "block mt-4 lg:inline-block lg:mt-0 text-white-200 border-none"
                  : "hidden"
              }`}
            >
              Hire Devloper
            </a>
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10  hover:border-white ${
                isOpen
                  ? "block mt-4 lg:inline-block lg:mt-0 text-white-200 border-none"
                  : "hidden"
              }`}
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <main className="container h-screen flex justify-center items-center gap-20">
        <div className="card basis-2/5 relative h-64 flex items-center overflow-hidden justify-center shadow-xl p-5 rounded-xl">
          <div className="card-content flex items-center justify-center w-full h-full top-0 left-0">
            <img
              src={imgFreelancer}
              alt="freelancer image"
              className="w-[50%] h-full"
            />
            <p>I am a Client, Hire for project</p>
          </div>
          <button className="card-button">abdbad</button>
        </div>
        <div className="card basis-2/5 relative h-64 flex items-center overflow-hidden justify-center shadow-xl p-5 rounded-xl">
          <div className="card-content flex items-center justify-center w-full h-full top-0 left-0">
            <img
              src={imgFreelancer}
              alt="freelancer image"
              className="w-[50%] h-full"
            />
            <p>I am a Client, Hire for project</p>
          </div>
          <button className="card-button">abdbad</button>
        </div>
      </main>
    </div>
  );
};

export default Selectuser;
