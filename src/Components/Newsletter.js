import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 px-4 text-white grid md:grid-cols-2'>
            <div>
            <h1 className='font-bold text-xl md:text-2xl'>
                Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>

            </div>
            <div>
                <div className='flex flex-col items-center lg:flex-row'>
                    <input className='my-2 mx-auto p-2 w-full rounded-lg text-lg' type='email' placeholder='Enter Email Address' />
                    <button className='mb-2 ml-4 p-2 w-32 text-black bg-[#00df9a] text-lg rounded-md '>Notify me</button>
                </div>
                <p>
                    We care bout the protection of your data. Read our
                    <span className='text-[#00df9a] pl-2'>Privacy Policy.</span>
                </p>
            </div>


        </div>
    )
}

export default Newsletter
