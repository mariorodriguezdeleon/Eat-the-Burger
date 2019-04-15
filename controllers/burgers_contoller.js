const express = require('express');
const burger = require('../model/burger');

let route = express.Router();

// Create new burger obj
route.post('/api/burgers', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(res) {
        res.json({ id: res.insertId });
    })
});

// Read all data from burgers
route.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        
        res.render('index', hbsObject);
    });
    // res.send('In Root');
});

// Update data on burger obj
route.put('/api/burgers/:id', function(req, res) {
    let condition = 'id ' + req.params.id;

    console.log(condition);

    burger.updateOne({devoured: req.body.devoured}, condition, function(res) {
        if(res.changedRows === 0) {
            return res.send(404).end();
        } else{
            res.status(200).end();
        }
    })
});

// Delete burger obj
route.delete('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;

    console.log(condition);

    burger.deleteOne(condition, function(res) {
        if(res.changedRows === 0) {
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    })
});

module.exports = route;