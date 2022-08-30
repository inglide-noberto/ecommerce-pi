const data = require('../data/data-products.json')
const ApiNodeCorreios = require('node-correios')
var models = require('../models');
const productCategory = models.ProductCategory
const ProductRepository = models.Product
const { Op } = require('sequelize'); 


const correios = new ApiNodeCorreios()

const ProductsController = {
    filterById: async (req, res) => {
        const arrayIds = []
        const arrayCategories = []
        const reqBody = req.body
        const message = {
            type: "", 
            content: ""
        }

        for (const [key, value] of Object.entries(reqBody)) {
            console.log(key + ' ' + value);
            arrayIds.push(value)
            arrayCategories.push(key)
        }

        const productsFind = await productCategory.findAll({
            where: {
                id: { [Op.in]: arrayIds }
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
        
        let productsData = []

        if(productsFind.length == 0) {
            message.type = 'error'
        }
        else if(productsFind.length == 1){
            productsData = productsData.push(productsFind[0].product_category.dataValues);
        } 
        else{
            productsData = productsFind.map(product => product.product_category.toJSON())
        }

        for(i = 0; i < arrayCategories.length; i++) {
            message.type = "filter-category"
            message.content += arrayCategories[i] + " " 
        }

        res.render('layout', {'page':'store', productsData, message})
    },




    filterByWord: async (req, res) => {
        const arraySearch = []
        let search = req.body.searchInput
        const message = {
            type: "", 
            content: ""
        }
        console.log('---entrei----------------')
        
        console.log(search)

        search = "%"+ search +"%"


        
        const productsFind = await ProductRepository.findAll({
            where: {
                title: {
                    [Op.like]: search,
                }
            },
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                },
            ],
            subQuery: false,
        })
        // console.log(productsFind)
        let productsData = []

        if(productsFind.length == 0) {
            message.type = 'error'
        }
        else if(productsFind.length == 1){
            console.log(productsFind)
            productsData = productsFind;
        } 
        else{
            productsData = productsFind.map(product => product.toJSON())
        }

        message.content = search


       
        console.log(productsData)

        res.render('layout', {'page':'store', productsData, message})
    },




    storeView: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }


        let productsData = await ProductRepository.findAll({
            include: {
                require: true,
                all: true, 
                nested: true,
            }
        })


        productsData = productsData.map(product => product.toJSON())
        


        res.render('layout', {'page':'store', productsData, message})      
        
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
        const message = {
            type: "", 
            content: ""
        }


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
            
            
            return res.render('layout', {'page':'product', product, productsData, message})
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