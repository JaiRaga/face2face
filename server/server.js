const express = require('express')
const socket = require('socket.io')

const app = express()

const PORT = 9000
const server = app.listen(PORT, () => console.log(`Server on PORT:${PORT}`))

const io = socket(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
})

io.on('connection', (socket) => {
	socket.emit('connection', null)
	console.log('new user connected')
	console.log(socket.id)
})
