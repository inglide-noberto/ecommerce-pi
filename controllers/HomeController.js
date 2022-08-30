
const models = require('../models')
const ProductRepository = models.Product



const HomeController = {
    index: async (req, res) => {


        let productsData = await ProductRepository.findAll({
                include: {
                    require: true,
                    all: true, 
                    nested: true,
                }
            })

        productsData = productsData.map(product => product.toJSON())
        

        res.render('layout', {'page':'home', productsData})

    }
} 


module.exports = HomeController