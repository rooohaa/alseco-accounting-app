const express = require('express')
const employeesController = require('../controllers/employee-controller')
const router = express.Router()

router.get('/employees', employeesController.getEmployees)
router.delete('/employees/:id', employeesController.deleteEmployee)
router.post('/employees', employeesController.postEmployee)

module.exports = router
