import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginPost() {
  const form = useRef();
  const navigation = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = async (userObj) => {
    try {
      await fetch("http://localhost:5000/LoginDetails/user-signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj)
      });
     
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Include the login button in the navbar */}
      <Button variant="primary" onClick={handleShow}>
        Signup
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginPost;
