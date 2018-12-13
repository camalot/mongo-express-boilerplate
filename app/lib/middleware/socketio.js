"use strict";

module.exports = socket => {
	return (req, res, next) => {
		res.io = socket;
		return next();
	};
};
