const jwt = require('jsonwebtoken')

const SECRET_KEY = '123456!'

const auth = {
    decode: (req, res, next) => {
        const payload = {
            userId: 1,
            username: 'pickachu',
        }
        req.information = payload
        next()
    },
    encode: (req, res, next) => {
        const payload = {
            username: req.body.username,
            password: req.body.password,
        }
        //check login

        const authToken = jwt.sign(payload, SECRET_KEY)
        console.log(authToken)
        req.information = payload
        next()
    }

}

module.exports = auth