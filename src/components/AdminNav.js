import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div className='navi'>
         <ul className="nav p-2 fs-5 " style={{justifyContent:'space-evenly'}} >
           
           
            
            <li className="nav-item mx-2">
                {/*Link for ActivityLog*/}
                <Link className="nav-link  text-dark" to="activitylog">
                    ActivityLog
                </Link>
               
            </li>
            <li className='nav-item mx-2 ms-auto'>
            <Link className='nav-link text-dark' to='AdminHome' >
                    Launch Event
                </Link>
            </li>
         
         
           
        </ul>   
    </div>
  )
}

export default AdminNav