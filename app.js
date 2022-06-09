//-------------- IMPORT RESOURCES -----------------
const express = require('express')
//const fs = require('fs')
const path = require('path')
const appRouter = express.Router()
const app = express()
//-------------- IMPORT ROUTES -----------------
const routersIndex = require(path.join(__dirname,'/Routers/index.js'))
const routersProducts = require(path.join(__dirname,'/Routers/products.js'))
<<<<<<< HEAD
const routersUser = require(path.join(__dirname,'/Routers/user.js'))
=======
const routerCart = require(path.join(__dirname, '/Routers/cartRoutes.js'))
>>>>>>> 1d884eecc00ff9998c197654769adc874b383a7d



//--------- CONFIG INPUT DATA READING -------------
appRouter.use(express.urlencoded({ extended:false}))
appRouter.use(express.json())

//---------- INITIALS CONFIG FOR EJS ----------
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))




//-------------- ROUTES -----------------
app.use('/', routersIndex)
app.use('/loja', routersProducts)
<<<<<<< HEAD
app.use('/user', routersUser)
=======
app.use('/cart', routerCart),
>>>>>>> 1d884eecc00ff9998c197654769adc874b383a7d




app.listen(3000, () => console.log("Servidor rodando na porta 3000"))