const pathname = window.location.pathname
const buttonsSidebar = document.querySelectorAll('.user-page-option')


const arrayPage = pathname.split('/')
const slugUser = arrayPage[2]
const page = slugUser +'/' + arrayPage[3]
console.log(page)


const pageOrders = slugUser + '/pedidos'
const pageData = slugUser + '/conta'

if (page == pageOrders) {
    for(const button of buttonsSidebar) {
        button.classList.remove('option-select');

        if (button.classList.contains('orders')) {
            button.classList.add('option-select')
        }
    }
}

if (page == pageData) {
    for(const button of buttonsSidebar) {
        button.classList.remove('option-select');

        if (button.classList.contains('infos')) {
            button.classList.add('option-select')
        }
    }
}