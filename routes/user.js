const express = require('express')

// controller
const userController = require('../controllers/user')
const auth = require('../middlewares/auth')



const router = express.Router()

//put means edit

router
    .get('/', userController.getAll)
    .post('/middleware-login-demo', auth.encode, (req, res) => {
            return res.status(200).json({ success: true, token: req.token })
        })
    .get('/:id', userController.getById)
    .post('/', userController.createUser)
    .put('/:id', userController.createUser)
    .delete(':id', userController.createUser)
    

module.exports = router