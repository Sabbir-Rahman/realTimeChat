const express = require('express')

// controller
const userController = require('../controllers/user')

const router = express.Router()

//put means edit

router
    .get('/', userController.getAll)
    .get('/:id', userController.getById)
    .post('/', userController.createUser)
    .put('/:id', userController.createUser)
    .delete(':id', userController.createUser)

module.exports = router