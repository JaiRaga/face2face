import socketClient from 'socket.io-client'

const SERVER = 'http://localhost:9000'

let socket

export const connectToWebSocket = () => {
	socket = socketClient(SERVER)

	socket.on('connection', () => {
		console.log('Connected to web socket')
		console.log(socket.id)
	})
}
