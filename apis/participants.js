const exp = require('express')
const participantsapp = exp.Router()

//body parser
participantsapp.use(exp.json())

//POST request
participantsapp.post('/create-participant' ,(request ,response)=>{
    const participantsCollectionObj = request.app.get("participantsCollectionObj")

    let participantDetails = request.body;
    participantsCollectionObj.insertOne(participantDetails)
    .then(dbRes =>{
        console.log(dbRes);
        response.send({
            message:"Suuccesfully Created a participant",
            payload: dbRes
        })
    })
    .catch(err=>{
        console.log("Error is :" ,err);
        response.send({
            message:"Error at create-participants" , 
            payload:err.message
        })
    })
})

//GET request
participantsapp.get('/get-participants-details', (request,response)=>{
    const participantsCollectionObj =request.app.get("participantsCollectionObj")

    participantsCollectionObj.find().toArray()
    .then((participantsDetails)=>{
        console.log(participantsDetails);
        response.send({
            message:"Participants Details ",
            payload:participantsDetails
        })
    })
    .catch(err=>{
        console.log("Error at get-participants-detail: " ,err);
        response.send({message:"Error" ,payload:err.message})
    })
})


module.exports=participantsapp;