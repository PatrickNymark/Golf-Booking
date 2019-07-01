const Validator = require('validator');

// isEmpty
const isEmpty = require('./isEmpty');

module.exports = function (data) {
  const errors = {};

  // Check for undefined/empty
  data.title = isEmpty(data.title) ? '' : data.title;
  data.holes = isEmpty(data.holes) ? '' : data.holes;

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  if (Validator.isEmpty(data.holes)) {
    errors.holes = 'Holes is required';
  }
  
  return {
    isValid: isEmpty(errors),
    errors
  };
};