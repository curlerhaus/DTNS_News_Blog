const express = require('express')
const login = express.Router()

//Index
//login route
login.get('/login', (req, res) => {
    res.send('A login route!')
})

module.exports = login