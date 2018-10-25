import React from 'react';
import { connect } from 'react-redux';
import ToiletForm from './toilet_form';
import {createToilet} from '../../util/toilet_api_util';

const mapStateToProps = (state, ownProps) => {

  return {
    lat: state.ui.maps.toiletPos.lat,
    lng: state.ui.maps.toiletPos.lng,
    title: '',
    address: state.ui.maps.toiletAddress,
    // creator_id: state.session.id,
    formType: 'Add Toilet'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchToilet: toilet => dispatch(createToilet(toilet)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToiletForm);
