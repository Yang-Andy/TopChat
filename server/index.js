const express = require('express');
const socketIO = require("socket.io");
const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log("User has connected");

    socket.on('disconnect', () => {
        console.log("User has left");
    })
})


app.use(router);
server.listen(PORT, () => console.log("Server has started"));

