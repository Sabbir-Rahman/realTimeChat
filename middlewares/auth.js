const jwt = require('jsonwebtoken')

const SECRET_KEY = '123456!'

const auth = {
    decode: (req, res, next) => {
        if (!req.headers['authorization']) {
            return res.status(401).json({
                success: false,
                message: 'No token provided'
            });
            
            
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <auth-token>
            const decoded = jwt.verify(token, SECRET_KEY)
            // if (!decoded) {
            //     throw new Error('bad token')
            // }
            req.information = decoded
            return next()
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Invalid auth token'
            })
        }
    },
    encode: (req, res, next) => {
        const payload = {
            username: req.body.username,
            password: req.body.password,
        }
        //check login

        const token = jwt.sign(payload, SECRET_KEY)
        req.token = token

        next()
    }

}

module.exports = auth