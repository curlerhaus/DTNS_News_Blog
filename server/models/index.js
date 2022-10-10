require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Blog = require('./createPost')
module.exports.Comment = require('./comment')
module.exports.Post = require('./post')
module.exports.Login = require('./login')
module.exports.SignUp = require('./signup')