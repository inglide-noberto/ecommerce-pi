//-------------- IMPORT RESOURCES -----------------
const express = require('express')
//const fs = require('fs')
const path = require('path')
const appRouter = express.Router()
const app = express()
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv/config')
var models = require('./models');
const UserRepository = models.User
const cookieParser = require('cookie-parser');



//-------------- AUTHENTICATION MIDDLEWARE -----------------
// function authenticationMiddleware(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('usuario/logar');
// }


//-------------- IMPORT ROUTES -----------------
const routersIndex = require(path.join(__dirname,'/Routers/index.js'))
const routersProducts = require(path.join(__dirname,'/Routers/products.js'))
const routersUser = require(path.join(__dirname,'/Routers/user.js'))
const routerCart = require(path.join(__dirname, '/Routers/cartRoutes.js'))
const routersEntry = require(path.join(__dirname, '/Routers/entry.js'))
const routersAdmin = require(path.join(__dirname, '/Routers/admin.js'))



//--------- CONFIG INPUT DATA READING -------------
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))
app.use(cookieParser())



//---------- INITIALS CONFIG FOR EJS ----------
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'script')))



//---------- AUTHENTICATION CONFIG ----------
require('./config/auth')(passport, UserRepository);
app.use(session({  
  secret: '123',
  //secret: process.env.SESSION_SECRET,//configure um segredo seu aqui,
  resave: false,
  saveUninitialized: false,
}))
// app.use(passport.initialize());
// app.use(passport.session());



//-------------- AUTHENTICATION MIDDLEWARE -----------------
// const authenticationMiddleware = (req, res, next) => {
//   console.log(req.session)
//   const slugReq = req.params.slug
//   if (!req.session.authData) {
//       return res.redirect(`/usuario`)
//   }
//   if(slugReq) {
//       if(slugReq != req.session.authData.slug){
//          return res.status(403).render('layout', {'page':'not-found'})
//       }
//   } 
//   next();
// }





//-------------- ROUTES -----------------
app.use('/loja', routersProducts)
app.use('/cart', routerCart)
app.use('/entrar', routersEntry)
app.use('/usuario', routersUser)
app.use('/admin', routersAdmin)
app.use('/', routersIndex)


//-------------- N0T FOUND ROUTE -----------------
app.use((req, res, next) => {
    res.status(404).render('layout', {'page':'not-found'})
})

//-------------- DATABASE SYNC -----------------


app.listen( process.env.PORT || 3000, () => console.log("Servidor rodando na porta 3000"))

