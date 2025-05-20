import React, { useContext, useEffect } from 'react'
import TitleSection from './TitleSection'
import { ShopContext } from '../Context/ShopContex'
import ProductItem from './ProductItem';
const LatestCollection = () => {

  const {products,currencySymbol} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = React.useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])
  // console.log(latestProducts)
  return (
    <div>
      <div className=' text-center text-3xl py-5 ' >
        <TitleSection text1="Latest" text2="Collection" />
        <p className=' w-3/4 text-xs m-auto sm:text-sm md:text-base ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 '>
        {latestProducts.map((item,index) => (
         <ProductItem key={index} Id={item._id} image={item.image} title={item.name} price={item.price} currencySymbol={currencySymbol} />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection