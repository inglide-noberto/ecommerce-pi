const { query } = require('express')
const data = require('../data/data.json')


const ProductsController = {
    indexView: (req, res) => {
        const id = req.params.id

        if (id) {
            let product = data.find(produto => produto.id == id)
            res.render('product', {product})
        }
        else {
            res.render('not-found')
        }
    }

}

module.exports = ProductsController