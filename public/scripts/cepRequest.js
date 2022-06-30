

const cep = document.querySelector('#cep')
const button = document.querySelector('#button-cep')
const slug = (window.location.pathname).replace("/loja/", '')
const divInfos = document.querySelector('#shipping-infos')



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

    fetch(`/loja/${slug}/cep`, options)
        .then(response => { response.json()
            .then (data => {
                console.log(data)
                console.log(data[0].Valor)
                console.log(JSON.stringify(data))
                divInfos.innerHTML = '<span>R$ '+ data[0].Valor +'</span> <span>Prazo de entrega: <strong>' + data[0].PrazoEntrega + ' dias</strong></span>'
            })
        })
        .catch(error => console.log(`Deu erro: ${error}`))

})