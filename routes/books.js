const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

router.get("/:id", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    if (!userId) res.redirect("/users/login");
    let bookId = parseInt(req.params.id, 10)
    let book = await db.Book.findByPk(bookId, { include: db.Tag })
    let bookshelves = await db.Bookshelf.findAll({ where: { userId } })
    let stringTime = book.updatedAt.toString()
    let splitTime = stringTime.split(" ")
    let date = splitTime.slice(1,4).join(" ")
    let reviews = await db.Review.findAll({
        where: { bookId },
        include: db.User,
        order: [["createdAt", "DESC"]]
    })

    res.render('book', {
        book,
        reviews,
        userId,
        bookshelves,
        date
    })
}))

//UPDATING BOOK==================================================

router.post("/:id", asyncHandler(async (req, res) => {
    let bookId = parseInt(req.params.id, 10)
    let book = await db.Book.findByPk(bookId)
    const { cover, title, author, published, description } = req.body
    await book.update({ cover, title, author, published, description })
    res.redirect(`/books/${bookId}`)
}))

//ADDING REVIEW====================================================

router.post("/:id/reviews", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const user = await db.User.findByPk(userId)
    const { review, bookId, rating } = req.body;

    const newReview = await db.Review.create({ review, rating, userId, bookId, author: user.username })
    res.json({ newReview })
}))

//EDIT REVIEW FROM BOOK=============================================


//DELETE REVIEW FROM BOOK=============================================
router.delete("/reviews/:id", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const reviewId = parseInt(req.params.id);
    const review = await db.Review.findByPk(reviewId)
    if (userId === review.userId) {
        let destroyedReview = await db.Review.destroy({ where: { id: reviewId } });
        res.json()
    } else {
        // TODO: display a 403 response FORBIDDEN
    }

}));


//ADD BOOK TO BOOKSHELF=============================================

router.post("/:id/bookshelves", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    // const user = await db.User.findByPk(userId)
    const { bookshelfId, bookId } = req.body;
    // let bookshelf = db.Bookshelf.findByPk(bookshelfId)
    let bookshelfToBook = await db.BookshelfToBook.create({ bookshelfId: parseInt(bookshelfId), bookId: parseInt(bookId) });
    res.json({ userId, bookshelfToBook })
}));

//DELETE BOOK FROM BOOKSHELF=============================================

router.post("/:id/delete", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const { bookId } = req.body;
    let destroyedBook = await db.Book.destroy({ where: { id: parseInt(bookId) } });
    res.json({ userId })
}));


//ADDING TAGS ===========================================================


router.post("/:id/tags", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const user = await db.User.findByPk(userId)
    const { category, bookId } = req.body;
    const newTag = await db.Tag.create({ category })
    let bookToTags = await db.BookToTag.create({ tagId: parseInt(newTag.id), bookId: parseInt(bookId) });
    res.json({ newTag })
}))

module.exports = router;
