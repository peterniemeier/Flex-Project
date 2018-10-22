import React from 'react';
import { connect } from 'react-redux';

import {createToilet} from '../../actions/toilet_actions';

const mapStateToProps = (state, {location}) => {
  return {
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createToilet: toilet => dispatch(createToilet(toilet)),
  }
}
