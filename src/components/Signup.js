import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

 
function Signup() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const token = 'Vidhii';
        localStorage.setItem('token',token);
        navigate('/home')
    };
  return (
    <div className="text-center">
        <h4 className="m-0 p-1  ">Registration Form</h4>

        <form className="text-center py-3 " onSubmit={handleSubmit(onSubmit)}>
            <div className="my-1">
                <input type="text" placeholder="name" {...register("name")} />
            </div>
            <div  className="my-1">
                <input type="email" placeholder="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
            </div>
            <div className="my-1">
                <input type="password" placeholder="password" {...register("password")} />
            </div>
            <div  className="mt-4">
               <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        <p>have an account <a href="/login">login</a></p>
    </div>
  )
}

export default Signup