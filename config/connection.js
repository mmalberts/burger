// C O N N E C T I O N  T O  D A T A B A S E

// Write code to connect Node to MySQL
// Export the connection

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	});
};

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " +err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;