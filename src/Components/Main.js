import React from 'react'
import { ReactTyped } from 'react-typed';

const Main = () => {
  return (
    <div className='h-screen w-full mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold text-xl sm:text-3xl  md:text-4xl'>
        GROWING WITH DATA ANALYTICS
      </p>
      <h1 className='text-white text-4xl sm:text-6xl  md:text-7xl font-bold'>
        Grow with data
      </h1>
      <div className='mt-2 text-center  text-lg sm:text-3xl  md:text-4xl flex  justify-center items-center '>
        <p className='text-white'>
          Fast, flexible financing for
        </p>
        <ReactTyped className=' text-gray-500 pl-2 md:pl-3' strings={['BTB', 'BTC', 'SASS']}
          typeSpeed={120} backSpeed={140} loop />
      </div>
      <p className='mx-4 my-2 font-bold text-gray-500 text-xl md:text-2xl'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='py-2 mx-auto w-32 text-black bg-[#00df9a] text-lg rounded-md'>Get Started</button>
    </div>

  )
}

export default Main