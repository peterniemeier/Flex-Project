import React from 'react';
import { connect } from 'react-redux';
import ToiletForm from './toilet_form';
import {createToilet} from '../../util/toilet_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng'),
    title: '',
    creator_id: state.session.id,
    formType: 'Add Toilet'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: toilet => dispatch(createToilet(toilet)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToiletForm);
