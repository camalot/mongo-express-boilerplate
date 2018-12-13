"use strict";
const socketio = require("socket.io");
module.exports = (server) => {
	const socket = socketio(server);
	console.log("require: sockets");
	require('./sockets')(socket);
	return socket;
};
