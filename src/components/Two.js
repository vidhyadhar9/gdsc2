import React from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

function Two() {
  return (
    <div>
       <AdminNav/>
       <div style={{minBlockSize:"100vh"}}>
        <Outlet/>
        </div>
       <Footer/>

    </div>
  )
}

export default Two