const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegistrationInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.username = !isEmpty(data.username) ? data.username : '';

  if (Validator.isEmail(data.email)) {
    errors.email = 'Email is not valid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (Validator.isEmpty(data.username)) {
    errors.email = 'Username is required';
  }

  if (!Validator.isLength(data.username, {min: 2, max: 30})) {
    errors.username = 'Username must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (!Validator.isLength(data.password2, {min: 6, max: 30})) {
    errors.password2 = 'Password2 must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Password2 is required';
  }

  if (!Validator.equals(data.password,data.password2)) {
    errors.password = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

};
