const express = require('express')
const ProductsController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/:id', ProductsController.productView)
router.get('/', ProductsController.storeView)

module.exports = router