var express = require('express');
var router = express.Router();

var authcontroller = require('../controllers/authcontroller');

router.get('/', authcontroller.index);

module.exports = router;