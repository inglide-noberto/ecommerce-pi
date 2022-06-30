const express = require('express')
const ProductsController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/:slug', ProductsController.productView)
router.get('/', ProductsController.storeView)
router.post('/', ProductsController.shipping)

module.exports = router