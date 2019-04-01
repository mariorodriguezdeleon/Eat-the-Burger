const express = require('express');
const burger = require('../model/burger');

let route = express.Router();

// Get all data from burgers
route.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//TODO: repeat pattern for all other routes