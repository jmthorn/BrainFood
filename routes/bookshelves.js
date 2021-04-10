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

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const bookshelfId = parseInt(req.params.id, 10);
  const userId = req.session.auth.userId;
  const bookshelves = await db.Bookshelf.findAll({
    where: {
      userId
    },
    //find default bookshelf: findOne({
      //where: { name: 'Want to Read'
      //userId
  //}
  //},
    //})
   // include: db.Book
  });
  // const bookshelv`es = await db.Bookshelf.findAll();
  //const books = await db.Book.findAll();
  // // const bookshelfId = parseInt(req.params.bookshelfId, 10);
  const bookshelf = await db.Bookshelf.findByPk(bookshelfId, {
    include: db.Book,
  });
  //bookshelf.findByPk(bookshelfId, {include: db.Book });

  res.render("bookshelf", {
    bookshelf,
    bookshelves,
  });
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


router.get(
  "/delete/:id", 
  asyncHandler(async (req, res) => {
    console.log('test');
    const bookId = parseInt(req.params.id, 10);
    const bookshelf = await db.Bookshelf.findByPk(bookId);
    res.render("bookshelf-delete", {
      bookshelf,
    });
  })
);

// Delete specific Bookshelf Route
router.post(
  "/delete/:id",
  asyncHandler(async (req, res) => {
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
    res.redirect(`/bookshelves/${bookshelf.id - 1}`);
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
