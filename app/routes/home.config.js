"use strict";

const main = require("../config");
const merge = require("merge");

let config = {
	home: {
		route: "/"
	}
};

module.exports = merge(main, config);
