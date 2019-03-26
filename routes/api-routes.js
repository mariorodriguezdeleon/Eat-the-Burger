const express = require('express');
const route = express.Router();

// Create
route.post('/new_burger', function(req, res) {
    //Add logic 
    res.send('Posting to burger');
});

// Read
route.get('/get_all', function(req, res) {
    //Add logic
    res.send('Getting all data');
});

// Update
route.put('/put', function(req, res) {
     //Add logic
     res.send('Updating Record');
});


// Delete
route.delete('/delete_burger', function(req, res){
    //Add logic
    res.send('Deleting burger');
});

module.exports = route;

