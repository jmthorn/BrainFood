const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');


router.get('/', asyncHandler(async (req, res) => {

  const userId = req.session.auth.userId;
  const bookshelves = await db.Bookshelf.findAll({
    where: {
      userId
    },
  });
  const lowestShelf = bookshelves[0];
  res.render('profile', {
    lowestShelf
  })       // rendering the profile.pug
}));



module.exports = router;
