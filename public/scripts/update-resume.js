window.addEventListener('load', () => {

    var resumeQuantProducts = document.querySelector('#resumeQuantProducts')
    var resumeProductsPrice = document.querySelector('#resumeProductsPrice')
    var resumeShippingPrice = document.querySelector('#resumeShippingPrice')
    var resumeTotalValue = document.querySelector('#resumeTotalValue')
    var resumeTotalValuePix = document.querySelector('.p-pix')


    if( product.quantity < 2 ) {
        resumeQuantProducts.innerHTML = product.quantity + 'produto'
    } else {
        resumeQuantProducts.innerHTML = product.quantity + 'produtos'
    }
})