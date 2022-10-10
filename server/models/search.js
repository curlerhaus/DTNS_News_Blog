const mongoose = require('mongoose');

let searchSchema = new mongoose.Schema({
    title: { type: String }
});

module.exports = mongoose.model('Search', userSchema);