const express = require('express');
const path = require('path');
// const database = require('../database/database');

const route = express.Router();

route.get('/', function(req, res) {
    //Add logic to catch error
    res.render('index');
});

route.get('/Home', function(req, res) {
    //Add logic to send the home page
    res.send('At Home');
});

module.exports = route