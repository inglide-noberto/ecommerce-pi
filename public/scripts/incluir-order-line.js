const productsCart = JSON.parse(localStorage.getItem('cartProducts'))
const tbody = document.querySelector('tbody')

    console.log(productsCart)
    console.log('--------tbody-------')
    console.log(tbody)


if(productsCart && tbody) {
    if(productsCart.lenght = 0 ) {
        const productLine = document.createElement(`tr`)
        productLine.innerHTML = `<td><span>Não há produtos no carrinho ainda..</span></td>`
        tbody.appendChild(productLine)

    } else if (productsCart.lenght <= 1){
        const productLine = document.createElement(`tr`)
        productLine.innerHTML = `<td class="td-product-image-title">
                                    <a href="#">
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
                                        <a href="#">
                                            <img class="cart-product-image" src="${product.images[0].file_url}" alt="imagem do produto ${product.title}">
                                            <div class="cart-product-description">
                                                <h3>${product.title}</h3>
                                                <p>${product.short_description}</p>
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
                                    <td>R$ ${product.price}</td>
                                    <td>
                                        <button class="button-remove" id=${product.id}>remover</button>
                                    </td>`
            tbody.appendChild(productLine)
        }
    }

}


var table = document.querySelector('table');

table.addEventListener('click', function(e) {
    console.log(e);
});

const removerItem = () => {
    const isProductInCart = productsCart.filter(product => product.id == resProduct.id)

    localStorage.setItem("cartProducts", JSON.stringify(productsCart));

}