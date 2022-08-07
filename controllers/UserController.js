const dataOrders = require('../data/data-orders.json')
const dataClients = require('../data/data-clients.json')
const dataProducts = require('../data/data-products.json')
const rootDir = require('../utils/rootDir')
const UserRepository = require('../models/user')
const OrderRepository = require('../models/order')



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

        const user = await UserRepository.findOne({
            where: {
                slug : 'ana'
            }
            ,
            include: {
                model: OrderRepository,
                as: 'orders',
                require: true
            }
        })

        console.log('-------------------------')
        console.log(userBD)
        console.log('-------------------------')
        console.log(userBD.orders)
        
        const orders = user.orders

        res.render('layout', {'page':'user-account', orders, user, dataProducts, rootDir})
    },

    indexOrders: (req, res) => {        
        const { slug } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const orders = dataOrders.filter( order => order.id_user == user.id)

        res.render('layout', {'page':'user-orders', orders, user, dataProducts, rootDir})
    },
 
    showOrder: (req, res) => {        
        const { slug, id } = req.params
        const user = dataClients.find( user => user.slug == slug)
        const orders = dataOrders.filter( order => order.id_user == user.id)
        const order = orders.find( order => order.id == id)

        res.render('layout', {'page':'user-order', order, user, dataProducts, rootDir})
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