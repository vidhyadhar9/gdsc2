import React from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css';
import ClubLeadLogin from './ClubLeadLogin';
import AdminLogin from './AdminLogin';

function Navigationbar() {
  return (
    <div className='navi d-flex'>
      <ul className="nav p-2 fs-5 ">
        <li className="nav-item mx-4">
          {/* Link for Home */}
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mx-4">
          {/* Link for Clubs */}
          <Link className="nav-link text-white" to="/clubs">
            Clubs
          </Link>
        </li>
        <li className="nav-item mx-4">
          {/* Link for Events */}
          <Link className="nav-link text-white" to="/events">
            Events
          </Link>
        </li>
        <li className="nav-item mx-4">
          {/* Link for ActivityLog */}
          <Link className="nav-link text-white" to="/activitylog">
            ActivityLog
          </Link>
        </li>
      </ul>
      <div className=" d-flex align-items-center justify-content-end flex-grow-1 pe-3">
        {/* Include the ClubLeadLogin component */}
        <ClubLeadLogin />
        {/* Include the AdminLogin component */}
        <AdminLogin />
      </div>
    </div>
  );
}

export default Navigationbar;
