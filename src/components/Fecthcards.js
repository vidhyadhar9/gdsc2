import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Fecthcards() {
    let [tdata,setvalue]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>res.json())
        .then(data=>setvalue(data))
        .catch(err=>console.log("err is ",err))
    },[])
  return (
<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 back justify-content-evenly'>
        
       
        {
            tdata.map((prod,index) => {
                return  <article className="card m-3" style={{ width: '18rem' }}  >
                            <img src={prod.url} alt="Sample photo" height="300px"/>
                            <div class="text">
                            <h5>{prod.id}</h5>
                            <p>{prod.title}</p>
                            <button  className="btn btn-primary" >Register</button>
                            </div>
                        </article>
                })
        }
        
        <button className="btn btn-primary" onClick={()=>window.location.reload(true)}>reload</button>
        
       </div>
  )
}

export default Fecthcards