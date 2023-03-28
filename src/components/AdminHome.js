import React from 'react'
import {useForm} from 'react-hook-form'

function AdminHome() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let submitform=(userObj)=>{
   
      fetch("http://localhost:5000/events ",{
      method:"POST",
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(userObj)
      
  })
  .then(res=>res.json())
  .then(message=>console.log(message))
  .catch(err=>console.log("err is",err))
}

  return (
    <div className="container">
        <h1 className='text-center mt-5'>Hello Admin!!</h1>
    <div className=" card mt-5 p-3 mx-auto cigi" style={{width:'500px',borderRadius:'5%',backgroundColor:"rgb(255,204,153)"}}>
        <div className="col-11 col-sm-8 col-md-6  mx-auto  " >
        <h1 className="  mb-5 text-center  ">Launch New Event</h1>
             {/*Form */}
             
            <form onSubmit={handleSubmit(submitform)} >
           
          
                <div >  
                <label htmlFor="Eventname" className='mb-1'>Eventname</label>
                <input type="text" id="Eventname" className='form-control mb-3' {...register("Eventname")}/>
                
                </div>
                <div >  
                <label htmlFor="Venue" className='mb-1'>Venue</label>
                <input type="text" id="Venue" className='form-control mb-3' {...register("Venue")}/>
               
                </div>
                <div >  
                <label htmlFor="Time" className='mb-1'>Time</label>
                <input type="date" id="Time" className='form-control mb-3' {...register("Time")}/>
               
                </div>
                <div >  
                <label htmlFor="ClubName" className='mb-1'>Club Name</label>
                <input type="text" id="ClubName" className='form-control mb-3' {...register("ClubName")}/>
               
                </div>
                <div >  
                <label htmlFor="ClubAdmin" className='mb-1'>Club Admin</label>
                <input type="text" id="ClubAdmin" className='form-control mb-3' {...register("ClubAdmin")}/>
               
                </div>
                <div >  
                <label htmlFor="PrizeMoney" className='mb-1'>Prize Money</label>
                <input type="tel" id="PrizeMoney" className='form-control mb-3' {...register("PrizeMoney")}/>
               
                </div>
               

               
                <button type="submit" className='btn btn-success mb-3'>Submit</button>

            </form>
        </div>
    </div>
</div>



  )
}

export default AdminHome