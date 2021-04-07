const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');


// const bookValidators = [
//   check('title')
//     .exists({checkFalsy: true})
//     .withMessage('Please provide a value for title')
//     .isLength({ max: 255})
//     .withMessage()
// ]


/* GET bookshelves. */

router.get('/', asyncHandler(async (req, res) => {
  const bookshelves = await db.Bookshelf.findAll();
  // const bookshelfId = parseInt(req.params.bookshelfId, 10);
  // const books = await db.Book.findAll({
  //   where: {
  //     bookshelfId,
  //   },
  //   include: Bookshelf,
  // });



  res.render('bookshelf', {
   // bookshelves,
    //books
  })
}))

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

module.exports = router;

// findAll({include: Book},{where: ID})
