window.addEventListener('load', () => {

    const formAccount = document.querySelector('.form-user-account');
    const formAddress = document.querySelector('.form-user-address');
    const formDelete = document.querySelector('.delete-account');
    const divMessageAccount = document.querySelector('.account-message');
    const divMessageAddress = document.querySelector('.address-message');
    
    
    formAccount.addEventListener('submit', (event) => {
        event.preventDefault();
        divMessageAccount.innerHTML = '';

        let cpf = document.querySelector('#cpf');
        let phone = document.querySelector('#phone');

        cpf = cpf.value.replace(/\D/gim, '')
        phone = phone.value.replace(/\D/gim, '')
        

        if(cpf.length < 11) {
            divMessageAccount.innerHTML += `<span class="in-line-message">CPF invalido</span>`
        }
        if (phone.length < 11) {
            divMessageAccount.innerHTML += `<span class="in-line-message">Telefone invalido</span>`
        } else {
            formAccount.submit()
        }

        // setTimeout(() => {
        //     divMessageAccount.innerHTML = ''
        // }, 6000);
    })

    formAddress.addEventListener('submit', (event) => {
        
        event.preventDefault();
        divMessageAddress.innerHTML = '';

        let cep = document.querySelector('#zipCode');
        cep = cep.value.replace(/\D/gim, '')

        if(cep.length < 8) {
            divMessageAddress.innerHTML += `<span class="in-line-message">CEP invalido</span>`
        } else {
            formAddress.submit()
        }

    })

    formDelete.addEventListener('submit', (event) => {
        event.preventDefault()

        var name = confirm("Sua conta será apagada permanentemente e não poderá ser recuperada. Tem certeza que deseja apaga-la?")
        if (name==true)
        {
        document.write("Você pressionou o botão OK!")
        }
        else
        {
        document.write("Você pressionou o botão CANCELAR")
        }
    })

})