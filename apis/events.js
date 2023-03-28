const exp = require('express')
const eventsapp = exp.Router()

//body Parser
eventsapp.use(exp.json())

//POST request
eventsapp.post('/create-event' , (request, response)=>{
    const eventsCollectionObj = request.app.get("eventsCollectionObj")

    let eventDetails = request.body;
    eventsCollectionObj.insertOne(eventDetails)
    .then(dbRes=>{
        console.log(dbRes)
        response.send({
            message:"Successfully posted event details",
            payload:dbRes
        })
    })
    .catch(err =>{
        console.log("Error is: " , err);
        response.send({
            message:"Error at get-events-details is :" , 
            payload:err.message
        });
    })
})


//GET request
eventsapp.get('/get-events-details' , (request,response)=>{
    const eventsCollectionObj = request.app.get("eventsCollectionObj" )

    eventsCollectionObj.find().toArray()
    .then((eventsDetails)=>{
        console.log(eventsDetails);
        response.send({
            message:"List of events:",
            payload: eventsDetails
        })
    })
    .catch(err => {
        console.log("Error at eventsapp(L:7) :",err);
        response.send({message:"Error" , payload:err.message})
    }  )
})

//export events app
module.exports = eventsapp