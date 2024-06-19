import { useState } from "react";
import { Link } from "react-router-dom"
import logo from '../image/bugbear_logo.jpg';
import Model from "./Model";
import './home.css'
import { BoltIcon, BriefcaseIcon, ShieldIcon } from "lucide-react";

export default function Component() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  function setClose() {
    setShow(true)
  }
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#161616] text-white">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
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
          className={`w-full block  flex-grow lg:flex lg:w-[700px] ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex justify-evenly lg:max-w-[40%] lg:ml-auto lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200" onClick={setClose}>
              Freelancers
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200" onClick={setClose}>
              Hire
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
              About
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
              Contact
            </a>
          </div>
          {/* <div className='flex justify-evenly'>
            <button className="inline-flex mx-4 rounded-full items-center font-bold bg_color border-0 py-2 px-4 text-white">
              Login
            </button>
            <button className="inline-flex mx-4 rounded-full items-center font-bold bg_color border-0 py-2 px-4 text-white">
              register
            </button>
          </div> */}
        </div>
      </nav>
      <main className="flex-1">
        <section className="bg_img relative w-full h-[90vh] bg-gradient-to-r from-black to-gray-900">
          <div className="bg_colorr h-full w-full">
            <div className="absolute inset-0 bg-cover bg-center opacity-20 animate-zoom-in" />
            <div className="relative container px-4 md:px-6 h-full flex flex-col items-center justify-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Secure Your Digital Future</h1>
              <p className="max-w-[600px] text-lg text-gray-300">
                Discover the top cyber security experts and protect your business from online threats.
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-500 rounded text-black h-11 px-4 hover:bg-yellow-600" onClick={setClose}>
                  Hire Freelancers
                </button>
                <div className={show ? `` : 'hidden'}>
                  <Model show={show} setShow={setShow} />
                </div>
                <button className="border-yellow-500 rounded bg-white text-black h-11 px-4 hover:bg-yellow-500 hover:text-black" onClick={setClose}>
                  Become a Freelancer
                </button>
              </div>
            </div>
          </div>

        </section>
        <section className="py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <ShieldIcon className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cybersecurity Experts</h3>
                <p className="text-gray-300">Hire top-tier cyber security professionals to protect your business.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <BoltIcon className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure Solutions</h3>
                <p className="text-gray-300">
                  Implement cutting-edge security measures to safeguard your digital assets.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <BriefcaseIcon className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Engagement</h3>
                <p className="text-gray-300">Hire freelancers for short-term projects or ongoing support.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Leading Businesses</h2>
                <p className="text-gray-300">
                  Our cyber security freelancers have helped protect some of the world's most prominent companies.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <img
                    alt="Logo 1"
                    className="w-full h-auto"
                    height={50}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/50",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                  <img
                    alt="Logo 2"
                    className="w-full h-auto"
                    height={50}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/50",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                  <img
                    alt="Logo 3"
                    className="w-full h-auto"
                    height={50}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/50",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                  <img
                    alt="Logo 4"
                    className="w-full h-auto"
                    height={50}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/50",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                  <img
                    alt="Logo 5"
                    className="w-full h-auto"
                    height={50}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/50",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                  <img
                    alt="Logo 6"
                    className="w-full h-auto"
                    height={50}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/50",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">Secure Your Business Today</h2>
                <p className="text-gray-300">
                  Get in touch with our team to discuss your cyber security needs and find the perfect freelancer for
                  your project.
                </p>
                <form className="spa space-y-4">
                  <input
                    className="ho_in place-1 bg-gray-800 w-full h-10 border-gray-500 border-[1px] rounded p-2"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="ho_in bg-gray-800 w-full border-gray-500 border-[1px] h-10 rounded p-2"
                    placeholder="Email"
                    type="email"
                  />
                  <textarea className="ho_in bg-gray-800 w-full h-20 p-2 border-gray-500 border-[1px] rounded" placeholder="Message" />
                  <button className="bg-yellow-500 px-4 h-10 p-1 rounded text-black hover:bg-yellow-600" >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 text-sm text-gray-400">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p>© 2024 SecureHub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link className="hover:text-yellow-500" to="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-yellow-500" to="#">
              Terms of Service
            </Link>
            <Link className="hover:text-yellow-500" to="#">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
