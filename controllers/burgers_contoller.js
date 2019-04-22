const express = require('express');
const burger = require('../model/burger');

let route = express.Router();

// Read all data from burgers
route.get('/', function (req, res) {
    burger.selectAll(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

//Post new burger to list
route.post('/burgers', function(req, res) {
    console.log(req.body.burger_name);
    burger.insertOne(['burger_name'], [req.body.burger_name], function(results) {
        console.log(results);
        res.redirect('/');
    });
});

//Update data on burger obj
route.put('/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
});

module.exports = route;