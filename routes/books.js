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
    let date = splitTime.slice(1, 4).join(" ")
    let reviews = await db.Review.findAll({
        where: { bookId },
        include: db.User,
        order: [["createdAt", "DESC"]]
    })
    const lowestShelf = bookshelves[0];

    let readStatus = await db.ReadStatus.findOne({ where: { userId, bookId } })
    let status;
    if (!readStatus) status = "Want to Read"
    else status = readStatus.status
    // if (!status) status = "None"

    res.render('book', {
        book,
        reviews,
        userId,
        bookshelves,
        date,
        lowestShelf,
        status
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
router.post("/reviews/:id", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    let reviewId = parseInt(req.params.id, 10)
    let reviewObject = await db.Review.findByPk(reviewId)
    if (userId === reviewObject.userId) {
        const { rating, review } = req.body;
        await reviewObject.update({ rating, review })
        res.redirect(`/books/${reviewObject.bookId}`)
    } else {
        // TODO: display a 403 response FORBIDDEN
    }
}))

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
    let bookshelf = db.Bookshelf.findByPk(bookshelfId)
    let bookshelfToBook = await db.BookshelfToBook.create({ bookshelfId: parseInt(bookshelfId), bookId: parseInt(bookId) });

    console.log("-------------------", res.ok, "----------------");
    res.json({ userId, bookshelfToBook })
    // res.redirect(200, `../../bookshelves/${bookshelfId}`);
}));

//DELETE BOOK FROM BOOKSHELF=============================================

router.delete("/:id/bookshelves", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const { bookshelfId, bookId } = req.body;
    let deletedBookfromBookshelf = await db.BookshelfToBook.destroy({ where: { bookshelfId: parseInt(bookshelfId), bookId: parseInt(bookId) } });
    res.json({ userId, deletedBookfromBookshelf })
}));

//DELETE BOOK =========================================================

router.delete("/:id", asyncHandler(async (req, res) => {
    // const userId = req.session.auth.userId
    const { bookId } = req.body;
    let book = await db.Book.findByPk(bookId)
    await db.BookToTag.destroy({ where: { bookId: parseInt(bookId) } });
    await db.ReadStatus.destroy({ where: { bookId: parseInt(bookId) } });
    await db.Review.destroy({ where: { bookId: parseInt(bookId) } });
    await db.BookshelfToBook.destroy({ where: { bookId: parseInt(bookId) } });
    let deletedBook = await db.Book.destroy({ where: { id: parseInt(bookId) } });
    console.log('DELETEEEEEEEEE', deletedBook)
    res.json(deletedBook);
}));


//ADDING TAGS ===========================================================


router.post("/:id/tags", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const user = await db.User.findByPk(userId)
    const { category, bookId } = req.body;
    let existingTag = await db.Tag.findOne({ where: { category } })

    if (!existingTag) {

        const newTag = await db.Tag.create({ category })
        let bookToTags = await db.BookToTag.create({ tagId: parseInt(newTag.id), bookId: parseInt(bookId) });

        res.json({ newTag })
    } else {
        let bookToTags = await db.BookToTag.create({ tagId: parseInt(existingTag.id), bookId: parseInt(bookId) });
        console.log(bookToTags)
        res.json({ existingTag })
    }
}))


// Edit Read Status ==============================================

router.post("/:id/readstatus", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    let bookId = parseInt(req.params.id, 10);
    const { readStatusInput } = req.body;
    let readStatus = await db.ReadStatus.findOne({ where: { bookId, userId } });
    if (!readStatus) {
        let newReadStatus = await db.ReadStatus.create({
            bookId: parseInt(bookId),
            userId: parseInt(userId),
            status: readStatusInput,
        });
    } else {
        await readStatus.update({ status: readStatusInput });
    }
    const bookshelves = await db.Bookshelf.findAll({
        where: {
            userId,
        },
    });
    let selectedBookshelf = bookshelves.filter((bookshelf => bookshelf.name === readStatusInput));

    if (!selectedBookshelf) {
        selectedBookshelf = await db.Bookshelf.create({ name: readStatusInput, userId: parseInt(userId) })
    }
    let bookshelfToBook = await db.BookshelfToBook.create({
        bookshelfId: parseInt(selectedBookshelf[0].id),
        bookId: parseInt(bookId),
    });
    res.json({ readStatusInput, bookshelfToBook });
}))


//DELETE TAG============================================================

router.delete("/:bookId/tags/:tagId", asyncHandler(async (req, res) => {

    let { bookId, tagId } = req.params;
    console.log("BACKEND", bookId, tagId)
    const bookToTag = await db.BookToTag.findOne({ where: { tagId, bookId } });
    await bookToTag.destroy();
    console.log('HELOOOOOOOOOOOOO TAAG', bookToTag)
    res.json({ bookToTag });
})
);



module.exports = router;
