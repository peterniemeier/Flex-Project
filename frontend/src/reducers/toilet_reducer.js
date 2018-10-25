import merge from 'lodash-merge'
import {RECEIVE_TOILETS,
        RECEIVE_TOILET,
        REMOVE_TOILET} from '../actions/toilet_actions';


const toiletReducers = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_TOILETS:
        return action.toilets.data;
      case RECEIVE_TOILET:
        return Object.assign({}, {[action.toilet.data._id]: action.toilet.data})
      case REMOVE_TOILET:
        delete state[action.toilet._id]
        return state;
      default:
        return state;
    }
}


export default toiletReducers;
