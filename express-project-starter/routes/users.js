const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const {loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const  db  = require('../db/models');


/* GET users listing. */

router.get('/user/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
});
//banana
const userValidators = [
  check('username')
   .exists({ checkFalsy: true})
   .withMessage('Please provide a value for Username')
   .isLength({ max: 20 })
   .withMessage('Username must not be more than 20 characters'),
  check('email')
   .exists({ checkFalsy: true })
   .withMessage('Please provide a value for email')
   .isLength({ max: 255 })
   .withMessage('Email must not be more than 255 characters')
   .isEmail()
   .withMessage('Provided email is not a valid email')
   .custom((value) => {
     return db.User.findOne({ where: { emailAddress: value }})
      .then((user) => {
        if (user) {
          return Promise.reject('The provided email is already in use by another account');
        }
      });
   })
]

router.post('/user/signup', csrfProtection, asyncHandler(async (req, res) => {

}))
module.exports = router;
