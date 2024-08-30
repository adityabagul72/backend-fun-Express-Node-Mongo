const router = require('express').Router()
const {product} = require('../controllers/product.controller.js')
const {ensureAuthenticated} = require('../middlewares/ensure.authentication.js')

router.get('/',ensureAuthenticated,product)
module.exports = router