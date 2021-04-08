var express = require('express');
var router = express.Router();
const quotes = require("./quotes.js")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Brainfood' });
});

module.exports = router;

router.get("/quote", function (req, res) {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  res.json(quotes[randomNumber])
});
