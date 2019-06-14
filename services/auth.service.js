const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

// models
const User = require('../models/User');
const Staff = require('../models/Staff');

module.exports = {
  registerUser,
  loginUser,
  registerStaff,
  getAll
}

/**
 * Register user.
 * @param userData an object that represents a user.
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
 * Register staff.
 * @param staffData an object that represents a staff.
 * @returns A Promise or exception.
 */
async function registerStaff(staffData) {
  const staff = new Staff(staffData);
  // check if user exists 
  if(!await User.findById(staffData.user)) {
    throw 'User id "' + staffData.user + '" not found'; 
  }

  // update user with staff
  user.roles.staff = staff.id;
  await user.save();

  return await staff.save();
}

/**
 * Login user
 * @param email a string that represents a user's email
 * @param password a string that represents a user's plain password
 * @returns a Promise or exception  
 */
async function loginUser(email, password) {
  const user = await User.findOne({ email: email });
  
  if(user && bcrypt.compareSync(password, user.password)) {
    const { password, ...userWithOutPass } = user.toObject();
    const token = jwt.sign({ sub: user.id, role: user.roles }, process.env.secretOrKey, { expiresIn: '2d'});
    return {
      ...userWithOutPass,
      token
    }
  }
}

async function getAll() {
  return await User.find().exec();
}