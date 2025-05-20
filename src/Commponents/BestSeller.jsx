import React, { useEffect } from 'react'
import TitleSection from './TitleSection'
import { ShopContext } from '../Context/ShopContex'
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {currencySymbol} = React.useContext(ShopContext);
    const {products} = React.useContext(ShopContext);
    const [bestSellerProducts, setBestSellerProducts] = React.useState([]);

    useEffect(()=>{
        const bestproducts = products.filter((item)=>(item.bestseller))
        setBestSellerProducts(bestproducts.slice(0,5))
    },[])
  return (
    <div className='my-10' >
      <div className=' text-center text-3xl py-3 ' >
        <TitleSection text1='BEST' text2='SELLER' />
        <p className=' w-3/4 text-xs m-auto sm:text-sm md:text-base ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>      
      </div>
      <div className='grid grid-cols-2 sm:grid-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5' >
        {bestSellerProducts.map((item,index)=>(
            <ProductItem key={index} Id={item._id} image={item.image} title={item.name} price={item.price} currencySymbol={currencySymbol} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
