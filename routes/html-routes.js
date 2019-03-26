const express = require('express');
// const database = require('../database/database');

const route = express.Router();

route.get('/', function(req, res) {
    //Add logic to catch error
    res.send('At Root');
});

route.get('/Home', function(req, res) {
    //Add logic to send the home page
    res.send('At Home');
});

module.exports = route