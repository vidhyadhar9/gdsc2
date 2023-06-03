const exp = require('express')
const adminapp = exp.Router()

//body parser
adminapp.use(exp.json());



//GET request
adminapp.get('/get-admin-details' , (request, response ) =>{
    const adminCollectionObj = request.app.get('adminCollectionObj')

    adminCollectionObj.find().toArray()
    .then((adminDetails)=>{
        console.log(adminDetails)
        response.send({
            message:"Admin details" , 
            payload: adminDetails
        })
    })
    .catch(err=>{
        console.log("Error in get-admin-details : " ,err);
        response.send({message:"Error",payload:err});
    })
})

//Export
module.exports=adminapp;