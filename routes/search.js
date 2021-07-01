const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { Op } = require("sequelize");



router.get("/:id", asyncHandler(async (req, res) => {
    if (!req.params.id === "|") return res.json({ searchBooks: [] })
    let searchParams = req.params.id
    let searchBooks = await db.Book.findAll({
        limit: 8,
        include: [{
            model: db.Tag,
            duplicating: false
        }],
        where: {
            [Op.or]: [
                { title: { [Op.iLike]: '%' + searchParams + '%' } },
                { '$Tags.category$': { [Op.iLike]: '%' + searchParams + '%' } }
            ]
        },
        // group: ['Books.id']
    })
    res.json({ searchBooks })
}))


module.exports = router;


// notes: hidden feature duplicating: false https://github.com/sequelize/sequelize/issues/4446
