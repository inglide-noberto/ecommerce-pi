var count = 0;
var res =0;
var btns = document.querySelectorAll('.button-quantity')
var ipt = document.getElementById('soma');
var preco = document.querySelector('.teste-price')
var elm = document.querySelectorAll('.element')

var valor = parseFloat(document.querySelector('.teste-price').value)


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const option = e.currentTarget.classList
        e.preventDefault()

        if(option.contains('more')){
            count++
            res = count * valor
            document.querySelector('.teste-price').value = res;
        }
        else if(option.contains('less')){
            count--
            res = count * valor
            document.querySelector('.teste-price').value = res;

            if(count == 0){
                 alert('CARRINHO ZERADO')
                 document.querySelector('.teste-price').remove()
            }
        }
        ipt.value = count
    })
})

module.exports = count






