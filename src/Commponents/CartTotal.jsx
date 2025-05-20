import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import TitleSection from './TitleSection'

const CartTotal = () => {
    const {products,cartItems,currencySymbol,updateQuantity,shippingCost,totalAmount} = useContext(ShopContext)
  return (
    <div className='w-full' >
        <div className=' flex flex-col justify-between '>
            <div className='text-2xl ' >
                <TitleSection text1='Cart ' text2='Total' />
            </div>
            <div className='flex justify-between py-3 px-2 text-sm' >
                <p>SubTotal</p>
                <p>{currencySymbol}{totalAmount()}.00</p>
            </div>
            <div className=' flex justify-between border-t px-2 py-3 border-b border-gray-400 text-sm' >
                <p>Shipping Fee</p>
                <p>{currencySymbol}{shippingCost}.00</p>
            </div>
            <div className='flex justify-between py-3 px-2 font-semibold text-sm' >
                <p>Total</p>
                <p>{currencySymbol}{totalAmount() === 0 ? '0' :totalAmount() + shippingCost }.00</p>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotal
