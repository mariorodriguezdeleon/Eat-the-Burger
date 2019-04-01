const connection = require('../config/connection');

function printQuestionsMarks(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objToSqlSyntax(obj) {
    let arr = [];

    for (let key in obj) {
        let val = obj[key];

        if(Object.hasOwnProperty.call(obj, key)) {

            if(typeof val === 'string' && val.indexOf(' ') >+ 0) {
                val = "'" + val + "'";
            }
            arr.push(key + '=' + val);
        }
    }
    return arr.toString();
}

let orm = {

    selectAll: function(table, cb) {
        let queryStr = 'SELECT * FROM ' + table + ';';

        connection.query(queryStr, function(error, res) {
            if(error) throw error;
            cb(res);
        });
    },

    insertOne: function(table, col, vals, cb) {
        let queryStr = 'INSERT INTO ' + table;
        queryStr += ' (';
        queryStr += col.toString();
        queryStr += ') ';
        queryStr += 'VALUES (';
        queryStr += printQuestionsMarks.toString();
        queryStr += ') ';

        console.log(queryStr);

        connection.query(queryStr, function(error, res) {
            if(error) throw error;
            cb(res);
        });
    },

    updateOne: function(table, objColVal, condition, cb) {
        let queryStr = 'UPDATE ' + table;
        queryStr += ' SET';
        queryStr += objToSqlSyntax(objColVal);
        queryStr += ' WHERE ';
        queryStr += condition;

        console.log(queryStr);

        connection.query(queryStr, function(error, res) {
            if(error) throw error;
            cb(res);
        });
    },

    deleteOne: function(table, condition, cb) {
        let queryStr = 'DELETE FROM ' + table;
        queryStr += ' WHERE ';
        queryStr += condition;

        connection.query(queryStr, function(error, res) {
            if(error) throw error;
            cb(res);
        });
    }
}

module.exports = orm;