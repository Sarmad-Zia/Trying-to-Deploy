import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../Context/ShopContex';
import TitleSection from '../Commponents/TitleSection';
import ProductItem from '../Commponents/ProductItem'

const Collection = () => {
  
  const {products,currencySymbol,Search,showSearch} = useContext(ShopContext)
  
  const [filterProducts, setFilterProducts] = React.useState([])

  const [SubCategory, setSubCategory] = React.useState([])
  
  const [showFilter, setShowFilter] = React.useState(false)
  const [Sorted,setsort] = React.useState('relevant')

  const sortproducts = ()=>{
    let pcopy = filterProducts.slice()
    switch(Sorted){
      case 'Low to High':
        setFilterProducts(pcopy.sort((a,b)=> a.price - b.price))
        break;
      case 'High to Low':
        setFilterProducts(pcopy.sort((a,b)=> b.price - a.price))
        break;  
        default:
          applyFilter()
          break;
      }
    }
  
  const [Category, setCategory] = React.useState([])

  const applyFilter = () => {
    let productCopy = products.slice()
      if(Search && showSearch){
        productCopy=productCopy.filter((item)=>item.name.toLowerCase().includes(Search.toLowerCase()))
      } 
      if(Category.length>0){
        productCopy= productCopy.filter((item)=>Category.includes(item.category))
      }
      if(SubCategory.length>0){
         productCopy= productCopy.filter((item)=>SubCategory.includes(item.subCategory))
      }
    setFilterProducts(productCopy)

  }
  
  const CategoryHandler = (e) => {
  
  
    if(Category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
  
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  
  }
  
  const handlFilter=()=>{
  
    if(!showFilter){
      setShowFilter(true)
    }
    
    else{
      setShowFilter(false)
    }
  }

  const SubCategoryHandler = (e) => {

    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
  
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  
  }
  useEffect(() => {
    sortproducts()
  },[Sorted])
  useEffect(() => {
    applyFilter()
  },[Category,SubCategory,Search,showSearch])
  
  return (
    <>
      <p className='h-[1px] bg-slate-300 mb-5 '  ></p>
      <div className='flex flex-col gap-10  sm:flex-row' > 
      {/* Filter Section */}
      <div className=' flex flex-col gap-2 px-2 sm:gap-10  py-5 sm:py-20 min-w-60 text-slate-700 ' >
        <p className=' text-xl sm:text-2xl text-gray-700 font-semibold flex items-center gap-2 ' onClick={handlFilter} >FILTER <img src={assets.dropdown_icon} className={`sm:hidden h-4 ${showFilter ? 'rotate-90':'rotate-360'} `}  alt="" /> </p>
        
        <div className={`flex flex-col gap-2 border border-slate-300 p-5   ${showFilter ? 'block' : 'hidden'} sm:flex `} >
          <p className='text-xl sm:text-2xl text-gray-400' >Category</p>
          <p><input type="checkbox" onChange={CategoryHandler} name="" id="men" value='Men'/><label htmlFor='men'> Men </label></p>
          <p><input type="checkbox" onChange={CategoryHandler} name="" id="women" value='Women'/><label htmlFor='women'> Women </label></p>
          <p><input type="checkbox" onChange={CategoryHandler} name="" id="kids" value='Kids'/><label htmlFor='kids'> Kids </label></p>
        </div>
        {/* subfilter */}
        <div className={`flex flex-col gap-2 border border-slate-300 p-5   ${showFilter ? 'block' : 'hidden'} sm:flex `} >
          <p  className='text-xl sm:text-2xl text-gray-400' >Type</p>
          <p><input type="checkbox" onChange={SubCategoryHandler} name="" id="topwear" value='Topwear' /><label htmlFor='topwear'> Topwear</label></p>
          <p><input type="checkbox" onChange={SubCategoryHandler} name="" id="bottomwear" value='Bottomwear' /><label htmlFor='bottomwear'> Bottomwear</label></p>
          <p><input type="checkbox" onChange={SubCategoryHandler} name="" id="winterwear" value='Winterwear' /><label htmlFor='winterwear'> Winterwear</label></p>
        </div>
      </div>
      {/* main content */}
      <div className='flex-1' >
        <div className=' flex justify-between text-2xl sm:text-3xl ' >
          <TitleSection text1='All' text2='Collection'  />
          <select onChange={(e)=>setsort(e.target.value)} className='text-base' name="" id="">
          <option value="relevant">Sort by Relevant</option>
          <option value="Low to High">Sort by Low to High</option>
          <option value="High to Low">Sort by High to Low</option>
        </select>
        </div>
        {/* porduct listing */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 '>
        {filterProducts.map((item,index) => (
         <ProductItem key={index} Id={item._id} image={item.image} title={item.name} price={item.price} currencySymbol={currencySymbol} />
        ))}
      </div>
      </div>
    </div>
    </>
  )
}

export default Collection
