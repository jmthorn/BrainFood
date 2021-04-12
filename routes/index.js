var express = require('express');
var router = express.Router();
const quotes = require("./quotes.js");
const { asyncHandler } = require('./utils.js');
const db = require("../db/models");

/* GET home page. */
router.get('/', asyncHandler( async (req, res, next) => {
  const tagId = parseInt(req.params.id, 10); 
  const inOrderBooks = await db.Book.findAll({
    order: [['id', 'DESC']], 
    limit: 20
  });
  const orderAuthorBooks = await db.Book.findAll({
    order: [['published', 'DESC']], 
    limit: 20
  });
  const orderRatingBooks = await db.Book.findAll({
    order: [['avg_rating', 'DESC']], 
    limit: 20
  });
  const orderTitleBooks = await db.Book.findAll({
    order: [['published', 'ASC']], 
    limit: 20
  });
  const userId = req.session.auth.userId;
  const bookshelves = await db.Bookshelf.findAll({
    where: {
      userId,
    },
  });

  const lowestShelf = bookshelves[0];
  // const books = await db.Book.findAll({
  //     include: db.Tag,
  // });
  res.render('index', { 
    title: 'Brainfood',
    inOrderBooks,
    orderAuthorBooks,
    orderRatingBooks,
    orderTitleBooks,
    lowestShelf
  });
}));


router.get("/quote", function (req, res) {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  res.json(quotes[randomNumber])
});

router.get('/', asyncHandler(async (req, res) => {

    

}))


module.exports = router;