const express = require('express');
const bodyParser = require("body-parser");
const {createServer} = require('node:http')
const {Server} = require('socket.io')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
const server= createServer(app);
const io = new Server(server)


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket)=>{
  console.log("connection established")
  socket.on('chat message', (msg)=>{
    console.log('MSG RECEIVED ', msg)
    io.emit('chat message', msg)
  })
  socket.on('disconnect', ()=>{
    console.log('connection disconnected')
  })
})



server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})