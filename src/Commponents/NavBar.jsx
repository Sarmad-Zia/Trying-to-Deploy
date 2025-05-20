import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContex'; 

const NavBar = () => {
  const [visible, setVisible] = React.useState(false);
  const {showSearch,setShowSearch,getCount}=useContext(ShopContext)
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className='flex justify-between items-center py-4 px-4  font-medium '>

      <Link to='/' ><img src={assets.logo} className=' w-36 ' alt="logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
        <NavLink to='/' className='flex flex-col items-center' >
          <p className='text-[1.2rem]' >Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center' >
          <p className='text-[1.2rem]' >Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='about' className='flex flex-col items-center' >
          <p className='text-[1.2rem]' >About Us</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='contact' className='flex flex-col items-center' >
          <p className='text-[1.2rem]' >Contact Us</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
      </ul>

      <div className='flex gap-6 items-center ' >
        <img onClick={handleSearch} src={assets.search_icon} className='w-3 sm:w-5  cursor-pointer ' alt="" />
        <div className="relative group ">
          <Link to='/login' ><img src={assets.profile_icon} alt="profile_icon" className='w-3 sm:w-5 ' /></Link>
          <div className=" group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className='bg-slate-100 text-gray-700 flex flex-col w-36 px-5 py-3 gap-2 ' >
              <p className='hover:text-black cursor-pointer' >My Profile</p>
              <Link to='/orders' >
              <p className='hover:text-black cursor-pointer' >Orders</p>
              </Link>
              <p className='hover:text-black cursor-pointer' >Logout</p>
            </div>
          </div>
        </div>
        {/* cart icon */}
        <Link to='cart' className='relative ' >
          <img src={assets.cart_icon} className='w-3 sm:w-5 sm:min-w-5' alt="" />
          <p className=' bg-black text-white absolute  right-[-5px] bottom-[-4px] sm:bottom-[-5px] sm:w-4 w-3 text-center rounded-full  text-[6px] sm:text-[8px] aspect-square sm:leading-4 leading-3 ' >{getCount()}</p>
        </Link>
      </div>

      {/* mobile menu */}
      <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu_icon" className=' w-5 min-w-5 cursor-pointer sm:hidden' />

    <div className={`absolute top-0 bottom-0 right-0 overflow-hidden transition-all bg-slate-100 py-4 ${visible ? 'w-full px-4' : 'w-0'} `} >
        <div onClick={() => setVisible(false)} className='flex items-center gap-2 cursor-pointer font-mono text-slate-700 text-xl' >
            <img src={assets.dropdown_icon} className=' rotate-180 w-3' alt="" />
            <p>Back</p>          
        </div>

        <div className='flex flex-col mt-4 items-center gap-4' >
                <NavLink onClick={()=>setVisible(false)} to='/' className=' border-b pl-6 p-2 border-slate-400 w-full ' >
                    Home
                </NavLink>
                <NavLink onClick={()=>setVisible(false)} to='collection' className=' border-b pl-6 p-2 border-slate-400 w-full ' >
                    Collection
                </NavLink>
                <NavLink onClick={()=>setVisible(false)} to='about' className=' border-b pl-6 p-2 border-slate-400 w-full ' >
                    About Us
                </NavLink>
                <NavLink onClick={()=>setVisible(false)} to='contact' className=' border-b pl-6 p-2 border-slate-400 w-full ' >
                    Contact Us
                </NavLink>
            </div>

            
    </div>

    </div>
  );
};

export default NavBar;