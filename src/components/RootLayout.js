import React from 'react'
import Navigationbar from './Navigationbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
  return (
    <div className='footer'>
        <Navigationbar/>
        {/*PLaceholder for dynamic content */}
        <div style={{minBlockSize:"100vh"}}>
        <Outlet/>
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout