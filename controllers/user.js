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
        const { id, firstName, lastName } = req.body

        let errors = {}
        let errorMessage = ''
        let isBodyValid = true

        if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0) {
            isBodyValid = false
            errors[firstName] = 'This should be a string & not empty'
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
            id,
            firstName,
            lastName,
        }
        return res
            .status(200)
            .json({
                success: true,
                message: `Job well done ${id}`,
                data: userPayLoad
            })
    }
}


module.exports = userController
