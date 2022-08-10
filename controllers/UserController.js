const dataOrders = require('../data/data-orders.json')
const dataClients = require('../data/data-clients.json')
const dataProducts = require('../data/data-products.json')
const rootDir = require('../utils/rootDir')
var models = require('../models');
const UserRepository = models.User
const OrderRepository = models.Order
const AdressRepository = models.Adress
const ProductRepository = models.Product
const OrderStatusRepository = models.OrderStatus
const PaymentMethodRepository = models.PaymentMethod
const CourierRepository = models.Courier
const OrderProductsRepository = models.OrderProducts



const UserController = {
    index: (req, res) => {
        const message = {
            type: "", 
            content: ""
        }

        res.render('layout', {'page': 'login', message})
     }, 
    
    showUser: async (req, res) => {        
        const { slug } = req.params

        const userSearch = await UserRepository.findOne({
            where: {
                slug : slug
            },  
            include: [
            {
                model: OrderRepository,
                as: 'orders',
                require: true,
                all: true, 
                nested: true,

            },
            ],
            subQuery: false,   
        })


        if(userSearch == null) {
            return res.status(404);
        }

        const user = (userSearch).toJSON()

        const orders = user.orders

        for(const [index, order] of orders.entries()){
            console.log('------------ID Order-------------')
            console.log(order.id)
            const productsInOrder = await OrderProductsRepository.findAll({
                where: {
                    id_order: order.id
                }
            })
            console.log('------------productsInOrder-------------')
            console.log('productsInOrder')
            console.log(productsInOrder)

            const arrayProducts = []
            for(product of productsInOrder) {
                console.log('------------product.id-------------')
                console.log('product.id')
                console.log(product.id_product)
                await arrayProducts.push( 
                    await ProductRepository.findOne ({
                        where: {
                            id: product.id_product
                        }
                }))

            orders[index].products = arrayProducts
            }

        }

        res.render('layout', {'page':'user-account', orders, user, rootDir})
    },

    indexOrders: async (req, res) => {        
        const { slug } = req.params

        const userSearch = await UserRepository.findOne({
            where: {
                slug : slug
            },  
            include: [
            {
                model: OrderRepository,
                as: 'orders',
                require: true,
                all: true, 
                nested: true,

            },
            ],
            subQuery: false,   
        })

        if(userSearch == null) {
            return res.status(404);
        }

        const user = (userSearch).toJSON()

        const orders = user.orders

        for(const [index, order] of orders.entries()){
            console.log('------------ID Order-------------')
            console.log(order.id)
            const productsInOrder = await OrderProductsRepository.findAll({
                where: {
                    id_order: order.id
                }
            })
            console.log('------------productsInOrder-------------')
            console.log('productsInOrder')
            console.log(productsInOrder)

            const arrayProducts = []
            for(product of productsInOrder) {
                console.log('------------product.id-------------')
                console.log('product.id')
                console.log(product.id_product)
                await arrayProducts.push( 
                    await ProductRepository.findOne ({
                        where: {
                            id: product.id_product
                        }
                }))

            orders[index].products = arrayProducts
            }

        }

        res.render('layout', {'page':'user-orders', orders, user, rootDir})
    },
 
    showOrder: async (req, res) => {        
        const { slug, id } = req.params
        const arrayProducts = []


        const userSearch = await UserRepository.findOne({
            where: {
                slug : slug
            },  
            include: [
            {
                model: OrderRepository,
                as: 'orders',
                where:{
                    id: id
                },
                require: true,
                all: true, 
                nested: true,

            },
            ],
            subQuery: false,   
        })

        if(userSearch == null) {
            return res.status(404);
        }

        const user = (userSearch).toJSON()

        const order = user.orders

        const productsInOrder = await OrderProductsRepository.findAll({
            where: {
                id_order: id
            }
        })

        for(product of productsInOrder) {
            await arrayProducts.push( 
                await ProductRepository.findOne ({
                    where: {
                        id: product.id_product
                    }
            }))
        }

        order.products = arrayProducts

        res.render('layout', {'page':'user-order', order, user, rootDir})

    },
    
    showAccount: (req, res) => {
        const { slug } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const message = {
            type: "", 
            content: ""
        }
        
        res.render('layout', {'page':'user-informations', user, rootDir, message})
    },

    create: async (req, res) => {
        const { name, email, phone, password, passwordConfirm } = req.body
        const message = {
            type: "", 
            content: ""
        }

        let slug = name.toLowerCase().replace(/ /g, '-')

        //-------------------- Validations --------------------
        const userExists = await UserRepository.findOne({
            where: {
                email
            }
        })

        if(userExists) {
            message.type = 'criar'
            message.content = 'Email já cadastrado'
            return res.render('layout', {'page': 'login', message})
        }


        if (password != passwordConfirm) {
            message.type = 'criar'
            message.content = 'As senhas precisam ser iguais'
            return res.render('layout', {'page': 'login', message})
        }

        const phoneFormated = phone.replace(/[[\s\W-]+/g, '')

        if(phoneFormated.length != 11) {
            message.type = 'criar'
            message.content = 'telefone invalido'
            return res.render('layout', {'page': 'login', message})
        }

        const slugExists = await UserRepository.findOne({
            where: {
                slug
            }
        })
        
        if(slugExists) {
            slug += Math.floor(Math.random() * 9999)
        }


        UserRepository.create({
            name:  name,
            slug:  slug,
            email:  email,
            password:  password,
            phone:  phoneFormated,
            type_user: 'clint'
        })

        const users = await UserRepository.findAll()
        console.log(users)

        
        //res.render('layout', {'page':'user-informations', user, message})
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const message = {
            type: "", 
            content: ""
        }

        console.log('---------------------------------')
        console.log('email')
        console.log(email)
        console.log('---------------------------------')
        console.log('password')
        console.log(password)

        // -------------------- Validations --------------------
        const userExists = await UserRepository.findOne({
            where: {
                'email': email
            }
        })
        console.log('procurou user')

        if(!userExists) {
            message.type = 'login'
            message.content = 'Usuário não cadastrado, por favor crie uma conta'
            return res.render('layout', {'page': 'login', message})
        }
        console.log('validou user')

        if (password != userExists.password) {
            message.type = 'login'
            message.content = 'Senha inválida'
            return res.render('layout', {'page': 'login', message})
        }
        console.log('senha ok')

        console.log('---------------> Só redirecionar')

        return res.redirect(`/usuario/${userExists.slug}`)

    },

    updateUser: (req, res) => {
        const { slug } = req.params
        const reqInfos = req.body
        const user = dataClients.find( user => user.slug == slug)
        let message = {
            type: "account", 
            content: "Alterações salvas com sucesso!"
        }

        console.log(reqInfos)

        if(user.name == reqInfos.name || user.email == reqInfos.email) {
            message.content = "Algo deu errado"
        } else {
            message.content = user.name
        }


        res.render('layout', {'page':'user-informations', user, rootDir, message})

    },

    updateShipping: (req, res) => {
        const { slug } = req.params
        const reqInfos = req.body
        const user = dataClients.find( user => user.slug == slug)
        let message = {
            type: "shipping", 
            content: "Alterações salvas com sucesso!"
        }

        res.render('layout', {'page':'user-informations', user, rootDir, message})
    }

}


module.exports = UserController