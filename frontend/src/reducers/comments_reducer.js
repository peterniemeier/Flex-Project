
import {
  RECEIVE_TOILET,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
} from '../actions/toilet_actions';
// look back here in case of error
export default (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments.data;
    case RECEIVE_COMMENT:
      return Object.assign(newState, {[action.comment.data._id]: action.comment.data})
    default:
      return state
  }
}
