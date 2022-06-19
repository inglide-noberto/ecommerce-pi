const express = require('express')
const EntryController = require('../controllers/EntryController')

const router = express.Router()


router.get('/', EntryController.index)
router.post('/criar', EntryController.create)


module.exports = router