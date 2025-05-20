import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        {/* part1 */}
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-20 my-5 text-gray-600 ' >
        <div >
            <img src={assets.logo} alt="Forever Logo" className='w-40 mb-5 ' />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <p className='text-2xl mb-5 text-gray-700 font-semibold  ' >COMPANY</p>
            <div>
                <p>Home</p>
                <p>About Us</p>
                <p>Delivery</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div>
            <p className='text-2xl mb-5 text-gray-700 font-semibold ' >GET IN TOUCH</p>
            <div>
                <p>+92 1234567890</p>
                <p>sarmadzia565@gmail.com</p>
                <p>Intstagram</p>
            </div>
        </div>
      </div>
      {/* part2 */}
        <p className='bg-gray-400 h-[1px]  ' ></p>
      <div className=' my-2 text-slate-600 text-center ' >
        <p>CopyRight 2025@ SARMAD ZIA - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
