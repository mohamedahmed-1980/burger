const connection = require('./connection');

var orm = {

    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: function(tableInput, name , cb) {
        var queryString = "INSERT into "+tableInput+" (burger_name, devoured) values ('"+name+"', false)";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

      updateOne: function(tableInput, id , cb) {
        var queryString = "Update "+tableInput+" SET devoured = true WHERE id = "+id;
        connection.query(queryString, [tableInput, id], function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },

  };
  
  module.exports = orm;