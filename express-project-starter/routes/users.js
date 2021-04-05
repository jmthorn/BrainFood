var express = require('express');
var router = express.Router();
const {loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const  db  = require('../db/models');


/* GET users listing. */




router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
