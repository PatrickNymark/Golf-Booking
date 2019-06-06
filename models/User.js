const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  role: {
    type: String,
    enum: [ 'player', 'trainer', 'admin'],
    default: 'player'
  }
}, {
  timestamps: true
});

UserSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt).then(hashedPassword => {
      user.password = hashedPassword;
      next();
    });
  });
})

UserSchema.methods.comparePassword = function(plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);

    return cb(null, isMatch);
  });
};

UserSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});



module.exports = User = mongoose.model('users', UserSchema);