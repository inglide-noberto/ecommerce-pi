const { redirect } = require("express/lib/response")

const CartController = {
    index: (req,res)=>{
        return res.render('layout', {'page': 'cart'})
    },
    delivery: (req,res)=>{
        return res.render('layout', {'page': 'cart-delivery'})
    },
    payment: (req,res)=>{
        return res.render('layout', {'page': 'cart-payment'})
    },
    pedidoFinalizado:(req,res)=>{
        return res.send("sucesso")
    }
}

module.exports = CartController;