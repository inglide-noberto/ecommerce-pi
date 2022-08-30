const { url } = require('inspector')
const data = require('../data/data-products.json')
const ApiNodeCorreios = require('node-correios')
var models = require('../models');
const productCategory = models.ProductCategory
const category = models.Category
const ProductRepository = models.Product


const correios = new ApiNodeCorreios()

const ProductsController = {
    productFilter: async (req, res) => {
        
        const productsFind = await productCategory.findAll({
            where: {
                id_category: 1
            },
            include: [
                {
                    models: ProductRepository,
                    require: true,
                    all: true,
                    nested: true,
                },
            ],
            subQuery: false,
        })
        console.log(productsFind)
        let productsData = []

        if(productsFind.length <= 1){
            productsData = productsFind[0].toJson();
        }
        else{
            productsData = productsFind.map(product => product.toJSON())
        }
        res.render('layout', {'page':'store', productsData})
    },
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



    productJson: async (req, res) => {
        const {slug} = req.params
        let product = await ProductRepository.findOne({
            where: {
                slug: slug
            },
            include: {
                require: true,
                all: true, 
                nested: true,
            }

        });
        
        if (product) {
            product = product.toJSON();
            console.log('------product-------');
            console.log(product);

            let productsData = await ProductRepository.findAll({
                include: {
                    require: true,
                    all: true, 
                    nested: true,
                }
            })
            
            if(productsData.length > 1)
                productsData = productsData.map(product => product.toJSON())
            else
                productsData = productsData[0].toJSON()
            
            console.log('------productSSSSSSSSSSS-------');
            console.log(productsData[1].product_category);

            
            return res.json(product)
        }
        else {
            res.status(404)
        }
    },


    productView: async (req, res) => {
        const {slug} = req.params
        let product = await ProductRepository.findOne({
            where: {
                slug: slug
            },
            include: {
                require: true,
                all: true, 
                nested: true,
            }

        });
        
        if (product) {
            product = product.toJSON();
            console.log('------product-------');
            console.log(product);

            let productsData = await ProductRepository.findAll({
                include: {
                    require: true,
                    all: true, 
                    nested: true,
                }
            })
            
            if(productsData.length > 1)
                productsData = productsData.map(product => product.toJSON())
            else
                productsData = productsData[0].toJSON()
            
            console.log('------productSSSSSSSSSSS-------');
            console.log(productsData[1].product_category);

            
            return res.render('layout', {'page':'product', product, productsData})
        }
        else {
            res.render('layout', {'page':'not-found'})
        }
    },



    getShipping: (req, res) => {

        const { slug } = req.params
        const productsData = data
        const { search } = req.body

        let product = productsData.find(produto => produto.slug == slug)

        const nCdServico = 40010,
              sCepOrigem = "78550-244",
              sCepDestino = search,
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
    
            return res.send(result)
    
        }).catch(error => {
    
            return res.send(error)
    
        });
    },
}



module.exports = ProductsController