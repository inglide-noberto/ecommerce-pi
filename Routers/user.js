const express = require('express')
const ProfileController = require('../controllers/UserController')
const passport = require('passport');
const router = express.Router()


//-------------- AUTHENTICATION MIDDLEWARE -----------------
function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        console.log(req)
        
        return next();
    }

    res.redirect('/usuario');
  }
  

//-------------- ROUTES -----------------
router.get('/', ProfileController.index)
router.get('/:slug', authenticationMiddleware, ProfileController.showUser)
router.get('/:slug/pedidos', authenticationMiddleware, ProfileController.indexOrders)
router.get('/:slug/pedidos/:id', authenticationMiddleware, ProfileController.showOrder)

router.get('/:slug/conta', authenticationMiddleware, ProfileController.showAccount)
router.post('/:slug/conta', authenticationMiddleware, ProfileController.updateUser)
router.post('/:slug/conta/endereco', authenticationMiddleware, ProfileController.updateShipping)
router.post('/:slug/excluir/:id', authenticationMiddleware, ProfileController.delete)


router.post('/criar', ProfileController.create)
router.post('/logar', 
    passport.authenticate('local-signin', { 
        failureRedirect: '/usuario/logar' 
    }), function(req, res) {
        console.log('-------User req--------')
    res.redirect('/usuario/' + req.user.slug);
    }
);



module.exports = router