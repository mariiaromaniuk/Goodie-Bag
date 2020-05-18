'use strict'
const { Candy } = require('../db/index');
const router = require('express').Router();

// route to serve up all candies
router.get('/', async (req, res, next) => {
    try {
        const candies = await Candy.findAll();
        res.json(candies);
    } catch (error) {
        next(error)
    }
})

module.exports = router
