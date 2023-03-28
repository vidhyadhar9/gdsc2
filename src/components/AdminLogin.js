import { computeHeadingLevel } from '@testing-library/react'
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom';
function AdminLogin(){
  const form = useRef(); 
  const navigation=useNavigate();
 let {register,handleSubmit,formState:{errors}}=useForm()
 
let submitform=(userObj)=>{
  navigation("/two")
    fetch("http://localhost:5000/users ",{
    method:"POST",
    headers:{
      'content-Type':'application/json',
    },
    body:JSON.stringify(userObj)
    
})
.then(res=>res.json())
.then(message=>console.log(message))
.catch(err=>console.log("err is",err))


 let sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
}


  return (
  <div>

    <div className="container">
        
        <div className=" card mt-5 p-3 mx-auto cigi" style={{width:'500px',borderRadius:'5%'}}>
            <div className="col-11 col-sm-8 col-md-6  mx-auto  " >
            <h1 className="  mb-5 text-center  ">Admin Login Form</h1>
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
                    <input type="tel" id="password" className='form-control mb-3' {...register("password",{required:true})}/>
                    {errors.name?.type==="required" && <p className='text-danger'>*is required</p>}
                    
                    </div>
                  
  
                   
                    <button type="submit" className='btn btn-success mb-3'>Submit</button>

                </form>
            </div>
        </div>
    </div>
    
    </div>

   
  )

}

export default AdminLogin
