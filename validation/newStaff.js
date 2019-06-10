const Validator = require('validator');

// isEmpty
const isEmpty = require('./isEmpty');

module.exports = function (data) {
  const errors = {};

  // Check for undefined/empty
  data.name.first = isEmpty(data.name.first) ? '' : data.name.first;
  data.name.last = isEmpty(data.name.last) ? '' : data.name.last;
  data.gender = isEmpty(data.gender) ? '' : data.gender;

  if (Validator.isEmpty(data.name.first)) {
    errors.name.first = 'First name is required';
  }

  if (Validator.isEmpty(data.name.last)) {
    errors.name.last = 'Last name is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender is required';
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};