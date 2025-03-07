const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next)=>{
    res.setHeader("Content-Security-Policy", "default-source 'self';"+ "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;");
    next();
})

app.use(express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log("server listening at 3000");

})