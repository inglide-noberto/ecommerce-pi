const express = require('express');
const AdminController = require('../controllers/AdminController');
const router = express.Router();

router.get('/vendas', AdminController.showSales);
router.get('/produtos', AdminController.showProducts);
router.get('/produtos/criar', AdminController.showFormProducts);
router.post('/produtos/criar', AdminController.createProduct);
router.get('/', AdminController.index);

module.exports = router;