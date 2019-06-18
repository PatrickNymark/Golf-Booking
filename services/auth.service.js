const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

// models
const User = require('../models/User');

module.exports = {
  registerUser,
  loginUser,
  deleteUser,
  getAll
}

/**
 * Register user.
 * @param {object} userData an object that represents a user.
 * @returns A Promise or exception.
 */
async function registerUser(userData) {
  if (await User.findOne({ email: userData.email })) {
    throw 'Email "' + userData.email + '" is already taken';
  }

  const user = new User(userData);
  return await user.save();
}


/**
 * Delete user.
 * @param {string} id a string that represents a user's id.
 */
async function deleteUser(id) {
  return await User.findByIdAndRemove(id);
}

/**
 * Login user
 * @param {string} email a string that represents a user's email
 * @param {string} password a string that represents a user's plain password
 * @returns a Promise or exception  
 */
async function loginUser(email, password) {
  const user = await User.findOne({ email: email });
  
  if(user && bcrypt.compareSync(password, user.password)) {
    const { password, ...userWithOutPass } = user.toObject();
    const token = jwt.sign({ sub: user.id, role: user.roles }, process.env.secretOrKey, { expiresIn: '2m'});
    return {
      ...userWithOutPass,
      token
    }
  }
}

async function getAll() {
  return await User.find().select('-password');
}