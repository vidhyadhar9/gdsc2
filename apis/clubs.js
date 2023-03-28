const exp = require('express')
const clubsapp = exp.Router()

//body parser
clubsapp.use(exp.json());

clubsapp.get('/get-all-clubs' , (request,response)=>{
    const clubsCollectionObj = request.app.get("clubsCollectionObj" )

    clubsCollectionObj.find().toArray()
    .then((listOfClubs)=>{
        console.log(listOfClubs);
        response.send({
            message:"List of Clubs :",
            payload: listOfClubs
        })
    })
    .catch(err => {
        console.log("Error at clubsapp(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})

clubsapp.post('/create-club' , (request,response)=>{
    const  clubsCollectionObj = request.app.get("clubsCollectionObj" )
    let data = request.body;
    console.log(data)
    clubsCollectionObj.insertOne(data)
    .then((dbRes)=>{
        console.log("DB response:" , dbRes)
        response.send({message:"Success"})
    }

    )
    .catch(err=>{
        console.log("Error :" ,err)
        response.send({message:"Erroe is :",payload :err})
    })

})

module.exports=clubsapp;