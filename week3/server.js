const express = require('express')
const socketio = require('socket.io')

const app = express()
const SERVER_PORT = 3000

const server = app.listen(SERVER_PORT, () =>{
    console.log('Chat Server running on http://localhost:3000/')
})

// http://localhost:3000/
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/chat.html')
})

// http://localhost:3000/group
app.get("/group", (req, res) => {
    res.sendFile(__dirname + '/views/group_chat.html')
})

const io = socketio(server)

io.on('connection', (socket) => {
    console.log(`New Socket: ${socket.id}`)

    socket.on('disconnect', ()=> {
        console.log(`User disconnect ${socket.id}`)
    })

    socket.on('message', (data)=>{
        console.log(`Message from ${socket.id}: ${data}`)
    })

    socket.on('chat_message', (data) => {
        data.clientId = socket.id
        console.log(JSON.stringify(data))
        //socket.emit('chat_message', data)
        io.emit('chat_message', data)
        //socket.broadcast.emit('chat_message', data)
    })

    socket.on('join_group', (roomName) => {
        console.log(`User ${socket.id} joined room ${roomName}`)
        socket.join(roomName)
    })

    socket.on('leave_group', (roomName) => {
        socket.leave(roomName)
    })

    socket.on('group_message', (data) => {
        console.log(`User ${socket.id} sent message to room ${data.group}`)
        data.clientId = socket.id
        io.to(data.group).emit('group_message', data)
    })

})