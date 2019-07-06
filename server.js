var express = require('express');
var app = express();


app.get('/', function (req, res) {

    res.send('Welcome to Passport with Sequelize');

});


app.listen(`5001`, function (err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});

// app.get();