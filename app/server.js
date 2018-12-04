"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const logger = require('morgan');
const cookieParser = require('cookie-parser')
const config = require('./config');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

require("./routes")(app);

// 404 error handler
app.use(
	require('./lib/express/handlers/FileNotFoundHandler')("Page Not Found", 404)
);

// 500 error handler
app.use(
	require('./lib/express/handlers/ErrorHandler')()
);


module.exports = app;
