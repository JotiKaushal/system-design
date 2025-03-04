const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/sse', (req, res) => {
   // sse setup logic
   //data should be long lived and in event format
   res.setHeader('Content-Type','text/event-stream');
   res.setHeader("Connection", "keep-alive");
   res.setHeader('Cache-Control' , 'no-cache');
   res.write('data: welcome to server sent events \n');

  const intervalId = setInterval(() => {
    res.write(`data: new server time: ${new Date().toLocaleDateString()}\n\n`);
   }, 5000);

   res.on('close', ()=>{
    clearInterval(intervalId);
   })
})



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})