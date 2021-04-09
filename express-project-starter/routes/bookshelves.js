const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
//const bookshelf = include('../db/models/bookshelf');


// const bookValidators = [
//   check('title')
//     .exists({checkFalsy: true})
//     .withMessage('Please provide a value for title')
//     .isLength({ max: 255})
//     .withMessage()
// ]


/* GET bookshelves. */

router.get('/', asyncHandler(async (req, res) => {
  // const bookshelfId = parseInt(req.params.id, 10);
   const bookshelves = await db.Bookshelf.findAll();
  // const bookshelves = await db.Bookshelf.findAll();
  const books = await db.Book.findAll();
  // // const bookshelfId = parseInt(req.params.bookshelfId, 10);
  // const books = await db.Bookshelf.findbyPk(bookshelfId, {
  //   include: { model: db.Book,
  //   through: "Bookshelves-to-books",
  //   }
  //   });
  res.render('bookshelf', {
    bookshelves,
    books
  })
}))

router.get('/add-book', csrfProtection, asyncHandler(async (req, res) => {
  const book = db.Book.build();
  res.render('add-book', {
    book,
    csrfToken: req.csrfToken(),
  });
}))

//Add a specific Book
router.post('/add-book', asyncHandler(async (req, res) => {
  console.log(req.body);
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
  res.redirect('add-book');
}))

// Delete specific Bookshelf Route
router.post('/bookshelf/delete/:id(\\d+)', asyncHandler(async (req, res) => {
    // How do we do this?
    const bookId = parseInt(req.params.id, 10);
    const bookshelf = await db.Bookshelf.findByPk(bookId);
    //const books = await db.Book.findAll();
    // const bookshelfId = parseInt(req.params.bookshelfId, 10);
    // const books = await db.Book.findAll({
    //   where: {
    //     bookshelfId,
    //   },
    //   include: db.Bookshelf,
    // });
    await bookshelf.destroy();
  res.redirect('/bookshelves');
  })
);
// router.get('/bookshelves/:id', asyncHandler(async (req, res) => {
//   const bookshelfId = parseInt(req.params.bookshelfId, 10);
//   // const books = await db.Book.findAll({
//   //   where: {
//   //     bookshelfId
//   //   },
//   //   include: Bookshelf
//   // });

//   res.render('bookshelf', {
//     books
//   })

// }))


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

// findAll({include: Book},{where: ID})
