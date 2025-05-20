import React, { useEffect , useContext } from 'react'
import { ShopContext } from '../Context/ShopContex'
import '../index.css'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import RelatedProducts from '../Commponents/RelatedProducts'
const Product = () => {

const {products,currencySymbol,size,setSize,addToCart}=useContext(ShopContext)
const {productId}=useParams()
const [productData, setProductData] = React.useState([])
const [MainImage, setMianImage] = React.useState([])

const fetchProduct = async () => {
  products.map((item)=>{
    if(item._id == productId){
      setProductData(item)
      setMianImage(item.image[0])
      return null
    }
  })
}
useEffect(() => {
  fetchProduct()
},[productId])
  // console.log(productData)
  return productData? (
    <div className=' border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100 ' > 
      {/* image and product details main */}
      <div className=' flex gap-12 flex-col  sm:gap-12 sm:flex-row  ' >
        {/* image div */}
        <div className=' flex flex-col-reverse max-sm:items-center sm:flex-row gap-10  '>
          {/* small imgaes div */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {productData.image &&
            productData.image.map((item,index)=>{
              return(
                <img src={item} key={index} onClick={()=>setMianImage(item)}  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '  alt="different varient images" />
              )
            })
            }
          </div>
          {/* main image div */}
         <div className=' w-full sm:w-80%  ' >
            <img src={MainImage} className='w-full h-full' alt="" />
          </div>
        </div>
        {/* product details div */}
         <div className='' >
          <h1 className=' font-medium text-2xl mt-4 ' >{productData.name}</h1>
          <div className='flex gap-2 items-center mt-4'>
            <img src={assets.star_icon} className='h-4' alt="" />
            <img src={assets.star_icon} className='h-4' alt="" />
            <img src={assets.star_icon} className='h-4' alt="" />
            <img src={assets.star_icon} className='h-4' alt="" />
            <img src={assets.star_dull_icon} className='h-4' alt="" />
            <p>(122)</p>
          </div>
          <p className='font-semibold text-2xl mt-4 ' >{productData.price} {currencySymbol}</p>
          <p className=' text-gray-700 mt-4 ' >{productData.description}</p>
          <p className=' text-base mt-4 ' >Select Sizes</p>

          <div className='mt-4 flex gap-4 ' >
           {
            productData.sizes && 
            productData.sizes.map((item,index)=>{
              return(
                <button className={`border border-gray-500 bg-gray-100 py-2 px-4 ${size === item ? 'border-orange-500' : ''} `} onClick={() => setSize(item)} key={index} >{item}</button>
              )
            })
           }
          </div>
          <button className='py-4 px-8 bg-black active:opacity-70 mt-4 text-gray-100' onClick={()=>addToCart(productData._id,size)} >Add To Cart</button>
          <hr className='mt-10 text-gray-300'  />
          <p className='mt-10 text-gray-500' >100% Original Product</p>
          <p className='mt-2 text-gray-500' >Cash on delivery is available on this product.</p>
          <p className='mt-2 text-gray-500' >Easy return and exchange policy within 7 days.</p>

         </div>
      </div>
      <div>
        <div className='flex items-center mt-10 ' >
          <p className='border border-gray-300 font-semibold  px-4 py-2 ' >Description</p>
          <p className='border border-gray-300 px-4 py-2 text-base ' >Reviews(122)</p>
        </div>
        <div className='border border-gray-300 px-6 py-6 text-gray-500' >
          <p>
          An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
          </p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ): (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className='text-3xl font-bold'>Loading...</h1>
    </div>
  )
}

export default Product
