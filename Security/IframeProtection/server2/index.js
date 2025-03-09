const express = require("express");


const app = express();
app.use(express.static("public"))

app.get("/iframe-website1",(req, res)=>{res.sendFile(__dirname+ "/public/iframe-website1.html")})
app.get("/iframe-website2",(req, res)=>{res.sendFile(__dirname+ "/public/iframe-website2.html")})

const port = 3001;

app.listen(port, (req, res)=>{
    console.log("server running on 3001 port");
})