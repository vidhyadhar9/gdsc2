import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Vcards from './Vcards';
import Hcards from './Hcards';
import {Outlet} from 'react-router-dom'
import acm1 from './acm1.jpg'


function Clubs() {
 

  let a={
    title:"ACM",
    image:"https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/305751560_595400452284972_2101828109348971670_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GJ8wim2c7x4AX9H5XC_&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDKYWK0TzljisR5dF3p_VczO4nh2yvV_W79y3IIU7u8Mw&oe=64276A50",
    info:"Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance. Especially in academic environments, having a sense of belonging and community for students can lead to success in tech together    ",
    rou:"acm"
  }
  let b={
    title:"GDSC",
    image:"https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/307568348_417311537194743_4344317742106716535_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rdVdVWJrL8wAX-zeE-k&_nc_ht=scontent.fhyd9-1.fna&oh=00_AfDNygkadAvP4wl9rCibO0yFdmP1r2ScWscq7nWsBFyryw&oe=64272644",
    info:"Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance. Especially in academic environments, having a sense of belonging and community for students can lead to success in tech together",
     rou:"gdsc"
  }
  let c={
    title:"Art Of Living",
    image:"https://1000logos.net/wp-content/uploads/2019/03/IEEE-Logo-768x432.png",
    info:"Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance. Especially in academic environments, having a sense of belonging and community for students can lead to success in tech together"
  }
  let d={
    title:"IEEE",
    image:"https://klecet.edu.in/assets/admin/ckeditor/kcfinder/upload/images/csi-logo-300x300.png",
    info:"Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance. Especially in academic environments, having a sense of belonging and community for students can lead to success in tech together"
  }
  let e={
    title:"CSI",
    image:"https://radiozindagi.com/wp-content/uploads/2016/06/Art-of-Living-Logo.jpg",
    info:"Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance. Especially in academic environments, having a sense of belonging and community for students can lead to success in tech together"
  }
  return (
    <div>
  
     
     <div className='container'>
      <div className='d-flex mt-3' style={{justifyContent:'space-around'}}>
        <Vcards x={a}/>
        <Vcards x={b}/>
      </div>
      <div>
      <Hcards x={e}/>
     </div>
     <div className='d-flex' style={{justifyContent:'space-around'}}>
        <Vcards x={c}/>
        <Vcards x={d}/>
      </div>
      </div>
     <Outlet/>
    </div>
  )
}

export default Clubs