const dataOrders = require('../data/data-orders.json')
const dataClients = require('../data/data-clients.json')
const dataProducts = require('../data/data-products.json')



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

        res.render('layout', {'page':'my-account', orders, user, dataProducts})
    },

    indexOrders: (req, res) => {        
        const { slug } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const orders = dataOrders.filter( order => order.id_user == user.id)

        res.render('layout', {'page':'my-orders', orders, user, dataProducts})
    },

    indexOrder: (req, res) => {        
        const { slug, id } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const order = dataOrders.find( order => order.id == id)

        res.render('layout', {'page':'order', order, user, dataProducts})
    }
} 


module.exports = UserController