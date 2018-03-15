// C O N T R O L L E R

// Require express
// Require burger.js
// Create the router for the app
// Export the router

var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		var dataObj = {
			burgers: data
		};
		console.log(dataObj);
		res.render("index", dataObj);
	});
});

router.post("/api/burgers", function(req, res) {
	console.log(req.body.name);
	burger.add(req.body.name, function(result) {
		console.log("controller success");
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	burger.update(req.params.id, function(result) {
		if (result.changedRows === 0) {
			return res.status(404).end();
		}
		else {
			res.status(200).end();
		}
	});
});

module.exports = router;