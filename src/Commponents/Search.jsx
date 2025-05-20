import React, { useEffect } from 'react'
import { ShopContext } from '../Context/ShopContex'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const {setShowSearch,showSearch,Search,setSearch} = React.useContext(ShopContext)
    const [visible, setVisible] = React.useState(false)
    const location = useLocation()
    // console.log(location.pathname)
    useEffect(()=>{
      if(location.pathname.includes('/collection')){
        setVisible(true)
      }else{
        setVisible(false)
      }
    },[location])
  return showSearch && visible ? (
    <div className=' text-center bg-gray-50 my-5 ' >
      <div className=' w-2/4 inline-flex items-center justify-center px-5 gap-2 ' >
        <input type="text" value={Search} onChange={(e)=>setSearch(e.target.value)} className='border-2 w-full border-gray-700 rounded-md px-4 py-2 outline-none' placeholder='Search...' />
        <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" className=' w-3  sm:w-5  cursor-pointer' />
      </div>

    </div>
  )
  : null
}

export default Search
