const express = require("express");


const app = express();
app.use((req, res, next)=>{
    res.removeHeader("X-Powered-By")
    next();
})

app.get("/abc",(req, res)=>{res.send({"id":77, "ame": "joti"})})

const port = 3000;

app.listen(port, (req, res)=>{
    console.log("server running on 3000 port");
})