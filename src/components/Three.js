import React from 'react'
import ClubLeadNav from './ClubLeadNav'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

function Three() {
  return (
    <div>
        <ClubLeadNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Three