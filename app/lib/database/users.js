"use strict";

const MongoDatabase = require("../MongoDatabase");
const DATABASE_NAME = "users";

module.exports = {
	init: () => {
		return new Promise((resolve, reject) => {
			let mongodb = new MongoDatabase(DATABASE_NAME);
			return mongodb.connect()
				.then(client => {
					return client.db().collection('accounts')
						.insertMany([ { username: 'darthminos' }])
				})
				.then(result => {
					return resolve(result);
				})
				.then(() => {
					return mongodb.close();
				})
				.catch(err => {
					console.error(err);
					return reject(err);
				});
		});
	},
	get: username => {
		return new Promise((resolve, reject) => {
			let mongodb = new MongoDatabase(DATABASE_NAME);
			return mongodb.connect()
				.then(client => {
					return client
						.db()
						.collection("accounts")
						.findOne({ username: username });
				})
				.then(user => {
					return resolve(user);
				})
				.then(() => {
					return mongodb.close();
				})
				.catch(err => {
					console.error(err);
					return reject(err);
				});
		});
	}
};
