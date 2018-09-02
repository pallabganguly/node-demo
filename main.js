const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/node-demo');

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log("Server live at http://localhost:" + port);
})