const express = require('express')
const employeesController = require('../controllers/employee-controller')
const router = express.Router()

router.get('/employees', employeesController.getEmployees)

module.exports = router
