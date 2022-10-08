const mongoose = require('mongoose');
const signup = require('./signup');

let loginSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    first_name: { type: String },
    last_name: { type: String }
});

module.exports = signup