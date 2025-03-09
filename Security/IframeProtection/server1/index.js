const express = require("express");


const app = express();
app.use((req, res, next)=>{
    res.setHeader("Content-Security-Policy","frame-ancestors 'none'")
    next();
})

app.get("/example1",(req, res)=>{res.sendFile(__dirname+ "/public/example1.html")})
app.get("/example2",(req, res)=>{res.sendFile(__dirname+ "/public/example2.html")})
app.get("/example3",(req, res)=>{res.sendFile(__dirname+ "/public/example3.html")})

const port = 3000;

app.listen(port, (req, res)=>{
    console.log("server running on 3000 port");
})