const userController = {
    getAll: (req, res, next) => {
        return res.status(200).json({ success:true, message: 'Job well done' })
    },
    getById: (req, res, next) => {
        const { id } = req.params
        return res
        .status(200)
        .json({ success:true, message: `Job well done ${id}` })
    },
    createUser: (req, res, next) => {
        const { firstName, lastName, email, usertype } = req.body

        let errors = {}
        let errorMessage = ''
        let isBodyValid = true

        if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0) {
            isBodyValid = false
            errors['firstName'] = 'This should be a string & not empty'
        }

        if (!lastName || typeof lastName !== 'string' || lastName.trim().length === 0) {
            isBodyValid = false
            errors['lastName'] = 'This should be a string & not empty'
        }
        if (!email || typeof email !== 'string' || email.trim().length === 0) {
            isBodyValid = false
            errors['email'] = 'This should be a string & not empty'
        }
        if (!usertype || typeof usertype !== 'string' || usertype.trim().length === 0) {
            isBodyValid = false
            errors['usertype'] = 'This should be a string & not empty'
        } else {
            const checks = ['user', 'admin', 'support']
            const found = checks.some(check => check === usertype)

            if (!found) {
                isBodyValid = false
                errors['usertype'] = 'This should be values in ' + checks.join(',')
            }
        }

        if(!isBodyValid) {
            return res.status(400).json({
                success: isBodyValid,
                errorMessage: 'Kindly correct the errors',
                errors,
            })
        }




        //only execute below data when I am sure all is correct
        const userPayLoad = {
            firstName,
            lastName,
            email,
            usertype
        }
        return res
            .status(200)
            .json({
                success: true,
                message: `Job well done`,
                data: userPayLoad
            })
    }
}


module.exports = userController
