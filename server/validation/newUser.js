const Validator = require('validator');

// isEmpty
const isEmpty = require('./isEmpty');

module.exports = function (data) {
  const errors = {};

  // Check for undefined/empty
  data.name.first = isEmpty(data.name.first) ? '' : data.name.first;
  data.name.last = isEmpty(data.name.last) ? '' : data.name.last;
  data.email = isEmpty(data.email) ? '' : data.email;
  data.password = isEmpty(data.password) ? '' : data.password;

  if (Validator.isEmpty(data.name.first)) {
    errors.name.first = 'First name is required';
  }

  if (Validator.isEmpty(data.name.last)) {
    errors.name.last = 'Last name is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid email"
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};