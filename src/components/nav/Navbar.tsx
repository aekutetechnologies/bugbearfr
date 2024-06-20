import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/bugbear_logo.jpg'
const Navbar : React.FC= () => {
  return (
    <>
    {/* <div className='h-12 bg-[#0f172a] py-1 top-0 sticky'>
        <div>
            <h1 className='text-[#65a30d] text-2xl mx-10 py-1 font-semibold'>bugbeartfront</h1>
        </div>
    </div> */}
    <div className='h-14  py-1 bg-[#171717] top-0 flex sticky justify-center justify-evenly gap-56 md:gap-[650px]'>
                <div className=''>
                    <div className='h-[60px] w-52 py-1'><img src={logo} alt="" className='h-full w-full' /></div>
                </div>
                <div className='text-2xl text-white mr-5 mt-4 '>
                    <Link to="/login"><span>Login</span></Link>/<Link to='/signupclient'><span>Signup</span></Link>
                </div>
            </div>
    </>
  )
}

export default Navbar
