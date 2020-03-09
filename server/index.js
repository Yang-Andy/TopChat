const express = require('express');
const socketIO = require("socket.io");
const http = require('http');
const router = require('./router');
const moment = require('moment');
const { addUser, removeUser, getAllUserNames, getUser } = require("./users");

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    socket.on('join', (callback) => {
        const name = "User" + Math.floor(Math.random() * 1000);
        const { error, user } = addUser({ id: socket.id, name: name })

        if (error) return callback(error);

        socket.emit('sendUsername', name);
        socket.join("primary");
        io.to("primary").emit('sendAllUsers', getAllUserNames())
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user1 = getUser(socket.id);
        const timestamp = moment().format('h:mm a').toString();
        io.to("primary").emit('message', { user: user1.name, text: message, timestamp: timestamp });
        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        console.log(user);
        io.to("primary").emit('sendAllUsers', getAllUserNames())
    })
})


app.use(router);
server.listen(PORT, () => console.log("Server has started"));

