import React, { useEffect} from 'react'
import TitleSection from '../Commponents/TitleSection'
import { ShopContext } from '../Context/ShopContex'
import ProductItem from './ProductItem'

const RelatedProducts = ({category,subCategory}) => {
    const [RelatedProducts, setRelatedProducts] = React.useState([])
    const{ products,currencySymbol} = React.useContext(ShopContext)
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => item.category === category);
            productsCopy = productsCopy.filter((item) => item.subCategory === subCategory );
            setRelatedProducts(productsCopy.slice(0, 5)); // Update the state here!
            // console.log(productsCopy.slice(0, 5)); // Update the state here!
         }
    },[products, category, subCategory]) // Added category and subCategory to the dependency array
    // console.log(category,subCategory)
return (
    <div className='mt-10 ' >
        <div className='text-center text-2xl sm:text-3xl md:text-4xl' >
        <TitleSection text1='Related' text2='Products' />
        </div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-5   ' >
            {
                RelatedProducts.map((item,index)=>{
                    return(
                        <ProductItem key={index} Id={item._id} image={item.image} title={item.name} price={item.price} currencySymbol={currencySymbol} />
                    )
                })
            }
        </div>
    </div>
)
}

export default RelatedProducts