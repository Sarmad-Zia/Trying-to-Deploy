import React from 'react'
import { assets } from '../assets/frontend_assets/assets';
import '../index.css'

const HeaderSection = () => {
  return (
    <div className='border border-gray-400 flex flex-col sm:flex-row' >
        {/* heroSection left Side */}
        <div className='flex flex-col justify-center items-center sm:w-1/2 w-full py-10 sm:py-0 sm:px-8'>
        
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2  ' >
                    <p className='w-8 md:w-11 h-[2px] bg-slate-700 ' ></p>
                    <p className='font-semibold text-sm md:text-base ' >OUR BESTSELLERS </p>
                </div>
                <h1 className='text-6xl prata-regular' >Latest Arrivals</h1>
                <div className='flex items-center gap-2  ' >
                    <p className='font-semibold text-sm md:text-base' >SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-slate-700  ' ></p>
                </div>
            </div>
        </div>

        {/* heroSection right Side */}

        <img src={assets.hero_img} className='w-full sm:w-1/2 ' alt="" />

    </div>
  )
}

export default HeaderSection
