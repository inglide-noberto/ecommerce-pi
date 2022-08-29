const express = require('express');
const AdminController = require('../controllers/AdminController');
const router = express.Router();

router.get('/', AdminController.index);
router.get('/vendas', AdminController.showSales);
router.get('/produtos', AdminController.showProducts);
router.get('/produtos/criar', AdminController.showFormProducts);

module.exports = router;