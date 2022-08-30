if(arrayPage[1] == 'usuario') {
    const formLogin = document.querySelector('.form-login')

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        fetch('http://localhost:3000/usuario/logar', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }), 
            redirect: 'follow',
        })
        .then(res => res.json())
        .then(data => {
            const formatedData = JSON.stringify(data)
            localStorage.setItem('user', formatedData)
            window.location.href = `/usuario/${data.slug}`;
        })
        .catch(function(err) {
            console.info(err);
        });

    })
}
