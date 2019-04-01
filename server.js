// CONSTANT VARIABLES =====================================
const express = require('express');
const exphbs = require("express-handlebars");

const app = express(); //Create express object
const PORT = process.env.PORT || 3000; //set environment port or default port


// App Setup ===============================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Routes to app assets and responses =======================
require('./controllers/burgers_contoller')(app);

// Initialize listening =====================================
app.listen(PORT, function() {
    console.log('Eat-the-Burger is running on ' + PORT);
});