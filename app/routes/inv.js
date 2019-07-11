// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the inventory
    app.get("/api/inventory/", function (req, res) {
        db.inventories.findAll({})
            .then(function (dbinventories) {
                res.json(dbinventories);
            });
    });

    // Get route for returning inventories of a specific category
    app.get("/api/inventory/catagory/:catagory", function (req, res) {
        db.inventories.findAll({
                where: {
                    catagory: req.params.catagory
                }
            })
            .then(function (dbinventories) {
                res.json(dbinventories);
            });
    });

    // Get route for retrieving a single post
    app.get("/api/inventory/:id", function (req, res) {
        db.inventories.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbinventories) {
                res.json(dbinventories);
            });
    });

    // POST route for saving a new post
    app.post("/api/inventory", function (req, res) {
        console.log(req.body);
        db.inventories.create({
                catagory: req.body.catagory,
                description: req.body.description,
                make: req.body.make,
                type: req.body.type,
                year: req.body.year,
                invComm: req.body.invComm,
            })
            .then(function (dbinventories) {
                res.json(dbinventories);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/inventory/:id", function (req, res) {
        db.inventories.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbinventories) {
                res.json(dbinventories);
            });
    });

    // PUT route for updating posts
    app.put("/api/inventory", function (req, res) {
        db.inventories.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbinventories) {
                res.json(dbinventories);
            });
    });
};