require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Blogs = require('./blogs')
module.exports.Comment = require('./comment')
module.exports.Post = require('./post')