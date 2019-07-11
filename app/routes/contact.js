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

    // GET route for getting all of the posts
    app.get("/api/contact/", function (req, res) {
        db.contacts.findAll({})
            .then(function (dbcontacts) {
                res.json(dbcontacts);
            });
    });

    // Get route for returning posts of a specific category
    app.get("/api/contact/profession/:profession", function (req, res) {
        db.contacts.findAll({
                where: {
                    profession: req.params.profession
                }
            })
            .then(function (dbcontacts) {
                res.json(dbcontacts);
            });
    });

    // Get route for retrieving a single post
    app.get("/api/contact/:id", function (req, res) {
        db.contacts.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbcontacts) {
                res.json(dbcontacts);
            });
    });

    // POST route for saving a new post
    app.post("/api/contact", function (req, res) {
        console.log(req.body);
        db.contacts.create({
                profession: req.body.profession,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                email: req.body.email,
                conComm: req.body.conComm,
            })
            .then(function (dbcontacts) {
                res.json(dbcontacts);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/contact/:id", function (req, res) {
        db.contacts.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbcontacts) {
                res.json(dbcontacts);
            });
    });

    // PUT route for updating posts
    app.put("/api/contact", function (req, res) {
        db.contacts.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbcontacts) {
                res.json(dbcontacts);
            });
    });
};