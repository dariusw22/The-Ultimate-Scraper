// Dependencies.
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// scrapping tools.
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

// Port
var PORT = 8080;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger('dev'));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true}));

// Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

// Connect to Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// Routes


// Listen on port 3000
app.listen(8080, function () {
    console.log("App running on port 8080!");
});
