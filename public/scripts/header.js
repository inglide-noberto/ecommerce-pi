const headerButtons = document.querySelectorAll('.link-header')

const pageStore = '/loja'
const pageNew = '/lancamentos'
const pagePromo = '/promocoes'

if (page.includes(pageStore)) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('store')) {
            button.classList.add('page-select')
        }
    }
}

if (page.includes(pageNew)) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('new')) {
            button.classList.add('page-select')
        }
    }
}

if (page.includes(pagePromo)) {
    for(const button of headerButtons) {
        button.classList.remove('page-select');

        if (button.classList.contains('sale')) {
            button.classList.add('page-select')
        }
    }
}
