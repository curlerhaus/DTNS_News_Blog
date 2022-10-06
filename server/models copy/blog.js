const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    date: { type: Number, default: Date.now },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('blog', blogSchema)
