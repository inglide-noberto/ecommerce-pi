const express = require('express')
const ProductsController = require('../controllers/ProductsController')

const router = express.Router()

router.post('/filtrar', ProductsController.filterByWord)
router.post('/filtro', ProductsController.filterById)
router.get('/:slug', ProductsController.productView)
router.post('/:slug/cep', ProductsController.getShipping)
router.get('/', ProductsController.storeView)



module.exports = router