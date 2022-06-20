

// install and import express
const express = require("express");
const user=require("./assets/user.json")
const path=require("path")
let app = express();

app.use(express.json())
// Code here

app.get("/",async function(req,res){
    try{
        let hfile=path.join(__dirname+'/assets/users.html')

        return res.status(200).sendFile(hfile)
    }catch(err){
return res.status(400).send(err)
    }
})
app.get("/users",async function(req,res){
    try{
        let jfile=path.join(__dirname + '/assets/user.json')

        return res.status(200).sendFile(jfile)
    }catch(err){
return res.status(400).send(err)
    }
})
app.get("/users/:id",async function(req,res){
    try{
        let userid=user.filter((e)=>{
            if(e.id==req.params.id){
                return true
            }
        })

        return res.status(200).send(userid[0])
    }catch(err){
return res.status(400).send(err)
    }
})
app.listen(8000,async function (){
    try{
        console.log("connected on port 8000")
    }catch(err){
        console.log(err.message)
    }
})
// Note: Do not remove this export statement
module.exports = app;
