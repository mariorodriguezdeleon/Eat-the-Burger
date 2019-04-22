// CONSTANT VARIABLES =====================================
require('dotenv').config();
const express = require('express');
const exphbs = require("express-handlebars");
const routes = require('./controllers/burgers_contoller');
const bodyParser = require('body-parser');
// const path = require('path');
const app = express(); //Create express object
const PORT = process.env.PORT || 3000; //set environment port or default port


// App Setup ===============================================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.json());

// Routes to app assets and responses =======================
app.use(routes);

// Initialize listening =====================================
app.listen(PORT, function() {
    console.log('Eat-the-Burger is running on ' + PORT);
});