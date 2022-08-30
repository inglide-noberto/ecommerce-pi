
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
        console.log(productsData)

        productsData = productsData.map(product => product.toJSON())
        
        console.log(productsData)

        res.render('layout', {'page':'home', productsData})

    }
} 


module.exports = HomeController