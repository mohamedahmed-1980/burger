const orm = require("../config/orm");

var burger = {

    selectBurgers: function (cb){
        orm.selectAll("burgers", function(res) {
            cb(res);
          });
    },

    addBurger: function(burgerName, cb) {
        orm.insertOne("burgers", burgerName, function(res) {
            cb(res);
          });
    },

    updateBurger: function (burgerId, cb) {
        orm.updateOne("burgers", burgerId, function(res) {
            cb(res);
          });
    }
}

module.exports = burger;





