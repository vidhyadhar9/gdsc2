const exp=require('express')
const cors = require('cors')
const app = exp()

app.use(cors())

app.listen(5000 ,()=>{console.log("Server Running on 3500 port")})

//CONNECT TO DATABASE
//import mongo Client
const mClient = require('mongodb').MongoClient
//connect ot Mongo server
mClient.connect('mongodb://127.0.0.1:27017')
.then((dbRef)=>{
    const eventManageDbObj = dbRef.db('eventmanage')
    const eventsCollectionObj = eventManageDbObj.collection('events');
    const clubsCollectionObj = eventManageDbObj.collection('clubs');
    const participantsCollectionObj = eventManageDbObj.collection('participants');
    const adminCollectionObj = eventManageDbObj.collection('admindata');
    const userCollectionObj = eventManageDbObj.collection('userdata');

    app.set("eventsCollectionObj",eventsCollectionObj )
    app.set("clubsCollectionObj",clubsCollectionObj )
    app.set("participantsCollectionObj",participantsCollectionObj )
    app.set("adminCollectionObj",adminCollectionObj )
    app.set("userCollectionObj",userCollectionObj )

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

const LoginDetailsapp = require("./apis/LoginDetails");
app.use('/LoginDetails', LoginDetailsapp);




//Error Handling MiddleWares
const errorHandlingMW = (error ,req,response)=>{
    console.log("Error in API : ",error)
    response.send({message:"error", payload : error});
}
app.use(errorHandlingMW)
//Invalid Path middlware
const invalidPathMW = (req , response)=>{
    console.log("Invalid Path");
    response.send({message:"Invalid Path"});
}
app.use('*' , invalidPathMW)