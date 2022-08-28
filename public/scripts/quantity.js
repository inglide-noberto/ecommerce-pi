var count = 0;
var btns = document.querySelectorAll('.button-quantity')
var ipt = document.getElementById('soma');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const option = e.currentTarget.classList
        e.preventDefault()

        if(option.contains('more')){
            count++
        }
        else if(option.contains('less')){
            count--
            if(count == 0)
            
            alert('CARRINHO ZERADO')
        }
        ipt.value = count
    })
})




