import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigationbar.css';
import ClubLeadLogin from './ClubLeadLogin';
import AdminLogin from './AdminLogin';

function Navigationbar() {
  
  const navigate = useNavigate();
  const [isUSerLogedIN,setIsUserLogedIn] = useState(false);
  useEffect(()=>{
    let token = localStorage.getItem('token');
    console.log(token)
    if(token) {setIsUserLogedIn(true);navigate('/home')}
    else setIsUserLogedIn(false);
  },[localStorage.getItem('token')])

  return (
    <div className='navi d-flex '>
      <div>
        <ul className="nav p-2 fs-5 ">
          <li className="nav-item mx-4">
            {/* Link for Home */}
            <Link className="nav-link text-white" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item mx-4">
            {/* Link for Clubs */}
            <Link className="nav-link text-white" to="/clubs">
              Clubs
            </Link>
          </li>
          {
              isUSerLogedIN&&<li className="nav-item mx-4">
              {/* Link for Events */}
              <Link className="nav-link text-white" to="/events">
                Events
              </Link>
            </li>
          }     
          <li className="nav-item mx-4">
            {/* Link for ActivityLog */}
            <Link className="nav-link text-white" to="/activitylog">
              Activity-Log
            </Link>
          </li>
        </ul>
      </div>
      <div>
       { isUSerLogedIN?
          <button onClick={()=>{localStorage.clear() ; navigate('/')}} className='my-auto d-block btn btn-info'>Logout</button>:
          <button  onClick={()=>{navigate("/" )}}   className='my-auto d-block  btn btn-info'>Login</button> }
      </div>  
      <div>
       {!isUSerLogedIN&&<button  onClick={()=>{navigate("/" )}}   className='my-auto d-block mx-2  btn btn-info'>Admin Login</button>}
      </div>      
    </div>
  );
}

export default Navigationbar;
