import React from 'react'
import { Link } from 'react-router-dom'
import './Navigationbar.css'

function ClubLeadNav() {
  return (
    <div>
         <ul className="nav bg-dark p-2 fs-5" style={{justifyContent:'space-evenly'}} >
            <li className="nav-item mx-4">
                {/*Link for Home */}
                <Link className="nav-link  text-white " to="/three">
                    Home
                </Link>
            </li>
            <li className="nav-item mx-4">
                {/*Link for Clubs*/}
                <Link className="nav-link  text-white" to="events">
                    Events
                </Link>
            </li>
            
            <li className="nav-item  mx-4">
                {/*Link for ActivityLog*/}
                <Link className="nav-link  text-white" to="activitylog">
                    ActivityLog
                </Link>
            </li>
         
         
           
        </ul> 
    </div>
  )
}

export default ClubLeadNav