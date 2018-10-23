import React from 'react';
import { connect } from 'react-redux';
import ToiletForm from './toilet_form';
import {fetchToilet} from '../../util/toilet_api_util';

const mapStateToProps = (state, ownProps) => {
  const toilet = state.entities.toilets(ownProps.match.params.toiletId);
  const formType = 'Update Toilet';
  return {toilet, formType};
}

const mapDispatchToProps = dispatch => {
  return {
    fetchToilet: id => dispatch(fetchToilet(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToiletForm);
