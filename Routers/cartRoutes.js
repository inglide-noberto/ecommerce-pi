const express = require('express');
const CartController = require('../controllers/CartController');
const router = express.Router();

router.get('/', CartController.index);
router.get('/delivery', CartController.delivery);
router.get('/payment', CartController.payment);
router.post('/payment', CartController.pedidoFinalizado);
router.get('/:slug', CartController.show) // teste vinculo produto
// router.get('/finalizado', CartController.finalizado);v 

module.exports = router;