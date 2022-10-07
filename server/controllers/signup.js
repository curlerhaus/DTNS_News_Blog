const router = require('express').Router()
const signUpFormCopy = require('../models/signUpModels')

//signup route
router.post('/', (request, response) => {
    const signUpUser = new signUpFormCopy({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
        password2: request.body.password2
    })
    signUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

module.exports = router