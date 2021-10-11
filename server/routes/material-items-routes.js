const express = require('express')
const itemsController = require('../controllers/material-items-controller')
const router = express.Router()

router.get('/items', itemsController.getMaterialItems)

module.exports = router
