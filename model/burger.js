const orm = require('../config/orm');

let burger = {

    //TODO: selectAll();
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    //TODO: insertOne();
    insertOne: function(col, val, cb) {

    },

    //TODO: updateOne();
    updateOne: function(objColVals, condition, cb) {

    },

    //TODO: deleteOne();
    deleteOne: function(condition, cb) {

    }

};

module.exports = burger;