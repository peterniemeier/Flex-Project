import React from 'react';
import {connect} from 'react-redux';
import ToiletShow from './toilet_show';
import {fetchToilet, fetchToiletComments} from '../../util/toilet_api_util';


const mapStateToProps = (state, ownProps) => {
  return {
    toilet: state.entities.toilets[ownProps.params.match.toiletId],
    // Users here to add comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchToilet: id => dispatch(fetchToilet(id)),
    // fetchToiletComments: () => dispatch(fetchToiletComments())
  }
}
