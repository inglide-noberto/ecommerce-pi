window.addEventListener('load', () => {

    const productsCart = JSON.parse(localStorage.getItem('cartProducts'))
    const tbody = document.querySelector('tbody')
    var resumeShippingPrice = document.querySelector('#resumeShippingPrice')
    var resumeQuantProducts = document.querySelector('#resumeQuantProducts')
    var resumeProductsPrice = document.querySelector('#resumeProductsPrice')
    var resumeTotalValue = document.querySelector('#resumeTotalValue')
    var resumeTotalValuePix = document.querySelector('#p-pix')
    

 const inclurOrderLine = () => {
    if(productsCart.length == 0 ) {
        const productLine = document.createElement(`tr`)
        productLine.innerHTML = `<td><span>Não há produtos no carrinho ainda..</span></td>`
        tbody.appendChild(productLine)

    } else if (productsCart.length == 1){
        const productLine = document.createElement(`tr`)
        productLine.innerHTML = `<td class="td-product-image-title">
                                    <a href="/loja/${productsCart[0].slug}">
                                        <img class="cart-product-image" src="${productsCart[0].images[0].file_url}" alt="imagem do produto ${productsCart[0].title}">
                                        <div class="cart-product-description">
                                            <h3>${productsCart[0].title}</h3>
                                            <p>${productsCart[0].short_description}</p>
                                        </div>
                                    </a>
                                </td>
                                <td class="td-quantity-button">
                                    <div class="quantity-button">
                                        <button>+</button>
                                        <input class="input" type="text" value="${productsCart[0].quantity}">
                                        <button>-</button>
                                    </div>
                                </td>
                                <td>R$ ${productsCart[0].price}</td>
                                <td>
                                    <button class="button-remove">remover</button>
                                </td>`
        tbody.appendChild(productLine)

    } else {
        for(product in productsCart){
            const productLine = document.createElement(`tr`)
            productLine.innerHTML = `<td class="td-product-image-title">
                                        <a id="link" href="/loja/${productsCart.slug}">
                                            <img class="cart-product-image" src="${product.images[0].file_url}" alt="imagem do produto ${product.title}">
                                            <div class="cart-product-description">
                                                <h3 id='productTilte'>${product.title}</h3>
                                            <p id="productDescription">${product.short_description}</p>
                                            </div>
                                        </a>
                                    </td>
                                    <td class="td-quantity-button">
                                        <div class="quantity-button">
                                            <button>+</button>
                                            <input class="input" type="text" value="${product.quantity}">
                                            <button>-</button>
                                        </div>
                                    </td>
                                    <td id="productPrice">R$ ${product.price}</td>
                                    <td>
                                        <button class="button-remove" id=${product.id}>remover</button>
                                    </td>`
            tbody.appendChild(productLine)
        }
    }
}


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


    inclurOrderLine()
    atualizarOrderResume()

}

var table = document.querySelector('table');

// table.addEventListener('click', function(e) {
//     console.log(e);
// });

const removerItem = () => {
    const isProductInCart = productsCart.filter(product => product.id == resProduct.id)

    localStorage.setItem("cartProducts", JSON.stringify(productsCart));

}
})

window.addEventListener('load', function(){
    const remove = document.querySelector('.button-remove');
    remove.addEventListener('click', function(event){
        console.log('click')

        let removerElemento = document.querySelector('.cart-product-image');
removerElemento.remove();

        let productTilte = document.querySelector('#productTilte');
        link.innerHTML = 'vazio'

        let productDescription = document.querySelector('#productDescription');
        link.innerHTML = 'vazio'

        let productPrice = document.querySelector('#productPrice');
        link.innerHTML = 'vazio'

        event.preventDefault()})
})
