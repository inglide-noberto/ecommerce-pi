const express = require('express')
const ProfileController = require('../controllers/UserController')
const passport = require('passport');
const router = express.Router()



//-------------- AUTHENTICATION MIDDLEWARE -----------------
const authenticationMiddleware = (req, res, next) => {
    console.log(req.session)
    const slugReq = req.params.slug
    if (!req.session.authData) {
        return res.redirect(`/usuario`)
    }
    if(slugReq) {
        if(slugReq != req.session.authData.slug){
           return res.status(403).render('layout', {'page':'not-found'})
        }
    } 
    next();
}



//-------------- ROUTES -----------------
router.get('/:slug', authenticationMiddleware, ProfileController.showUser)
router.get('/:slug/pedidos', authenticationMiddleware, ProfileController.indexOrders)
router.get('/:slug/pedidos/:id', authenticationMiddleware, ProfileController.showOrder)

router.get('/:slug/conta', authenticationMiddleware, ProfileController.showAccount)
router.post('/:slug/conta',authenticationMiddleware,  ProfileController.updateUser)
router.post('/:slug/conta/endereco', authenticationMiddleware, ProfileController.updateShipping)
router.post('/:slug/excluir/:id', authenticationMiddleware, ProfileController.delete)
router.get('/:slug/sair', authenticationMiddleware, ProfileController.logout)


router.post('/criar', ProfileController.create)
router.post('/logar', ProfileController.login)

router.get('/', ProfileController.index)


module.exports = router