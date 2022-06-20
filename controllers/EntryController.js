const EntryController = {
    index: (req, res) => {
       res.render('layout', {'page': 'login'})
    }, 

    create: (req, res) => {
        const {name, email, telefone} = req
    },

    login: (req, res) => {

    }
}

module.exports = EntryController