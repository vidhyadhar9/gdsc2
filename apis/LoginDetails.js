const exp = require('express')
const LoginDetailsapp = exp.Router()
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressAsyncHandler = require("express-async-handler")
//body Parser
LoginDetailsapp.use(exp.json())

//POST request
LoginDetailsapp.post('/user-signup',expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj = request.app.get("userCollectionObj")
    //get newUser from request
    const newUser = request.body;
    //check for duplicate user by username
    let userOfDB = await userCollectionObj.findOne({username:newUser.username})
    //if user already existed, send res to client "User already existed"
    if(userOfDB!=null){
        response.status(200).send({message:"User already existed"})
    }
    //if user not existed
    else{
        //hash the password
        let hashedPassword = await bcryptjs.hash(newUser.password,5)
        //replace plane password with hashed password
        newUser.password = hashedPassword;
        //insert user
        await userCollectionObj.insertOne(newUser)
        //send res
        response.status(201).send({message:"User Created"})
    }

}))

LoginDetailsapp.post('/user-login',expressAsyncHandler(async(request,response)=>{
    //get userCollectionObj
    const userCollectionObj = request.app.get("userCollectionObj")
    //get user Credentials from req
    const userCredObj = request.body
    console.log(userCredObj)
    //verify username
    let userOfDB = await userCollectionObj.findOne({username:userCredObj.username})
    //if username is invalid
    if(userOfDB===null){
        response.status(200).send({message:"Invalid username"})
    }
    //if username is valid
    else{
        //verify password
        let isEqual = await bcryptjs.compare(userCredObj.password,userOfDB.password)
        //if passwords are not matched
        if(isEqual===false){
            response.status(200).send({message:"Invalid Password"})
        }
        //if passwords matched
        else{
            //create a jwt token
            let jwtToken = jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:20})
            //send token in response
            response.status(200).send({message:"Valid user",token:jwtToken})
        }
    }
}))

//export LoginDetails app
module.exports = LoginDetailsapp
