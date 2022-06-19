const dataOrders = require('../data/data-orders.json')
const dataClients = require('../data/data-clients.json')
const dataProducts = require('../data/data-products.json')
const rootDir = require("../utils/rootDir")



const UserController = {
    index: (req, res) => {        
        const { slug } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const orders = dataOrders.filter( order => order.id_user == user.id)
        

        // for(order of orders) {
        //     for(product of order.products) {
        //         products = dataProducts.find( productOrder => productOrder.id == product)
        //         console.log(products)
        //     }
        // }

        res.render('layout', {'page':'user-account', orders, user, dataProducts, rootDir})
    },


    indexOrders: (req, res) => {        
        const { slug } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const orders = dataOrders.filter( order => order.id_user == user.id)

        res.render('layout', {'page':'user-orders', orders, user, dataProducts, rootDir})
    },


    indexOrder: (req, res) => {        
        const { slug, id } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const orders = dataOrders.filter( order => order.id_user == user.id)
        const order = orders.find( order => order.id == id)

        res.render('layout', {'page':'user-order', order, user, dataProducts, rootDir})
    },
    

    update: (req, res) => {
        const { slug } = req.params
        const user = dataClients.find( user => user.slug == slug)

        
        res.render('layout', {'page':'user-informations', user, rootDir})
    }
}


module.exports = UserController