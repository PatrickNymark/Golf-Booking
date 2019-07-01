const Validator = require('validator');

// isEmpty
const isEmpty = require('./isEmpty');

module.exports = function (data) {
  const errors = {};

  // Check for undefined/empty
  data.gender = isEmpty(data.gender) ? '' : data.gender;
  data.club = isEmpty(data.club) ? '' : data.club;

  if (Validator.isEmpty(data.club)) {
    errors.club = 'Club is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender is required';
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};