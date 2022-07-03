const dataorders = require('../data/data-orders.json')
const productsData = require('../data/data-products.json')
const dataCart = require('../data/data-cart.json')

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
    show: (req,res) => {
        const {slug} = req.params

        const product = productsData.find(product => product.slug === slug)

        if(product){
            // retornar os dados

            dataCart[0].products.push({ "products-id": product.id , "quantity": 1})
            let carrinho = JSON.stringify(dataCart)
            fs.writeFileSync( '/data/data-cart.json' , carrinho)

            res.redirect('/')
        }
        else{
            res.status(404).send()
        }
    }
}

module.exports = CartController;