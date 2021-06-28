const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { Op } = require("sequelize");



router.get("/:id", asyncHandler(async (req, res) => {
    let searchParams = req.params.id
    console.log(searchParams)
    let searchBooks = await db.Book.findAll({ 
        limit: 10,
        where: {
            title: { 
                [Op.iLike]: '%' + searchParams + '%'
            }
        }
    })
    res.json({ searchBooks })
}))


module.exports = router;
