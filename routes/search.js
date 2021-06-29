const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { Op } = require("sequelize");



router.get("/:id", asyncHandler(async (req, res) => {
    if (!req.params.id === "|") return res.json ({searchBooks:[]})
    let searchParams = req.params.id
    let searchBooks = await db.Book.findAll({ 
        limit: 8,
        where: {
            title: { 
                [Op.iLike]: '%' + searchParams + '%'
            }
        }
    })
    res.json({ searchBooks })
}))


module.exports = router;
