// B U R G E R . J S

// Require orm.js
// Write code that will call the orm functions using burger specific input for the orm.
// Export using module.exports

var orm = require("../config/orm.js")

var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res); // sends res to callback defined in controller?
		});
	},
	add: function(name, cb) {
		orm.insertOne(name, function(res) {
			console.log("burger.js success");
			cb(res); // sends res to callback defined in controller
		});
	},
	update: function(id, cb) {
		orm.updateOne(id, function(res) {
			cb(res); // sends res to callback defined in controller
		});
	}
};

module.exports = burger;