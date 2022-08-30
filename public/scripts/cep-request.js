
const cep = document.querySelector('#cep')
const button = document.querySelector('#button-cep')
const slug = pathname.replace("/loja/", '')
const cartSlug = pathname.replace("/cart/", '')
const divInfos = document.querySelector('#shipping-infos')


if (cep) {
    button.addEventListener('click', (event) => {
        let search = cep.value.replace("-", "")
        
    
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            body: JSON.stringify({search})
        }
    
        if (search.length == 8) {
            console.log(cep.value)
            console.log(search)
            console.log('------------------------------')
            if(page == `/loja/${slug}`) {
                fetch(`/loja/${slug}/cep`, options)
                    .then(response => { response.json()
                        .then (data => {
                            console.log(data)
                            console.log(data[0].Valor)
                            console.log(JSON.stringify(data))
    
                            if(data[0].PrazoEntrega < 2 && data[0].PrazoEntrega > 0) {
                            divInfos.innerHTML = '<span>R$ '+ data[0].Valor +'</span> <span>Prazo de entrega: <strong>' + data[0].PrazoEntrega + ' dia</strong></span>'
                            } 
                            else if(data[0].PrazoEntrega >= 2 ) {
                            divInfos.innerHTML = '<span>R$ '+ data[0].Valor +'</span> <span>Prazo de entrega: <strong>' + data[0].PrazoEntrega + ' dias</strong></span>'
                            } 
                            else {
                            divInfos.innerHTML = '<span style="color= var(--color-contrast-1)">Cep inválido</span>'
                            }
                        })
                    })
                    .catch(error => console.log(`Deu erro: ${error}`))
            } 
            
            else if (page == `/cart` || page == `/cart/${cartSlug}` ) {
                console.log('enviei')
                fetch(`/loja/minecreft-java-edition/cep`, options)
                .then(response => { response.json()
                    .then (data => {
                        console.log(data)
                        console.log(data[0].Valor)
                        console.log(JSON.stringify(data))
    
                        if(data[0].PrazoEntrega < 2 && data[0].PrazoEntrega > 0) {
                        divInfos.innerHTML = '<span id="shippingPrice">R$ '+ data[0].Valor +'</span> <span>Prazo de entrega: <strong id="shippingDate">' + data[0].PrazoEntrega + ' dia</strong></span>'
                        console.log('----cep no fetch------------')
                        console.log(resumeShippingPrice)

                        var totalValue = document.querySelector('#resumeTotalValue')
                        var pix = document.querySelector('#p-pix')



                        resumeShippingPrice.innerHTML = data[0].Valor

                        totalValue.innerHTML = parseFloat(totalValue.textContent) + parseFloat(data[0].Valor)
                        pix.innerHTML = (parseFloat(totalValue.textContent) - ((parseFloat(totalValue.textContent) / 100) * 5)) + parseFloat(data[0].Valor)



                        } else if(data[0].PrazoEntrega >= 2 ) {
                        divInfos.innerHTML = '<span id="shippingPrice">R$ '+ data[0].Valor +'</span> <span>Prazo de entrega: <strong id="shippingDate">' + data[0].PrazoEntrega + ' dias</strong></span>'
                        console.log('----resumeShippingPrice no fetch------------')
                        console.log(resumeShippingPrice)
                        resumeShippingPrice.innerHTML = data[0].Valor
                        } 
                        else {
                        divInfos.innerHTML = '<span style="color= var(--color-contrast-1)">Cep inválido</span>'
                        }
                    })
                })
                .catch(error => console.log(`Deu erro: ${error}`))
            }
        }
        else {
            divInfos.innerHTML = '<span style="color: var(--color-contrast-1)">Cep inválido</span>'
        }
    })
}
