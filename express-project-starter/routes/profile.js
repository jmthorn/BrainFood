const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');


router.get('/', (req, res) => {
  res.render('profile')       // rendering the profile.pug
});


// router.delete('/:id', asyncHandler(async(req, res) => {
//   // const person =

// }))


// router.get('/:id(\\d+)', asyncHandler(async (req, res)=> {
//   // const {id} = req.params
//   // const user = await db.User.findByPk(id)
//   const personID = parseInt(req.params.id, 10)    // base of 10
//   const user = await db.User.findByPk(personID)

//   res.render('profile')
// }))

// // backend route for delete button for front end route
// router.delete('/:id(\\d+)', asyncHandler(async (req, res)=>{
//   const { id } = req.params;
//   const user = await db.User.findByPk(id);

//   await user.destroy();

//   res.redirect('/')
// }))




module.exports = router;
