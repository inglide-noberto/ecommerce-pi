const dataOrders = require('../data/data-orders.json')
const dataClients = require('../data/data-clients.json')
const dataProducts = require('../data/data-products.json')
const rootDir = require('../utils/rootDir')
var models = require('../models');
const UserRepository = models.User
const OrderRepository = models.Order
const AdressRepository = models.Adress
const ProductRepository = models.Product
const ProductImageRepository = models.ProductImage
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
        console.log(user)

        res.render('layout', {'page':'user-account', user, rootDir})
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
        // const productsSearch = await OrderProductsRepository.findAll({
        //     where: {
        //         id_order : id
        //     },  
        //     include: [
        //     {
        //         model: ProductRepository,
        //         require: true,
        //         all: true,
        //         nested: true,
        //     },
        //     ],
        //     subQuery: false,   
        // })

        // const products = (productsSearch.map(product => product.toJSON())).map(product => product.Product)



        res.render('layout', {'page':'user-orders', user, rootDir})
    },
 


    showOrder: async (req, res) => {      
        const { slug, id } = req.params

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
        

        const productsSearch = await OrderProductsRepository.findAll({
            where: {
                id_order : id
            },  
            include: [
            {
                model: ProductRepository,
                require: true,
                all: true,
                nested: true,
            },
            ],
            subQuery: false,   
        })

        const products = (productsSearch.map(product => product.toJSON())).map(product => product.Product)
        const ordersArray = user.orders.filter(orderUser => orderUser.id == id)
        const order = ordersArray[0]

        if(order == undefined) {
            return res.status(404);
        }


        return res.render('layout', {'page':'user-order', order, user, products})
    },

    


    showAccount: async (req, res) => {
        const { slug } = req.params
        const message = {
            type: "", 
            content: ""
        }

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
            return res.render('layout', {'page':'not-found'});
        }

        const user = (userSearch).toJSON()

        
        return res.render('layout', {'page':'user-informations', user, rootDir, message})
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
            type_user: 'client'
        })

    res.redirect(`/usuario/${slug}`)
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

    updateUser: async (req, res) => {
        const { slug } = req.params
        const reqInfos = req.body
        const message = {
            type: "", 
            content: ""
        }

        reqInfos.cpf = reqInfos.cpf.replace(/\D/gim, '')


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
            return res.render('layout', {'page':'not-found'});
        }

        const user = (userSearch).toJSON()

        if(user.name == reqInfos.name && user.email == reqInfos.email && user.cpf == reqInfos.cpf && user.birt_date == reqInfos.birthDate && user.phone == reqInfos.phone && user.gender == reqInfos.gender) {

            message.type = "account"
            message.content = "Nenhum alteração informada"

            return res.render('layout', {'page':'user-informations', user, message})
        }


        if(user.email != reqInfos.email) {
            const existUserWithNewEmail = await UserRepository.findOne({
                where: {
                    'email': reqInfos.email
                }
            })
            if(existUserWithNewEmail) {
                message.type = 'account'
                message.content = 'Email já cadastrado'
                return res.render('layout', {'page': 'user-informations',user, message})
            }
        }

        user.name = reqInfos.name
        user.email = reqInfos.email 
        user.cpf = parseInt(reqInfos.cpf) 
        user.birt_date = reqInfos.birthDate 
        user.phone = reqInfos.phone 
        user.gender = reqInfos.gender


        const update = await UserRepository.update(user, {where: { slug : slug}})


        message.type = "account"
        message.content = "Atualizações realizadas com sucesso"

        return res.render('layout', {'page':'user-informations', user, message})
    

    },





    updateShipping: async (req, res) => {
        const { slug } = req.params
        const reqInfos = req.body
        const message = {
            type: "", 
            content: ""
        }

        reqInfos.zipCode = reqInfos.zipCode.replace(/\D/gim, '')


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
            return res.render('layout', {'page':'not-found'});
        }


        const user = (userSearch).toJSON()


        if(user.adresses[0].title == reqInfos.title && user.adresses[0].street == reqInfos.street && user.adresses[0].number == reqInfos.number && user.adresses[0].district == reqInfos.birthDate && user.adresses[0].complement == reqInfos.complement && user.adresses[0].city == reqInfos.city && user.adresses[0].state == reqInfos.state && user.adresses[0].shipping_contact_phone == reqInfos.contact && user.adresses[0].zip_code == reqInfos.zipCode) {

            message.type = "shipping"
            message.content = "Nenhum alteração informada"

            return res.render('layout', {'page':'user-informations', user, message})
        }

        user.adresses[0].title = reqInfos.title
        user.adresses[0].street = reqInfos.street
        user.adresses[0].number = reqInfos.number
        user.adresses[0].district = reqInfos.district
        user.adresses[0].complement = reqInfos.complement
        user.adresses[0].city = reqInfos.city
        user.adresses[0].state = reqInfos.state
        user.adresses[0].shipping_contact_phone = reqInfos.contact
        user.adresses[0].zip_code = reqInfos.zipCode

        const update = await AdressRepository.update(user.adresses[0], {where: { id : user.adresses[0].id}})

        message.type = "shipping"
        message.content = "Atualizações realizadas com sucesso"

        return res.render('layout', {'page':'user-informations', user, message})
    },





    delete: async (req, res) => {
        const { slug } = req.params
        const message = {
            type: "", 
            content: ""
        }
        

        const userDelete = await AdressRepository.delete({where: { slug : slug}})

        message.type = "delete"
        message.content = "Sua conta foi excluida, sentiremos sua falta 🥺"

        return res.render('layout', {'page':'home', message})
    }

}


module.exports = UserController