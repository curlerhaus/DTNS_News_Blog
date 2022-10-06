const mongoose = require('mongoose');

    const postSchema = new mongoose.Schema({
      title: {
       type: String,
       trim: true,
       required: true
     },
       text: {
       type: String,
       trim: true,
       required: true
     },
      date: {
       type: Date,
       default: Date.now
     },
      comments: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Comment'
      }]
    })

    postSchema.virtual('url').get(function(){
      return '/post/' + this._id
     })

    module.exports = mongoose.model('Post', postSchema); 