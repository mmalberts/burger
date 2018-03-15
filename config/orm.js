// O R M . J S

// Require connection.js
// Create methods that will execute the necessary MySQL commands in the controllers
// The following methods will be used to retrieve and store data in the database:
	// selectAll()
	// insertOne()
	// updateOne()
// export orm in module.exports

var connection = require("../config/connection.js");
console.log("connected as id " + connection.threadId);

var orm = {
	// selectAll function displays all the data in the database
	selectAll: function(table, cb) {
		// build query string
		var queryString = "SELECT * FROM " + table + ";"
		// query the database
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result); // resulting data (all table data) will be passed to callback function, defined in burger.js
		});
	},
	// insertOne function adds a new burger to the database
	insertOne: function(name, cb) {
		// build query string
		var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + name + "');";
		// query the database
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			console.log("orm success");
			cb(result); // resulting data will be passed to callback function defined in burger.js
		});
	},
	// updateOne function is run when devour button is clicked, changes devoured boolean
	updateOne: function (id, cb) {
		// query the connection
		connection.query("UPDATE burgers SET ? WHERE ?", 
		[
			{
				devoured: true
			}, {
				id: id
			}
		],
		function(err, result) {
			if (err) {
				throw err;
			}
			cb(result); // resulting data will be passed to callback function defined in burger.js
		}
		)
	}

};

module.exports = orm;