const express = require('express');
const socketIO = require("socket.io");
const http = require('http');
const router = require('./router');
const { addUser, removeUser, getAllUsers, getUser } = require("./users");

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    socket.on('join', (callback) => {
        const name = "User" + Math.floor(Math.random() * 1000);
        const { error, user } = addUser({ id: socket.id, name: name })

        if (error) return callback(error);

        //socket.emit('message', { user: 'admin', text: `$(user.name) has joined` })
        socket.emit('sendUsername', name);
        socket.join("primary");
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user1 = getUser(socket.id);
        io.to("primary").emit('message', { user: user1.name, text: message });
        callback();
    })

    socket.on('disconnect', () => {
        console.log("User has left");
    })
})


app.use(router);
server.listen(PORT, () => console.log("Server has started"));

