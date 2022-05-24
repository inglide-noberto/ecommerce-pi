const express = require('express')
const ProductsController = require('../controllers/ProductsController')

const router = express.Router()

router.get('/:id', ProductsController.indexView)

module.exports = router