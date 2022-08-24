const page = window.location.pathname
const buttonsSidebar = document.querySelectorAll('.sidebar-button')

const pageAdmin = '/admin'
const pageSales = '/admin/vendas'
const pageProducts = '/admin/produtos'

if (page == pageAdmin) {
    for(const button of buttonsSidebar) {
        button.classList.remove('selected');

        if (button.classList.contains('dashboard')) {
            button.classList.add('selected')
        }
    }
}

if (page == pageSales) {
    for(const button of buttonsSidebar) {
        button.classList.remove('selected');

        if (button.classList.contains('sales')) {
            button.classList.add('selected')
        }
    }
}

if (page == pageProducts) {
    for(const button of buttonsSidebar) {
        button.classList.remove('selected');

        if (button.classList.contains('products')) {
            button.classList.add('selected')
        }
    }
}