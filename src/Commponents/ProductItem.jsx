import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({image,Id,title,price,currencySymbol}) => {
    
  return (
    <Link to={`/product/${Id}`} className='hover:scale-105 transition-shadow duration-300 mb-2'>
      <img src={image[0]} alt="" />
      <p className='text-gray-500' >{title}</p>
      <p>{price}-{currencySymbol}</p>
    </Link>
  )
}

export default ProductItem
