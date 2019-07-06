// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our inventory model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the inventorys
    app.get("/api/openitem", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Openitems.findAll({}).then(function (dbOpenitems) {
            // We have access to the inventorys as an argument inside of the callback function
            res.json(dbOpenitems);
        });
    });

    // POST route for saving a new inventory
    app.post("/api/openitems", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Openitems.create({
            catagory: req.body.catagory,
            description: req.body.description
        }).then(function (dbOpenitems) {
            // We have access to the new inventoryas an argument inside of the callback function
            res.json(dbOpenitems);
        });
    });

    // DELETE route for deleting inventory. We can get the id of the inventorywe want to delete from
    // req.params.id
    app.delete("/api/openitems/:id", function (req, res) {

    });

    // PUT route for updating inventory. We can get the updated inventoryfrom req.body
    app.put("/api/openitems", function (req, res) {

    });
};