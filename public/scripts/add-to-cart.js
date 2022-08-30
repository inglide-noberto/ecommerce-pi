
window.onload = () => {
    let cartProducts 
    const seachCartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]")
    if( seachCartProducts != `"[object Object]"`){
        cartProducts =  JSON.parse(localStorage.getItem("cartProducts") || "[]")
    } else{
        cartProducts = []
    }
        
    const slug = arrayPage[2]
    const buttonComprar = document.querySelector('.product-info-button')


    buttonComprar.addEventListener('click', event => {

        fetch(`http://localhost:3000/cart/add/${slug}`, {
            method: 'get',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            redirect: 'follow',
        })
        .then(res => res.json())
        .then(resProduct => {

            const isProductInCart = cartProducts.filter(product => product.id == resProduct.id)
            console.log('isProductInCart')
            console.log(isProductInCart)
            if(isProductInCart.length > 0) {
                console.log(true)
                if(cartProducts > 2){
                    cartProducts.map(product => {
                        if(product.id == resProduct.id){
                            product.quantity  ++
                            console.log('INCLUIR NO IF')
                            console.log(cartProducts)
                        }
                    })
                } else{
                    cartProducts[0].quantity ++
                    console.log('INCLUIR NO ELSE')  
                    console.log(cartProducts)
                }
                
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                
            } else {
                console.log('INCLUIR NO ELSE ELSE')  
                resProduct.quantity = 1
                cartProducts.push(resProduct)
                console.log(cartProducts)
                localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            }

        })
        .catch(function(err) {
            console.info(err);
        });
    })
} 