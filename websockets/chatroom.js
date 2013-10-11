// broadcast incoming messega to all 'clients'
function receiveMessage (data, socket) {
	socket.broadcast.emit('message', data);

}