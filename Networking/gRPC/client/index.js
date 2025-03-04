const client = require("./client");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//todo cod to expose rtest api which internally uses grpc server funvtion using grpc client

app.get("/", (req,res)=>{
client.GetAll(null, (err,data)=>{
    if(!err){
    res.send(data.customers)
    }
    else{
        throw new Error(err)
    }
})
})

app.get("/:id", (req,res)=>{

})


app.get("/insert", (req,res)=>{
    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
    }

    client.Insert(newCustomer, (err,data)=>{
        if(!err){
        res.send({message: "customer created succesfully", data})
        }
        else{
            throw new Error(err)
        }
    })
})

app.get("/update", (req,res)=>{
    let customer = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
    }

    client.Update(customer, (err,data)=>{
        if(!err){
        res.send({message: "customer updated succesfully", data})
        }
        else{
            throw new Error(err)
        }
    })
})

app.get("/delete:id", (req,res)=>{
    client.Delete({id: req.params.id}, (err,_)=>{
        if(!err){
        res.send({message: "customer deleted succesfully"})
        }
        else{
            throw new Error(err)
        }
    })
})

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("server running on ", port);
    
})