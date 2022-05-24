let data = require('../data/data.json')


const ProductsController = {
    indexView: (req, res) => {
        res.render('product', { image: data[0].image})
        console.log(image)
    }

}

module.exports = ProductsController