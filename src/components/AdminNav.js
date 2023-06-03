import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      
        <Navbar.Brand>
          <img src="https://cdn.dribbble.com/users/1192832/screenshots/16128739/media/a72249d81d9977263f26465f8a1658ad.png?compress=1&resize=400x300" width="60" height="60" alt="" className='rounded-circle p-1'  />
        </Navbar.Brand>
        <Nav className='justify-content-end flex-grow-1 pe-3'>
      
            {/*Link for ActivityLog*/}
            <Link className="nav-link  " to="activitylog">
                    ActivityLog
            </Link>
        
      
            <Link className='nav-link ' to="AdminHome" >
                    Launch Event
            </Link>
        
         
        </Nav>
      
    </Navbar>
  </div>
    
  )
}

export default AdminNav