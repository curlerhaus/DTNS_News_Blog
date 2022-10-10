const mongoose = require('mongoose')

let createPostSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    img: { type: String },
    date: { type: Number, default: Date.now },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('blog', blogSchema)
