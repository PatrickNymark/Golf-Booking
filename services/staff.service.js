
// models
const Staff = require('../models/Staff');
const User = require('../models/User');

module.exports = {
  createStaff,
  deleteStaff,
  updateStaff
}

/**
 * Create staff.
 * @param {object} staffData an object that represents a staff.
 * @returns A Promise or exception.
 */
async function createStaff(staffData) {
  const staff = new Staff(staffData);
  const user = await User.findById(staffData.user);

  // check if user exists 
  if(!user) {
    throw 'User id "' + staffData.user + '" not found'; 
  }

  // check if a staff is already connected
  if(user.roles.staff) {
    throw 'User id "' + staffData.user + '" is already connected to Staff id "' + user.roles.staff + '"';
  }

  // update user with staff
  user.roles.staff = staff.id;
  await user.save();

  return await staff.save();
}

/**
 * Delete staff
 * @param {string} id a string that represents a staff's id.
 * @returns A Promise or exception
 */
async function deleteStaff(id) {
  // get connected user
  const staff = await Staff.findById(id);
  const user = await User.findById(staff.user);
  // remove staff from user
  user.roles.staff = null;
  await user.save();
  
  return await staff.remove();
}

/**
 * Update staff
 * @param {string} id a string that represents a staff's id
 * @param {object} staffData a object that represents the staff's data
 * @returns A Promise or exception
 */
async function updateStaff(id, staffData) {
  const staff = await Staff.findById(id);

  staff.gender = staffData.gender;
  staff.user = staffData.user;

  return await staff.save();
}