var models = require('../models');
const UserRepository = models.User
const OrderRepository = models.Order
const AdressRepository = models.Adress
const ProductRepository = models.Product
const OrderStatusRepository = models.OrderStatus
const PaymentMethodRepository = models.PaymentMethod
const CourierRepository = models.Courier
const OrderProductsRepository = models.OrderProducts



const UserController = {
    index: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('adminPainel', {'page': 'admin-dashboard', message})
     }, 


     showSales: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('adminPainel', {'page': 'admin-sales', message})
     }, 


     showProducts: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('adminPainel', {'page': 'admin-products', message})
     }, 



     showFormProducts: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('adminPainel', {'page': 'admin-product-details', message})
     }, 
}



module.exports = UserController