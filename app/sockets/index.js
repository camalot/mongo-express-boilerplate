"use strict";

const fs = require("fs");
const path = require("path");
const normalizedPath = path.join(__dirname, "./");

let libs = {};

let _processPath = p => {
	fs.readdirSync(p).forEach(file => {
		try {
			let configMatch = /.*?\.config\.js/i;
			let deepPath = p.substring(normalizedPath.length).replace(/\\/g, "/");
			let fullPath = path.join(p, file);
			if (fs.lstatSync(fullPath).isDirectory()) {
				_processPath(fullPath);
			} else {
				if (
					file !== "index.js" &&
					file !== "config.js" &&
					!configMatch.test(file)
				) {
					let name = file.substring(0, file.lastIndexOf("."));
					let p1 = deepPath.length > 0 ? `${deepPath}/` : "";
					// console.log(`${p1}${name}`);
					libs[`${p1}${name}`] = `./${p1}${name}`;
				}
			}
		} catch (ex) {
			console.error(ex);
		}
	});
};

_processPath(normalizedPath);

module.exports = (socket) => {
	for (let item in libs) {
		if (!item) {
			continue;
		}
		require(libs[item])(socket);
	}
};
