import React, { useContext, useEffect, useState } from 'react'
import TitleSection from '../Commponents/TitleSection'
import { ShopContext } from '../Context/ShopContex'
import { assets } from '../assets/frontend_assets/assets'
import CartTotal from '../Commponents/CartTotal'
import { toast } from 'react-toastify'
const Cart = () => {
  const {products,cartItems,currencySymbol,updateQuantity,getCount,Navigate} = useContext(ShopContext)
  const [cartData, setCartData] = useState([]); // Corrected line
  useEffect(()=>{
    const tempData = []
    for(const items in cartItems){
      for(const sizes in cartItems[items])
      {        
        if(cartItems[items][sizes]>0){
          tempData.push({
            productID: items,
            size: sizes,
            Quantity: cartItems[items][sizes]
          })
        }
      }
    }
    // console.log(tempData)
    setCartData(tempData);

  },[cartItems])
  const proceedToCheckOut =()=>{
    if(!(getCount()===0)){
      Navigate('/placeorder')
      // console.log(getCount)
    }
    else{
      toast.error('EMPTY CART ')
    }
  }
  return (
    <div className='py-10 border-t border-gray-300 ' >
      <div className=' text-2xl sm:text-3xl md:text-4xl ' >
        <TitleSection text1='My' text2='Cart' />
      </div>


      {/* here is the section where all cart items will display  */}
      <div className='py-10  ' >
        {/* here is the items of cart */}
        {
          cartData.map((item,index)=>{

            const product = products.find((productI)=>productI._id===item.productID)
            // console.log(product)
            return(
              // each item's div
              <div key={index} className=' py-5 border-t border-b border-gray-300 grid grid-cols-[4fr_0.5fr_0.5fr] items-center '   >
                {/* here is the image div then size and name div in one */}
                <div className=' flex items-start gap-4 ' >
                  <img src={product.image[0]} className= ' w-10 sm:w-20 ' alt="" />
                  {/* here we have size name and price */}
                  <div>
                    <p className=' text-lg sm:text-xl text-gray-500  ' >{product.name}</p>
                    {/* div for price and size */}
                    <div className='flex gap-3 mt-4 items-center ' >
                      <p className=' font-bold  sm:text-xl ' >  {product.price}{currencySymbol}</p>
                      <p className=' px-4 py-2 bg-gray-100 border border-gray-500 ' >{item.size}</p>
                    </div>
                  </div>
                </div>
                <input type="number" min={1} defaultValue={item.Quantity} onChange={(e)=>e.target.value===''||e.target.value===0?null:updateQuantity(item.productID,item.size,Number(e.target.value))}  className=' max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border h-fit ' />
                <img onClick={()=>updateQuantity(item.productID,item.size,0)} src={assets.bin_icon} alt=""  className='w-5' />
              </div>
            )

          }
          )
        }
      </div>
      {/* total cart component */}
      <div className='flex justify-end w-full ' >
        <div className='w-full sm:w-[450px]' >
          <CartTotal/>  
        <div className='mt-2 flex justify-end' >
          <button className='bg-black text-white text-center px-4 py-2  ' onClick={()=>proceedToCheckOut()} >Proceed To Checkout</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
