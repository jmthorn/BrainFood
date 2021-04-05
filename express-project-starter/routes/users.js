const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');


/* GET users listing. */

router.get('/user/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('signup', {
    title: 'Signup',
    user,
    csrfToken: req.csrfToken(),
  });
});
//banana
const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
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
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided email is already in use by another account');
          }
        });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for password")
    .isLength({ max: 100 })
    .withMessage('Password must be under 100 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, a number, and a special character'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage("Please enter a value for password")
    .isLength({ max: 100 })
    .withMessage('Password must be under 100 characters')
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Confirmed Password does not match Password");
      }
      return true;
    })
]



router.post('/user/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = db.User.build({ username, email })

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect("/");
  } else {
    const errors = validatorErrors.array().map((err) => err.msg);
    res.render("signup", {
      title: 'Signup',
      user,
      errors,
      csrfToken: req.csrfToken
    })
  }
}))
module.exports = router;
