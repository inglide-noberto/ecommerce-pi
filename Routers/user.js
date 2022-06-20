const express = require('express')
const ProfileController = require('../controllers/UserController')

const router = express.Router()

router.get('/:slug', ProfileController.index)
router.get('/:slug/pedidos', ProfileController.indexOrders)
router.get('/:slug/pedidos/:id', ProfileController.indexOrder)

router.get('/:slug/conta', ProfileController.indexUser)
router.post('/:slug/conta', ProfileController.updateUser)
router.post('/:slug/conta/endereco', ProfileController.updateShipping)


module.exports = router