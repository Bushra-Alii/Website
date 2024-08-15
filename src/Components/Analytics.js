import React from 'react'
import Laptop from '../Images/laptop.jpg'

const Analytics = () => {
  return (
    <div id='analysis' className=' w-full bg-white py-16 '>
        <div className='mx-auto max-w-[1240px] grid md:grid-cols-2'>
            <img src={Laptop} alt='laptop' className='w-[500px] mx-auto'/>
            <div className='w-full flex flex-col justify-center'>
            <p className='mx-4 text-[#00df9a] font-bold  md:text-xl '>DATA ANALYTICS DASHBOARD</p>
            <h1 className='mx-4 py-2 text-lg  font-bold md:text-3xl'>Manage Data Analytics Centrally</h1>
            <p className='mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
            </p>
            <button className='p-2 mx-auto md:mx-4 my-4 w-32 bg-black text-[#00df9a] text-lg rounded-md'>Get Started</button>
            </div>
        </div>
    
    </div>
  )
}

export default Analytics
