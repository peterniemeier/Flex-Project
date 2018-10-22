const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateToiletInput(data) {
  let errors = {};
  data.lat = !isEmpty(data.lat) ? data.lat : '';
  data.lng = !isEmpty(data.lng) ? data.lng : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.creator_id = !isEmpty(data.creator_id) ? data.creator_id : '';


  if (!Validator.isEmpty(data.lat)) {
    errors.email = 'Lat is required';
  }
  if (!Validator.isEmpty(data.lng)) {
    errors.email = 'Lng is required';
  }

  if (!Validator.isEmpty(data.title)) {
    errors.email = 'Title is required';
  }

  if (!Validator.isEmpty(data.creator_id)) {
    errors.email = 'Creator_id is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

};
