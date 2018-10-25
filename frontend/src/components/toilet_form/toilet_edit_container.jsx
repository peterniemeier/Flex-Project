import React from 'react';
import { connect } from 'react-redux';
import ToiletForm from './toilet_form';
import {fetchToilet, updateToilet} from '../../util/toilet_api_util';

const mapStateToProps = (state, ownProps) => {
  const toilet = state.entities.toilets(ownProps.match.params.toiletId);
  if (!toilet) {
    return null
  }
  const lat = toilet.lat
  const lng = toilet.lng
  const title = toilet.title
  const creator_id = toilet.creator_id
  const formType = 'Update Toilet';
  return {toilet, lat, lng, title, creator_id, formType};
}

const mapDispatchToProps = dispatch => {
  return {
    fetchToilet: id => dispatch(fetchToilet(id)),
    dispatchToilet: toilet => dispatch(updateToilet(toilet)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToiletForm);
