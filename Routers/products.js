const express = require('express')
const ProductsController = require('../controllers/ProductsController')
const TestaBancoController = require('../controllers/TestaBancoController')

const router = express.Router()
router.get('/teste', TestaBancoController.testaConexoes)

router.get('/:slug', ProductsController.productView)
router.get('/', ProductsController.storeView)
router.post('/:slug/cep', ProductsController.getShipping)



module.exports = router