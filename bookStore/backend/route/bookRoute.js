const express = require('express')
const getBook = require('../controllers/book.controller.js')

const router = express.Router();
router.get('/',getBook);

module.exports = router;

