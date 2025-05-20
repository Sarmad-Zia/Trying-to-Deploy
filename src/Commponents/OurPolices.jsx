import React from 'react'
import { assets, products } from '../assets/frontend_assets/assets'

const OurPolices = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text center py-10 text-xs sm:text-sm md:text-base text-gray-700 ' >
      <div className='flex flex-col items-center justify-center' >
        <img src={assets.exchange_icon} alt="exchange_icon" />
        <h1 className='text-xl font-bold py-2' >Easy Exchange Policy </h1>
        <p className=' text-sm text-black'>We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col items-center justify-center' >
        <img src={assets.quality_icon} alt="exchange_icon" />
        <h1 className='text-xl font-bold py-2' >Easy Exchange Policy </h1>
        <p  className= 'text-black text-sm' >We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col items-center justify-center' >
        <img src={assets.support_img} alt="exchange_icon" />
        <h1 className='text-xl font-bold py-2' >Best Customer Support</h1>
        <p  className= 'text-black text-sm ' >We offer hassle free exchange policy</p>
      </div>
    </div>
  )
}

export default OurPolices
