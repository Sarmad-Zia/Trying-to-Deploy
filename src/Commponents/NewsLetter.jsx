import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' text-center my-10 ' >
        <p className='text-gray-700 font-semibold text-2xl ' >Subscribe now & get 20% off</p>
        <p className='text-gray-800 my-2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='flex flex-row justify-center items-center py-5 ' >
            <input type="text" placeholder='Enter your email' className='border border-gray-300 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4' />
            <button className='bg-black border border-black text-white p-2'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
