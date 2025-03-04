const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const waitingClients = []
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


let data = "initial todos"

//update
app.get('/updatedata', (req, res) => {
    data = req.query.data;
    while(waitingClients.length > 0){
        const client = waitingClients.pop();
        client.json({data})
    }
    res.send({message: "data updated succesfully"})
})

//read
app.get('/getdata', (req, res) => {
    if(data !== req.query.lastdata){
        res.json({data});
    }else{
        waitingClients.push(res)
    }
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})