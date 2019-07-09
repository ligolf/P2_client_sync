var express = require('express');
var app = express();
//  HEAD


// app.get('/', function (req, res) {

//     res.send('Welcome to Passport with Sequelize');

// });


// app.listen(`5001`, function (err) {

//     if (!err)
//         console.log("Site is live");
//     else console.log(err)

// });

// app.get();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});