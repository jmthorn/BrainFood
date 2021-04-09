var express = require('express');
var router = express.Router();
const quotes = require("./quotes.js");
const { asyncHandler } = require('./utils.js');
const db = require("../db/models");

/* GET home page. */
router.get('/', asyncHandler( async (req, res, next) => {
  const tagId = parseInt(req.params.id, 10); 
  const books = await db.Book.findAll({
      include: db.Tag,
  });
  res.render('index', { title: 'Brainfood',
books });
}));


router.get("/quote", function (req, res) {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  res.json(quotes[randomNumber])
});

router.get('/', asyncHandler(async (req, res) => {

    

}))


module.exports = router;