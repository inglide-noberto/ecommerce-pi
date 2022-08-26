const express = require('express')
const ProfileController = require('../controllers/UserController')
 
const router = express.Router()

router.get('/', ProfileController.index)
router.get('/:slug', ProfileController.showUser)
router.get('/:slug/pedidos', ProfileController.indexOrders)
router.get('/:slug/pedidos/:id', ProfileController.showOrder)

router.get('/:slug/conta', ProfileController.showAccount)
router.post('/:slug/conta', ProfileController.updateUser)
router.post('/:slug/conta/endereco', ProfileController.updateShipping)
router.post('/:slug/excluir/:id', ProfileController.delete)

router.post('/criar', ProfileController.create)
router.post('/logar', ProfileController.login)


module.exports = router