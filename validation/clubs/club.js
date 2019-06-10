const Validator = require('validator');

// isEmpty
const isEmpty = require('../isEmpty');

module.exports = function (data) {
  const errors = {};

  // Check for undefined/empty
  data.title = isEmpty(data.title) ? '' : data.title;
  data.address = isEmpty(data.address) ? '' : data.address;
  data.phoneNumber = isEmpty(data.phoneNumber) ? '' : data.phoneNumber;
  data.email = isEmpty(data.email) ? '' : data.email;

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email field is wrong format"
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};