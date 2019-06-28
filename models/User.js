const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
      type: String,
      required: true
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
  roles: {
    staff: { type: Schema.Types.ObjectId, ref: 'staff' },
    player: { type: Schema.Types.ObjectId, ref: 'players' }
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

module.exports = User = mongoose.model('users', UserSchema);