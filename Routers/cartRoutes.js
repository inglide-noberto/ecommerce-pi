const express = require('express');
const CartController = require('../controllers/CartController');
const router = express.Router();



router.post('/payment', CartController.pedidoFinalizado);
router.post('/delivery', CartController.delivery);
router.get('/payment', CartController.payment);
router.get('/add/:slug', CartController.add)
router.get('/', CartController.index);


module.exports = router;