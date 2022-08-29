// const baseUrl = 'http://localhost:3000'
const pathname = window.location.pathname
const arrayPage = pathname.split('/')
const isUrlLogout = arrayPage[2]
const page = pathname



window.addEventListener('load', e => {
    const buttonLogout = document.querySelector('.logout')

    console.log(buttonLogout)
    
    buttonLogout.addEventListener('click', event => {
        localStorage.removeItem('user')
    
    })
})


