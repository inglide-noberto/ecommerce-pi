const dataClients = require("../data/data-clients.json")
const EntryController = {
    index: (req, res) => {
       res.render('layout', {'page': 'login'})
    }, 

    create: (req, res) => {
        const {name, email, telefone, senha} = req.body

        console.log("----------------------------------------------------")
        console.log("----------------------------------------------------")
        console.log(req.body)
        
        for (cliente of dataClients) {
            if (email == cliente.email) {
                
                res.send("usuário já cadastrado " + email)
            }
        }

        dataClients.push({
            "id":"",
            "slug":"ana-ferreira",
            "name":name,
            "email":email,
            "phone":telefone,
            "cpf":"",
            "birth-date":"",
            "gender":"",
            "password":senha,
            "addresses":[
                {
                    "id": "1",
                    "title": "Casa",
                    "street": "Rua das ruas",
                    "number": "100",
                    "complement": "Apt 10",
                    "district": "Setor Comercial",
                    "zip_code": "78550-000",
                    "city": "Sinop", 
                    "state": "MT",
                    "country": "Brasil",
                    "shipping_contact_name": "Minha mãe",
                    "shipping_contact_tel": "(66) 9 9999-9999"
                },
                {
                    "id": "2",
                    "title": "Trabalho",
                    "street": "Avenida das avenidas",
                    "number": "10",
                    "complement": "1 andar",
                    "district": "Setor Comercial",
                    "zip_code": "78550-000",
                    "city": "Sinop", 
                    "state": "MT",
                    "country": "Brasil",
                    "shipping_contact_name": "Minha familia",
                    "shipping_contact_tel": "(66) 9 9999-9999"
                }
            ]

        }) // usar read file para dar push para incluir essas infos do cliente no json


        res.send("usuário cadastrado: " + name + " " + email)
     
    },

    login: (req, res) => {

    }
}

module.exports = EntryController