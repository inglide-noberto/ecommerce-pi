var models = require('../models');

const OrderRepository = models.Order
const ProductRepository = models.Product
const ProductImageRepository = models.ProductImage
const ProductCategoriesRepository = models.ProductImage




const AdminController = {
    index: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const ordersSearch = await OrderRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }],
            limit: 7
            });
            
        const orders = ordersSearch.map(product => product.toJSON())


        const productsSearch = await ProductRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }],
                limit: 7
            });
            
        const products = productsSearch.map(product => product.toJSON())

        console.log(orders)
        console.log('----------------------')
        console.log(products)

        res.render('adminPainel', {'page': 'admin-dashboard', orders, products, message})
    }, 


    showSales: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const ordersSearch = await OrderRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }]
            });
            
        const orders = ordersSearch.map(product => product.toJSON())

        console.log(orders)

        res.render('adminPainel', {'page': 'admin-sales', orders, message})
    }, 



    showProducts: async (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        const productsSearch = await ProductRepository.findAll({
            include: [
                {
                    require: true,
                    all: true,
                    nested: true,
                }]
            });
            
        const products = productsSearch.map(product => product.toJSON())

        console.log(products)



        res.render('adminPainel', {'page': 'admin-products', products, message})
    },


    

    showFormProducts: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('adminPainel', {'page': 'admin-product-details', message})
    },



    createProduct: async (req, res) => {
        const { title, brand, gender, category, year, image1, image2, image3, shortDescription, fullDescription } = req.body
        
        const message = ""

        let slug = title.toLowerCase().replace(/ /g, '-')

        console.log(title, brand, slug, gender, category, year, image1, image2, image3, shortDescription, fullDescription)

        await ProductRepository.create({
            title:  title,
            slug: slug,
            brand:  brand,
            id_type_product:  gender,
            year:  year,
            shortDescription: shortDescription,
            fullDescription: fullDescription,
            id_rating_system: 1,
            id_product_status: 1
        })

        let productCreated = await ProductRepository.findOne({
            where: {
                slug: slug
            },
            include: {
                require: true,
                all: true, 
                nested: true,
            }

        });

        await ProductImageRepository.create({
            id_product: productCreated.id,
            id_category: category
        })

        await ProductImageRepository.create({
            id_product: productCreated.id,
            url_file: image1
        })

        await ProductImageRepository.create({
            id_product: productCreated.id,
            url_file: image2
        })

        await ProductImageRepository.create({
            id_product: productCreated.id,
            url_file: image3
        })



        res.render('adminPainel', {'page': 'admin-products', message})
    }
}



module.exports = AdminController