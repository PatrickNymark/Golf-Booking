
// models
const Staff = require('../models/Staff');

module.exports = {
  createStaff,
  deleteStaff
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
 * 
 * @param {string} id a string that represents a staff's id.
 */
async function deleteStaff(id) {
  return await Staff.findByIdAndRemove(id);
}