const express = require('express')
const ProfileController = require('../controllers/UserController')

const router = express.Router()

router.get('/:slug', ProfileController.index)

module.exports = router