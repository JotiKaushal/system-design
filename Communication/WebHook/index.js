const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


//update
app.post('/webhook', (req, res) => {
    //extract payload from incoming post request
   const payload = req.body;
   //log received payload (you might want to process )
   console.log(`received payload ${payload}`);
   //optional, send a response to the sender to acknoeledge
    res.status(200).send("webhook received succesfully");
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})