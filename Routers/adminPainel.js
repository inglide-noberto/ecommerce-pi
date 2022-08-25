const express = require('express');
const AdminPainelController = require('../controllers/AdminPainelController');
const router = express.Router();

router.get('/', AdminPainelController.index);
router.get('/vendas', AdminPainelController.showSales);
router.get('/produtos', AdminPainelController.showProducts);
router.get('/produtos/criar', AdminPainelController.showFormProducts);

module.exports = router;