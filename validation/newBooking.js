const Validator = require('validator');

// isEmpty
const isEmpty = require('./isEmpty');

module.exports = function (data) {
  const errors = {};

  // Check for undefined/empty
  data.players = isEmpty(data.players) ? '' : data.players;
  data.club = isEmpty(data.club) ? '' : data.club;
  data.course = isEmpty(data.course) ? '' : data.course;
  data.time = isEmpty(data.time) ? '' : data.time;

  if (Validator.isEmpty(data.players)) {
    errors.players = 'Atleast 1 player is required';
  }

  if (Validator.isEmpty(data.club)) {
    errors.club = 'Club is required';
  }

  if (Validator.isEmpty(data.course)) {
    errors.course = 'Course is required';
  }

  if (Validator.isEmpty(data.time)) {
    errors.time = "Time is required"
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};