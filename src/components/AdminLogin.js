import { computeHeadingLevel } from '@testing-library/react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react';

function AdminLogin(){
  const form = useRef(); 
  const navigation=useNavigate();
 let {register,handleSubmit,formState:{errors}}=useForm();
 
 
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

let submitform= async (userObj)=>{
  try{
    fetch("http://localhost:5000/admin/get-admin-details",{
    method:"POST",
    headers:{
      'content-Type':'application/json',
    },
    body:JSON.stringify(userObj)
    
});
navigation("/two");
}catch(error){
  console.error("Error:", error);
}


};




  return (
    <>
      {/* Include the login button in the navbar */}
      <Button variant="primary" onClick={handleShow}>
         AdminLog
      </Button>
   

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome Back!!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
                 {/*Form */}
                 
                <form onSubmit={handleSubmit(submitform)} >
               
              
                    <div >
                       {/*Email*/}  
                    <label htmlFor="username" className='mb-1'>Username</label>
                    <input type="email" id="username" className='form-control mb-3' {...register("username",{required:true})}/>
                    {errors.name?.type==="required" && <p className='text-danger'>*is required</p>}
                    </div>
                      
                    <div>
                          {/*phone number*/}
                    <label htmlFor="password" className='mb-1'>Password</label>
                    <input type="password" id="password" className='form-control mb-3' {...register("password",{required:true})}/>
                    {errors.name?.type==="required" && <p className='text-danger'>*is required</p>}
                    
                    </div>
                    
                      <button type="submit" className='btn btn-success mb-3'>Submit</button>
                    
                   

                </form>
        </Modal.Body>
     
    </Modal>
  </>
   



   
  )

}

export default AdminLogin
