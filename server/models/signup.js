const { Schema, model } = require('mongoose');

const signUpSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, select: false },
}, { timestamps: true });
  signUpSchema.pre('save', function (next) {
  const signup = this;
  if (!signup.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (_, hash) => {
      user.password = hash;
      next();
    });
  });
});

// Need to use function to enable this.password to work.
signUpSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

module.exports = model('SignUp', signUpSchema);