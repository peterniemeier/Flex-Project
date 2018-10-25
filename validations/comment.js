const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateToiletInput(data) {
  let errors = {};
  data.creator = !isEmpty(data.creator) ? data.creator : '';
  data.toilet = !isEmpty(data.toilet) ? data.toilet : '';
  data.body = !isEmpty(data.body) ? data.body : '';
  data.rating = !isEmpty(data.rating) ? data.rating : '';


  if (Validator.isEmpty(data.creator)) {
    errors.email = 'creator is required';
  }
  if (Validator.isEmpty(data.toilet)) {
    errors.email = 'toilet is required';
  }

  if (Validator.isEmpty(data.body)) {
    errors.email = 'body is required';
  }

  if (Validator.isEmpty(data.rating)) {
    errors.email = 'rating is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

};
