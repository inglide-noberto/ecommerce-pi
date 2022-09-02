
window.addEventListener('load', e => {

if(arrayPage[1] == 'usuario') {
    const formLogin = document.querySelector('#formLogin')

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        console.log(email, password)

        const bodyContent =  JSON.stringify({
            email: email,
            password: password,
        })

        fetch('http://localhost:3000/usuario/logar', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: bodyContent, 
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
            window.location.href = `/usuario/${data.slug}`;
        })
        .catch(function(err) {
            console.info(err);
        });

    })
}

})