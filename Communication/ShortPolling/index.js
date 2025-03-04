const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


let data = "initial todos"

//update
app.get('/updatedata', (req, res) => {
    data = "updated data"
    res.json(data)
})

//read
app.get('/getdata', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})