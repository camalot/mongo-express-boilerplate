"use strict";

console.log("loaded");
module.exports = (socket) => {
	socket.on('connect', (s) => {
		console.log("connection");
		s.emit("test", { username: 'darthminos' });
	});
};
