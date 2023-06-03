import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginPost from './LoginPost';
import axios from 'axios';

function ClubLeadLogin() {
  const form = useRef();
  let [err,seterr] = useState([])
  const navigation = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  let submitForm = (userObj) => {
    axios.post("http://localhost:5000/LoginDetails/user-login",{username:userObj.username,password:userObj.password})
       .then(response=>{
        console.log(response.data)
      }).
      catch(err=>{
        console.log("err is",err)
        
        if(err.response){
         seterr(err.message)
        }
        else if(err.request){
          seterr(err.message)
        }
        else{
          seterr(err.message)
        }})
    
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Include the login button in the navbar */}
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome Back!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form */}
          <form onSubmit={handleSubmit(submitForm)}>
            <div>
              {/* Email */}
              <label htmlFor="username" className='mb-1'>Username</label>
              <input type="email" id="username" className='form-control mb-3' {...register("username", { required: true })} />
              {errors.username?.type === "required" && <p className='text-danger'>* is required</p>}
            </div>

            <div>
              {/* Password */}
              <label htmlFor="password" className='mb-1'>Password</label>
              <input type="password" id="password" className='form-control mb-3' {...register("password", { required: true })} />
              {errors.password?.type === "required" && <p className='text-danger'>* is required</p>}
            </div>

            <button type="submit" className='btn btn-success mb-3'>Submit</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* Add any additional footer content if needed */}
          <LoginPost/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClubLeadLogin;
