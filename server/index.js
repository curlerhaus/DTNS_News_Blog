//Dependencies
require('dotenv').config()
const express = require('express')

const app = express()
const cors = require('cors')



const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Hi, my DATABASE is connected!"))

app.use(express.json())
app.use(cors())



//MiddleWare
// create a login route
// app.get('/login', function (req, res) {
//     res.send('My Login Page!')
// })



// Create a signup route
app.use('/signup', require('./controllers/signup'))

app.listen(process.env.PORT)
