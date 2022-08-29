var models = require('../models');
const UserRepository = models.User
const OrderRepository = models.Order
const AdressRepository = models.Adress
const ProductRepository = models.Product
const OrderStatusRepository = models.OrderStatus
const PaymentMethodRepository = models.PaymentMethod
const CourierRepository = models.Courier
const OrderProductsRepository = models.OrderProducts



const AdminController = {
    index: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const ordersSearch = await OrderRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }],
            limit: 7
            });
            
        const orders = ordersSearch.map(product => product.toJSON())


        const productsSearch = await ProductRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }],
                limit: 7
            });
            
        const products = productsSearch.map(product => product.toJSON())

        console.log(orders)
        console.log('----------------------')
        console.log(products)

        res.render('adminPainel', {'page': 'admin-dashboard', orders, products, message})
    }, 


    showSales: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const ordersSearch = await OrderRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }]
            });
            
        const orders = ordersSearch.map(product => product.toJSON())

        console.log(orders)

        res.render('adminPainel', {'page': 'admin-sales', orders, message})
    }, 



    showProducts: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const productsSearch = await ProductRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }]
            });
            
        const products = productsSearch.map(product => product.toJSON())

        console.log(products)



        res.render('adminPainel', {'page': 'admin-products', products, message})
    },


    showProducts: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const productsSearch = await ProductRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }]
            });
            
        const products = productsSearch.map(product => product.toJSON())

        console.log(products)



        res.render('adminPainel', {'page': 'admin-products', products, message})
    }, 


    showFormProducts: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('adminPainel', {'page': 'admin-product-details', message})
    }, 
}



module.exports = AdminController