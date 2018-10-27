import {connect} from 'react-redux';
import ToiletShow from './toilet_show';
import {fetchToilet, createToiletComment, fetchToiletComments} from '../../util/toilet_api_util';


const mapStateToProps = (state, ownProps) => {
  return {
    toilet: state.entities.toilets[ownProps.match.params.toiletId],
    creator: state.session,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchToilet: id => dispatch(fetchToilet(id)),
    createToiletComment: comment => dispatch(createToiletComment(comment)),
    fetchToiletComments: id => dispatch(fetchToiletComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToiletShow);
