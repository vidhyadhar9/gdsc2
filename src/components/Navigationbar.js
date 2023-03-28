import React from 'react'
import { Link } from 'react-router-dom'
import './Navigationbar.css'

function Navigationbar() {
  return (
    <div className='navi'>
        <ul className="nav  p-2 fs-5" style={{justifyContent:'space-evenly'}} >
            <li className="nav-item mx-4">
                {/*Link for Home */}
                <Link className="nav-link  text-dark " to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item mx-4">
                {/*Link for Clubs*/}
                <Link className="nav-link  text-dark" to="/clubs">
                    Clubs
                </Link>
            </li>
            <li className="nav-item  mx-4">
                {/*Link for Events*/}
                <Link className="nav-link  text-dark" to="/events">
                    Events
                </Link>
            </li>
            <li className="nav-item  mx-4">
                {/*Link for ActivityLog*/}
                <Link className="nav-link  text-dark" to="/activitylog">
                    ActivityLog
                </Link>
            </li>
         
          <ul className='ms-auto  mx-4'>
          <li className="nav-item ">
                {/*Link for ActivityLog*/}
                <Link className="nav-link  text-dark " to="/adminlog">
                    Admin
                </Link>
            </li>
          </ul>
           
        </ul>        
    </div>
  );
}

export default Navigationbar