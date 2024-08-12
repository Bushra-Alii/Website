import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";
import {AiOutlineClose} from  "react-icons/ai";

const Navbar = () => {
 const [nav, setNav] = useState(false)

 const handleNav =()=>{
    setNav(!nav)
 }
  
    return (
        <div>
            <nav className='mx-auto p-3 bg-[#000300] text-white w-screen flex justify-between fixed top-0 z-10'>
                <h1 className=' p-4 text-3xl text-[#00df9a] sticky top-0'> REACT. </h1>
                <ul className='hidden md:flex md:justify-end'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Resources</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
                <div className='md:hidden'>
                <div className='p-4' onClick={handleNav}>
                    {nav ? <AiOutlineClose size={20}/> : <BiMenu size={20}/> }
                    
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60vw] h-full bg-[#000300] border-r border-r-gray-600 border-opacity-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='p-4 text-3xl text-[#00df9a]'> REACT. </h1>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                </ul>
                </div>
              
            </nav>
        </div>
    )
}

export default Navbar
