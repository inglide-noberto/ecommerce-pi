const express = require('express')
const ProfileController = require('../controllers/UserController')

const router = express.Router()

router.get('/:slug', ProfileController.index)
router.get('/:slug/pedidos', ProfileController.indexOrders)
router.get('/:slug/pedidos/:id', ProfileController.indexOrder)

module.exports = router