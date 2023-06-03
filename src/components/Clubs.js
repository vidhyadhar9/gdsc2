import React from 'react'
import {Form, Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Vcards from './Vcards';
import Hcards from './Hcards';
import {Outlet} from 'react-router-dom'
import acm1 from './acm1.jpg'
import {useState,useEffect} from 'react'

function Clubs() {
 

  let [tdata,setvalue]=useState([])
  useEffect(()=>{
      fetch(`http://localhost:5000/clubs/get-all-clubs`)
      .then((res)=>res.json())
      .then(data=>setvalue(data.payload))
      .catch(err=>console.log("err is ",err))
  },[])
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 back justify-content-evenly'>
        
       
    {
        tdata.map((prod,index) => {
            return  <article className="card m-3" style={{ width: '18rem' }}  >
                        <div class="text">
                        <h5>Name:{prod.name}</h5>
                        <p>{prod.decription}</p>
                        <h5>Faculty Coordinate:{prod.facultycoordinator}</h5>
                        <h5>Student Coordinate:{prod.studentcoordinator}</h5>
                      
                        <button  className="btn btn-primary" >Register</button>
                        </div>
                    </article>
            })
    }
    
   </div>
  )
}

export default Clubs