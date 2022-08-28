const productsData = require('../data/data-products.json')


const HomeController = {
    index: (req, res) => {

        res.render('layout', {'page':'home', productsData})

    }
} 


module.exports = HomeController