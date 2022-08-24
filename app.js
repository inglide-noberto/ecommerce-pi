//-------------- IMPORT RESOURCES -----------------
const express = require('express')
//const fs = require('fs')
const path = require('path')
const appRouter = express.Router()
const app = express()
const bodyParser = require('body-parser');
 
//-------------- IMPORT DATABASE -----------------

//-------------- IMPORT ROUTES -----------------
const routersIndex = require(path.join(__dirname,'/Routers/index.js'))
const routersProducts = require(path.join(__dirname,'/Routers/products.js'))
const routersUser = require(path.join(__dirname,'/Routers/user.js'))
const routerCart = require(path.join(__dirname, '/Routers/cartRoutes.js'))
const routersEntry = require(path.join(__dirname, '/Routers/entry.js'))
const routersAdminPainel = require(path.join(__dirname, '/Routers/adminPainel.js'))



//--------- CONFIG INPUT DATA READING -------------
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))



//---------- INITIALS CONFIG FOR EJS ----------
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'script')))


//-------------- ROUTES -----------------
app.use('/', routersIndex)
app.use('/loja', routersProducts)
app.use('/usuario', routersUser)
app.use('/cart', routerCart)
app.use('/entrar', routersEntry)
app.use('/admin', routersAdminPainel)


//-------------- N0T FOUND ROUTE -----------------
app.use((req, res, next) => {
    res.status(404).render('layout', {'page':'not-found'})
})

//-------------- DATABASE SYNC -----------------


//-------------- RUN APP -----------------
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))