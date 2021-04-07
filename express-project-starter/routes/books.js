const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

router.get("/:id", asyncHandler(async (req, res) => {
    let bookId = parseInt(req.params.id, 10)
    let book = await db.Book.findByPk(bookId)
    let reviews = await db.Review.findAll(
        {
            where: { bookId }
        }
    )
    res.render('book', {
        book,
        reviews
    })
}))


router.put("/:id", asyncHandler(async (req, res) => {
    let bookId = parseInt(req.params.id, 10)
    // let book = await db.Book.findByPk(bookId)
    const { cover, title, author, published, description } = req.body
    // await book.update({ cover, title, author, published, description });
    let book = await db.Book.update({ cover, title, author, published, description }, {
        where: { bookId }
    })
    res.redirect(`books/${bookId}`)
}))




module.exports = router;
