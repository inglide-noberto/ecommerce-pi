const CartController = {
    index: (req,res)=>{
        return res.render('layout', {'page': 'cart'})
    },
    delivery: (req,res)=>{
        return res.render('layout', {'page': 'cart-delivery'})
    },
    payment: (req,res)=>{
        return res.render('layout', {'page': 'cart-payment'})
    }
}

module.exports = CartController;