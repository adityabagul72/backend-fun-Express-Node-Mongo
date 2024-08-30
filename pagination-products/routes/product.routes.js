// routes/product.routes.js
const express = require('express');
const router = express.Router();

const { getProducts, createProduct } = require('../controller/product.controller.js');

// Route to show the add product form
router.get('/products/new',(req, res) => {
    res.render('addProduct');
});

// Route to list products
router.get('/products', getProducts);

// Route to handle product creation
router.post('/products', createProduct);

module.exports = router;
