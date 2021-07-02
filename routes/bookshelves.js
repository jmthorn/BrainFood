const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

/* GET bookshelves. */

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

  const book = db.Book.build();
  const bookshelfId = parseInt(req.params.id, 10);
  const userId = req.session.auth.userId;
  const bookshelves = await db.Bookshelf.findAll({
    where: {
      userId
    },
  });

  const lowestShelf = bookshelves[0];

  const bookshelf = await db.Bookshelf.findByPk(bookshelfId, {
    include: db.Book,
  });

  res.render("bookshelf", {
    book,
    lowestShelf,
    bookshelf,
    bookshelves,
  });
}))

router.get('/add-book', csrfProtection, asyncHandler(async (req, res) => {
  const book = db.Book.build();
  const userId = req.session.auth.userId;
  const bookshelves = await db.Bookshelf.findAll({
    where: {
      userId,
    },
  });

  const lowestShelf = bookshelves[0];
  res.render('add-book', {
    book,
    csrfToken: req.csrfToken(),
    lowestShelf,
  });
}))

//Add a specific Book
router.post('/add-book', asyncHandler(async (req, res) => {

  const {
    cover,
    title,
    author,
    published
  } = req.body;


  const book = db.Book.build({
    cover,
    title,
    author,
    published
  })

  await book.save();
  res.redirect(`/books/${book.id}`);
}))

// Delete specific Bookshelf Route
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const bookshelf = await db.Bookshelf.findByPk(bookId);

    console.log(bookshelf);
    await bookshelf.destroy();
    res.json();
  })
);


//Add a Bookshelf
router.post("/add-shelf", asyncHandler(async (req, res) => {
  console.log(req.session.auth.userId);
  const userId = req.session.auth.userId;
  const {
    listname,
  } = req.body;
  console.log(listname);
  const bookshelf = db.Bookshelf.build({
    name: listname,
    userId,
  });

  await bookshelf.save();
  res.json({bookshelf});
}));



module.exports = router;

