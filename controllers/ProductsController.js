const { url } = require('inspector')
const data = require('../data/data-products.json')


const ProductsController = {
    storeView:(req, res) => {
        const query = req.query
        const acao = req.query.Ação
        const { categorie } = query

        if( categorie != undefined) {
            const productsData = data.filter( product => product.principal_categorie == categorie)

            res.render('layout', {'page':'store', productsData})
        }
        else if (acao == "on"){
            const productsData = data.filter( product => product.principal_categorie == "Ação")

            res.render('layout', {'page':'store', productsData})
        }
        else{
            const productsData = data
            console.log(acao)

            res.render('layout', {'page':'store', productsData})      
        }
    },



    productView: (req, res) => {
        const { slug } = req.params
        const productsData = data
        
        let product = productsData.find(produto => produto.slug == slug)

        if (product) {
            res.render('layout', {'page':'product', product, productsData})
        }
        else {
            res.render('layout', {'page':'not-found'})
        }
    }
}



module.exports = ProductsController