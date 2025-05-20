import React from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/ContactUs'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Layout from './Layout/Layout'
import Search from './Commponents/Search'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ' >
      <Layout>
        <ToastContainer/>
        <Search/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/placeorder' element={<PlaceOrder/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='*' element={<div>Page Not Found</div>} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App