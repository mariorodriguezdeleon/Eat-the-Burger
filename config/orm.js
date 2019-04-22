const connection = require('../config/connection');

function printQuestionMarks(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSqlSyntax(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
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

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
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
    }
}

module.exports = orm;