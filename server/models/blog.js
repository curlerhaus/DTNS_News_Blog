const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    categories: { type: String, default: ''},
    date: { type: Date, default: Date.now },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('blog', blogSchema)
