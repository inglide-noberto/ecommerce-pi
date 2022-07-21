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
            // Inclui o produto no objeto do carrinho
            dataCart[0].products.push({ "products-id": product.id , "quantity": "1"})
            // transforma o retorno em JSON
            let carrinho = JSON.stringify(dataCart)

            // console log das variaveis para ver que tipo de objeto estão armazenando
            console.log("-------------------------------")
            console.log(dataCart)
            console.log("-------------------------------")
            console.log(carrinho)

            // escreve no data-cart.json o novo JSON com o produto produto inserido
            fs.writeFileSync( 'data/data-cart.json' , carrinho, (err) => {
                if (err) { console.error(err) };
                console.log("File has been created");
            })

            // redireciona para renderizar o carrinho
            res.redirect('/cart')
        }
        else{
            res.status(404).send()
        }
    }
}

module.exports = CartController;