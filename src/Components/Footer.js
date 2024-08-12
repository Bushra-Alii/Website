import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='mx-auto max-w-[1240px] py-16 px-4 grid lg:grid-cols-3 gap-8'>
      <div className='mx-2'>
        <h1 className='mb-4 text-3xl text-[#00df9a] sticky top-0'> REACT. </h1>
        <p className=' text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='my-4 flex flex-row gap-3'>
          <FaFacebookF size={30} className='bg-white p-1 rounded-sm' />
          <FaInstagram size={30} className='bg-white p-1 rounded-sm' />
          <FaTwitter size={30} className='bg-white p-1 rounded-sm' />
          <FaGithub size={30} className='bg-white p-1 rounded-sm' />
        </div>
      </div>
      <div className='mx-2 lg:col-span-2 flex flex-col xs:flex-row justify-between'>
      <div>
          <h2 className='font-medium text-gray-400'>Solutions</h2>
          <ul className=' text-gray-300'>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul className=' text-gray-300'>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul className=' text-gray-300'>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul className=' text-gray-300'>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
