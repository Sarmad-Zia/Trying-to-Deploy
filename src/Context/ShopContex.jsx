import { useState,useEffect, createContext, use } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [Search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [size,setSize] = useState('')
  const [cartItems, setCartItems] = useState({});
  const currencySymbol = "$";
  const shippingCost = 10;
  const Navigate = useNavigate()
  
  const addToCart = async (productId,size)=>{
    let cartData = structuredClone(cartItems)
    if(!size){
      toast.error('Please select a size')
      return
    }
    if(cartData[productId]){
      if(cartData[productId][size]){
        cartData[productId][size] += 1
      }else{
        cartData[productId][size] = 1
      }
    }else{
      cartData[productId] ={}
      cartData[productId][size] = 1
    }
    setCartItems(cartData)
  }
  const getCount = ()=>{
    let totalCount = 0
    for(const items in cartItems){
      for(const size in cartItems[items]){
        if(cartItems[items][size] > 0){
          try {
            totalCount += cartItems[items][size]
          } catch (error) {
            
          }
        }
      }
    }
    return totalCount
  }
  // function to update the value of cart count
  const updateQuantity =  (item,size,Quantity)=>{
    let cartData = structuredClone(cartItems)
    cartData[item][size]=Quantity
    setCartItems(cartData)
  }
  // function that calcultate the total amount
  const totalAmount = ()=>{
    let total=0
    for(const items in cartItems){
      let CartProduct = products.find((item)=>item._id === items)
      for(const size in cartItems[items]){
        if(cartItems[items][size]>0){
          total  +=CartProduct.price*cartItems[items][size]
        }
      }
    }
    return total
  }
  const Values = {
    products,
    currencySymbol,
    shippingCost,getCount,Navigate,
    showSearch,setSearch,Search,setShowSearch,size,setSize,addToCart,cartItems,setCartItems,updateQuantity,totalAmount
  };

  return (
    <ShopContext.Provider value={Values}>
      {children}
    </ShopContext.Provider>
  );
}
export default ShopProvider;