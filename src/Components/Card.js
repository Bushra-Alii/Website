import React from 'react'
import singleUser from '../Images/single.png'
import doubleUser from '../Images/double.png'
import tripleUser from '../Images/triple.png'

const Card = () => {
  return (
    <div className='  bg-white w-full py-16 '>
      <div className='mx-auto max-w-[1240px] grid md:grid-cols-3 gap-8'>
        <div className='w-full my-6 shadow-xl flex flex-col items-center hover:scale-105 duration-500 hover:bg-gray-100'>
            <img src={singleUser} alt="single" className=' mx-auto mb-2 w-20 mt-[-2rem] ' />
            <h1 className='my-4 font-bold text xl'>Single User</h1>
            <p className='py-2 font-bold text-2xl'>$149</p>
            <p className='py-2 text-center text w-full font-semibold text xl border-b border-t'>500GB storage</p>
            <p className='py-2  text-center w-full font-semibold text xl border-b'>1 Granted User</p>
            <p className='py-2  text-center w-full  font-semibold text xl border-b border-gray-200'>Send Upto 2 GB</p>
            <button className='py-2 my-4 mx-auto w-32 text-black bg-[#00df9a] text-lg rounded-md'>Start Trial</button>
        </div>

        <div className='my-6 w-full shadow-xl flex flex-col items-center hover:scale-105 duration-500 hover:bg-gray-100'>
            <img src={doubleUser} alt="single" className=' mx-auto mb-2 w-20 mt-[-2rem] ' />
            <h1 className='font-bold text xl'>Partnership</h1>
            <p className='my-4 font-bold text-2xl'>$149</p>
            <p className='py-2 text-center w-full font-semibold text xl border-b border-t'>500GB storage</p>
            <p className='py-2  text-center w-full font-semibold text xl border-b'>2 Granted User</p>
            <p className='py-2  text-center w-full  font-semibold text xl border-b border-gray-200'>Send Upto 2 GB</p>
            <button className='py-2 my-4 mx-auto w-32 text-black bg-[#00df9a] text-lg rounded-md'>Start Trial</button>
        </div>

        <div className=' my-6 w-full shadow-xl flex flex-col items-center hover:scale-105 duration-500 hover:bg-gray-100'>
            <img src={tripleUser} alt="single" className=' mx-auto mb-2 w-20 mt-[-2rem] ' />
            <h1 className=' my-4 font-bold text xl'>Single User</h1>
            <p className='py-2 font-bold text-2xl'>$149</p>
            <p className='py-2 text-center w-full font-semibold text xl border-b border-t'>500GB storage</p>
            <p className='py-2  text-center w-full font-semibold text xl border-b'>Mutli Granted User</p>
            <p className='py-2  text-center w-full  font-semibold text xl border-b border-gray-200'>Send Upto 2 GB</p>
            <button className='py-2 my-4 mx-auto w-32 text-black bg-[#00df9a] text-lg rounded-md'>Start Trial</button>
        </div>
        </div>
    </div>
  )
}

export default Card
