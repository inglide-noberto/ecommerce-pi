const { url } = require('inspector')
const data = require('../data/data-products.json')
const ApiNodeCorreios = require('node-correios')

const correios = new ApiNodeCorreios()


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
    },

    shipping: (req, res) => {
        const { slug } = req.params
        const productsData = data

        let product = productsData.find(produto => produto.slug == slug)

        const nCdServico = 40010,
              sCepOrigem = "78550-244",
              sCepDestino = req.body.cepDestino,
              nVlPeso = product.weight,
              nCdFormato = product.format,
              nVlComprimento = product.length,
              nVlAltura = product.height,
              nVlLargura = product.width,
              nVlDiametro = product.diameter

        
        correios.calcPrecoPrazo({
            nCdServico,
            sCepOrigem,
            sCepDestino,
            nVlPeso,
            nCdFormato,
            nVlComprimento,
            nVlAltura,
            nVlLargura,
            nVlDiametro, 
        }).then(result => {
    
            return res.json(result)
    
        }).catch(error => {
    
            return res.json(error)
    
        });
    }
}



module.exports = ProductsController