import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <nav className='mx-auto p-3 bg-[#000300] text-white w-screen flex justify-between fixed top-0 z-10'>
                <h1 className=' p-4 text-3xl text-[#00df9a] sticky top-0'> REACT. </h1>
                <ul className='hidden md:flex md:justify-end'>
                    <Link smooth to="#main" className='p-4 cursor-pointer'>Main</Link>
                    <Link smooth to="#analysis" className='p-4 cursor-pointer'>Data Analysis</Link>
                  {/*  <Link smooth to="#newsletter" className='p-4 cursor-pointer'>Newsletter</Link> */}
                    <Link smooth to="#offers" className='p-4 cursor-pointer'>Offers</Link>
                </ul>
                <div className='md:hidden'>
                    <div className='p-4' onCLinkck={handleNav}>
                        {nav ? <AiOutlineClose size={20} /> : <BiMenu size={20} />}

                    </div>
                    <ul className={nav ? 'fixed left-0 top-0 w-[60vw] h-full bg-[#000300] border-r border-r-gray-600 border-opacity-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                        <h1 className='p-4 text-3xl text-[#00df9a]'> REACT. </h1>
                        <Link smooth to="#main" className='p-4 border-b border-gray-600 cursor-pointer'>Main</Link>
                        <Link smooth to="#analysis" className='p-4 border-b border-gray-600 cursor-pointer'>Data Analysis</Link>
                     {/*    <Link smooth to="#newsletter" className='p-4 border-b border-gray-600 cursor-pointer'>Newsletter</Link> */}
                        <Link smooth to="#offers" className='p-4 border-b border-gray-600 cursor-pointer'>Offers</Link>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
