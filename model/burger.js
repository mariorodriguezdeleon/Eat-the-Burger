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
        orientation.insertOne('burgers', col, val, function(res) {
            cb(res);
        });
    },

    //TODO: updateOne();
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        })
    },

    //TODO: deleteOne();
    deleteOne: function(condition, cb) {
        orm.deleteOne('burgers', condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;