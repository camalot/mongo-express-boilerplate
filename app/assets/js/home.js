"use strict";

const socket = io('http://localhost:3000', { });


socket.on('test', (data) => {
	console.log(data);
});
