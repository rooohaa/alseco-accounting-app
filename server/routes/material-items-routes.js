const express = require('express')
const itemsController = require('../controllers/material-items-controller')
const router = express.Router()

router.get('/items', itemsController.getMaterialItems)
router.post('/items', itemsController.postItem)
router.delete('/items/:id', itemsController.deleteItem)

module.exports = router
