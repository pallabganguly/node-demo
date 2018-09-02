const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConfig = require('./app/config/database.config.js');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to the database!');
}).catch(err => {
    console.log('Some error ' + err + " occurred");
})
    
require('./app/routes')(app, {});

app.listen(port, () => {
    console.log("Server live at http://localhost:" + port);
})