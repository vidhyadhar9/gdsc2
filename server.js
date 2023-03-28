const exp=require('express')
const app = exp()
app.listen(3500 , ()=>{console.log("Server Running on 3500 port")})

//CONNECT TO DATABASE
//import mongo Client
const mClient = require('mongodb').MongoClient
//connect ot Mongo server
mClient.connect('mongodb://127.0.0.1/27017')
.then((dbRef)=>{
    const eventManageDbObj = dbRef.db('eventmanage')
    const eventsCollectionObj = eventManageDbObj.collection('events');
    const clubsCollectionObj = eventManageDbObj.collection('clubs');
    const participantsCollectionObj = eventManageDbObj.collection('participants');
    const adminCollectionObj = eventManageDbObj.collection('adminData');

    app.set("eventsCollectionObj",eventsCollectionObj )
    app.set("clubsCollectionObj",clubsCollectionObj )
    app.set("participantsCollectionObj",participantsCollectionObj )
    app.set("adminCollectionObj",adminCollectionObj )

    console.log("Database Succecssfully connected!");
})  
.catch(err=>console.log("Error in connecting to DB :" ,err ))



//APIS
const clubsapp = require('./apis/clubs');
app.use('/clubs' , clubsapp);

const adminapp= require('./apis/admin');
app.use('/admin',adminapp);

const eventsapp = require('./apis/events');
app.use('/events' , eventsapp);

const participantsapp = require("./apis/participants");
app.use('/participants', participantsapp);



//Error Handling MiddleWares
const errorHandlingMW = (error ,request ,response)=>{
    console.log("Error in API : ",error)
    response.send({message:"error", payload : error});
}
app.use(errorHandlingMW)
//Invalid Path middlware
const invalidPathMW = (request , response)=>{
    console.log("Invalid Path");
    response.send({message:"Invalid Path"});
}
app.use('*' , invalidPathMW)