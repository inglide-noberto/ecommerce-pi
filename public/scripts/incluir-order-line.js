let productsCart = JSON.parse(localStorage.getItem('cartProducts'))


const createProductLine = (product, tbody) => {
    let price = 0
    product.promotional_price_status ? price = product.promotional_price : price = product.price


    const productLine = document.createElement(`tr`)
    productLine.innerHTML = `<td class="td-product-image-title">
                                <a href="/loja/${product.slug}">
                                    <img class="cart-product-image" src="${product.images[0].file_url}" alt="imagem do produto ${product.title}">
                                    <div class="cart-product-description">
                                        <h3>${product.title}</h3>
                                        <p class="product-description">${product.short_description}</p>
                                    </div>
                                </a>
                            </td>
                            <td class="td-quantity-button">
                                <div class="quantity-button">
                                    <button type="reset"onClick="decrementQuantity(this)" id="${product.id}">-</button>
                                    <input class="input" type="text" value="${product.quantity}">
                                    <button type="reset"onClick="incrementQuantity(this)" id="${product.id}">+</button>
                                </div>
                            </td>
                            <td>R$ ${(price * product.quantity).toFixed(2)} </td>
                            <td>
                                <button type="reset" class="button-remove" id="${product.id}" onClick="removeProduct(this)">remover</button>
                            </td>`
    tbody.appendChild(productLine)

}

const inclurCartLine = (dataProducts, tbody) => {
    if(dataProducts.length == 0 ) {
        const productLine = document.createElement(`tr`)
        productLine.innerHTML = `<td><span class="not-products">Não há produtos no carrinho...</span></td>`
        tbody.appendChild(productLine)
    } 
    else if (dataProducts.length == 1){
        createProductLine(dataProducts[0], tbody)
    } 
    else {
        for(product of dataProducts){
            createProductLine(product, tbody)         
        }
    }
}

const updateCartProducts = (json) => {
    localStorage.setItem("cartProducts", JSON.stringify(json));
    window.location.reload()
}

const removeProduct = (element) => {
    const index = productsCart.findIndex((product) => product.id == element.id);
    productsCart.splice(index, 1)
    updateCartProducts(productsCart)
}

const incrementQuantity = (element) => {
    const index = productsCart.findIndex((product) => product.id == element.id);
    productsCart[index].quantity ++
    updateCartProducts(productsCart)
}

const decrementQuantity = (element) => {
    const index = productsCart.findIndex((product) => product.id == element.id);
    
    productsCart[index].quantity --
    updateCartProducts(productsCart)

    if(productsCart[index].quantity <= 0) 
        removeProduct(element)
}

window.addEventListener('load', () => {
    
    const tbody = document.querySelector('tbody')
    var resumeQuantProducts = document.querySelector('#resumeQuantProducts')
    var resumeProductsPrice = document.querySelector('#resumeProductsPrice')
    var resumeTotalValue = document.querySelector('#resumeTotalValue')
    var resumeTotalValuePix = document.querySelector('#p-pix')
    

    const atualizarOrderResume = () => {
        if(productsCart.length == 0 ) {
            resumeQuantProducts.innerHTML = 'Não há nenhum produto ainda'
            resumeProductsPrice = ''
        } 
        
        else if (productsCart.length == 1){

            var totalProducts = productsCart[0].price * productsCart[0].quantity
            var totalOrder = totalProducts

            resumeQuantProducts.innerHTML = '1'
            resumeProductsPrice.innerHTML = totalProducts

            console.log()
            resumeTotalValue.innerHTML = totalOrder
            resumeTotalValuePix.innerHTML = totalOrder - ((totalOrder / 100) * 5)

        } 
        
        else {
            var totalProducts = 0
            for (product in productsCart){
                total = productsCart.price * productsCart.quantity
            }
            resumeQuantProducts.innerHTML = productsCart.lenght + 'produtos'
            resumeProductsPrice.innerHTML = 'R$ ' + totalProducts
        }



        resumeShippingPrice = ''
        resumeTotalValue= ''
        resumeTotalValuePix= ''
    }



    if(productsCart && tbody) {
        inclurCartLine(productsCart, tbody)
        atualizarOrderResume()

    }

})