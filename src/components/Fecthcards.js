import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Fecthcards() {
    let [tdata,setvalue]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/events/get-events-details`)
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
                            <h5>{prod.Eventname}</h5>
                            <p>{prod.ClubName}</p>
                            <button  className="btn btn-primary" >Register</button>
                            </div>
                        </article>
                })
        }
        
       </div>
  )
}

export default Fecthcards