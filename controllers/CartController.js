const dataorders = require('../data/data-orders.json')
const productsData = require('../data/data-products.json')
const dataCart = require('../data/data-cart.json')
const models = require('../models')
const productRepository = models.Product


const fs = require('fs')

const CartController = {
    index: (req,res)=>{
        let cart = dataCart[0]
        
        return res.render('layout', {'page': 'cart' , cart })
    },
    delivery: (req,res)=>{
        return res.render('layout', {'page': 'cart-delivery'})
    },
    payment: (req,res)=>{

        return res.render('layout', {'page': 'cart-payment'})
    },
    pedidoFinalizado:(req,res)=>{
        return res.send("sucesso")
    },
    //teste de vinculo products
    show: async (req,res) => {
        const {slug} = req.params
        const product = await productRepository.findOne({  
            where: {
                slug:slug
            },
            include: {
                require: true,
                all: true, 
                nested: true,
            }

         })
         
        console.log(product)
         return res.render('layout', {'page': 'cart', product})
    }
}

module.exports = CartController;