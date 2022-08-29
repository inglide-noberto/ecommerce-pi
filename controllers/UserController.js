var models = require('../models');
const UserRepository = models.User
const OrderRepository = models.Order
const AdressRepository = models.Adress
const ProductRepository = models.Product
const OrderProductsRepository = models.OrderProducts
const bcrypt = require('bcrypt')



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
        console.log('----------No user---------')
        console.log(req.session.authData)


        res.render('layout', {'page':'user-account', user, })
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

        res.render('layout', {'page':'user-orders', user, })
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

        
        return res.render('layout', {'page':'user-informations', user, message})
    },





    create: async (req, res) => {
        const { name, emailCreate, phone, password, passwordConfirm } = req.body
        const message = {
            type: "", 
            content: ""
        }

        let slug = name.toLowerCase().replace(/ /g, '-')

        //-------------------- Validations --------------------
        const userExists = await UserRepository.findOne({
            where: {
                email: emailCreate,
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
        
        
        console.log(bcrypt.hashSync(password, 10))
        
        UserRepository.create({
            name:  name,
            slug:  slug,
            email:  emailCreate,
            password:  bcrypt.hashSync(password, 10),
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

        if (!bcrypt.compareSync(password, userExists.password)) {
            message.type = 'login'
            message.content = 'Senha inválida'
            return res.render('layout', {'page': 'login', message})
        } 

        

        console.log('------Entei login-----')

        const userSessionData = {
            name: userExists.name,
            id: userExists.id,
            slug: userExists.slug,
            type_user: userExists.type_user
        }

        req.session.authData = userSessionData
        console.log(res)
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
        const { id } = req.params
        
        console.log('--------------------------------')
        console.log('entrou delete')

        await UserRepository.destroy({where: {id: id}})
        console.log('delete feito')

        // const user = await UserRepository.findOne({
        //     where: {
        //         slug : slug
        //     },  
        //     include: [
        //     {
        //         model: OrderRepository,
        //         as: 'orders',
        //         require: true,
        //         all: true, 
        //         nested: true,
        //     },
        //     ],
        //     subQuery: false,   
        // })

        // await user.destroy()

        return res.redirect('/');
    }

}


module.exports = UserController