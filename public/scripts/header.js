const headerButtons = document.querySelectorAll('.link-header')

console.log(page)

const pageHome = '/'
const pageStore = '/loja'
const pageNew = '/lancamentos'
const pagePromo = '/promocoes'

if (page == pageHome) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('home')) {
            button.classList.add('page-select')
        }
    }
}


if (page == pageStore) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('store')) {
            button.classList.add('page-select')
        }
    }
}

if (page == pageNew) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('new')) {
            button.classList.add('page-select')
        }
    }
}

if (page == pagePromo) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('sale')) {
            button.classList.add('page-select')
        }
    }
}
