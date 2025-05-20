import React, { Children } from 'react'
import NavBar from '../Commponents/NavBar'
import Footer from '../Commponents/Footer'
const Layout = ({children}) => {
  return (
    <>
        <NavBar />
            <main>{children}</main> 
        <Footer/>
    </>
  )
}

export default Layout
