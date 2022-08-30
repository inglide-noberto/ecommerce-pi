const dataorders = require('../data/data-orders.json')
const productsData = require('../data/data-products.json')
const dataCart = require('../data/data-cart.json')
const models = require('../models')
const CartUserRepository = models.CartUser
const ProductRepository = models.Product


const fs = require('fs')

const CartController = {
    
    add: async (req,res) => {
        const { slug } = req.params
        console.log('tooooo aqui add')

        let product = await ProductRepository.findOne({  
            where: {
                slug:slug
            },
            include: {
                require: true,
                all: true, 
                nested: true,
            }

        })
        console.log('tooooo aqui')
        console.log(product)
        product = product.toJSON()
        return res.json(product)
    },
    index: (req,res)=>{
        // let cart = dataCart[0]
        
         return res.render('layout', {'page': 'cart' })
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
        const {id} = req.params
        const product = await CartUserRepository.findAll({  
            where: {
                id_user:id
            },
            include: {
                require: true,
                all: true, 
                nested: true,
            }

         })
         res.locals.cart = product;
        console.log(product.toJSON())
         return res.render('layout', {'page': 'cart', product})
    },

    
}

module.exports = CartController;