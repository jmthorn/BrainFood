const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

router.get("/:id", asyncHandler(async (req, res) => {
    let bookId = parseInt(req.params.id, 10)
    const userId = req.session.auth.userId
    let book = await db.Book.findByPk(bookId)
    let reviews = await db.Review.findAll({
        where: { bookId },
        include: db.User
    }
    )
    res.render('book', {
        book,
        reviews,
        userId
    })
}))

//UPDATING BOOK
router.post("/:id", asyncHandler(async (req, res) => {
    let bookId = parseInt(req.params.id, 10)
    let book = await db.Book.findByPk(bookId)
    const { cover, title, author, published, description } = req.body
    await book.update({ cover, title, author, published, description })
    res.redirect(`/books/${bookId}`)
}))


router.post("/:id/reviews", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const user = await db.User.findByPk(userId)
    const { review, bookId, rating } = req.body;
    const newReview = await db.Review.create({ review, rating, userId, bookId, author: user.username })
    res.json({ newReview })
}))


module.exports = router;
