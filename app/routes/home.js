"use strict";

const express = require("express");
const router = express.Router();

const userDB = require('../lib/database/users');

router.get("/init", (req, res, next) => {
	return userDB.init()
		.then(() => {
			return res.send("OK");
		})
		.catch(err => {
			return next(err);
		});
});
router.get('/', (req, res, next) => {
	return userDB.get('darthminos')
		.then(user => {
			console.log(user);
			return res.render("home", { user: user });
		})
		.catch(err => {
			return next(err);
		});
});


module.exports = router;
