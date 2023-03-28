import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Vcards from './Vcards';


function sponsers() {
   let a={
    image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
   }
    
  return (
    <div className='mb-5 d-flex '>
         <img src='https://img.freepik.com/free-vector/purple-abstract-geometrical-logo-3d_1043-55.jpg?size=338&ext=jpg'></img>
         <img src='https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?size=338&ext=jpg'></img>
         <img src='https://img.freepik.com/free-vector/computer-shape-logo-template_1071-83.jpg?size=338&ext=jpg'></img>
         <img src='https://img.freepik.com/free-vector/gradient-technology-logo_52683-8564.jpg?size=338&ext=jpg'></img>
    </div>
  )
}

export default sponsers