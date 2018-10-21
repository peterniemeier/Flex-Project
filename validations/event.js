const Validator = require('validator');
const isEmpty = require('isEmpty');

module.exports = function validateEventInput(data) {
  let errors = {};
  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, {min:10, max:300})) {
    errors.text = "Event name must be between 10 and 300 characters";
  }

  if (!Validator.isEmpty(data.text)) {
    errors.email = 'The text field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
};
