// controllers/product.controller.js
const productModel = require('../models/product.models.js');

// Fetch products with pagination and price filtering
const getProducts = async (req, res) => {
    const perPage = 12;
    const page = parseInt(req.query.page) || 1;
    
    // Extract price filter from query parameters
    const minPrice = parseFloat(req.query.minPrice) || 0; // default to 0 if not specified
    const maxPrice = parseFloat(req.query.maxPrice) || Number.MAX_SAFE_INTEGER; // default to a very high number

    try {
        // Filter products by price range
        const filter = {
            price: {
                $gte: minPrice, // Greater than or equal to minPrice
                $lte: maxPrice, // Less than or equal to maxPrice
            }
        };

        const products = await productModel.find(filter)
            .skip((perPage * page) - perPage)
            .limit(perPage);

        const count = await productModel.countDocuments(filter);

        res.render('products', {
            products,
            current: page,
            pages: Math.ceil(count / perPage),
            minPrice,
            maxPrice
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

// Handle product creation
const createProduct = async (req, res) => {
    const { name, imageUrl, description, price } = req.body;

    try {
        const newProduct = new productModel({
            name,
            imageUrl,
            description,
            price,
        });

        await newProduct.save();
        res.redirect('/products');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error while uploading product');
    }
};

module.exports = { getProducts, createProduct };
