import merge from 'lodash-merge'
import {RECEIVE_TOILETS,
        RECEIVE_TOILET,
        REMOVE_TOILET} from '../actions/toilet_action';


const toiletReducers = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_TOILETS:
        return action.toilets;
      case RECEIVE_TOILET:
        return merge({}, {[action.toilet.id]: action.toilet})
      case REMOVE_TOILET:
        delete state[action.toilet.id]
        return state;
      default:
        return state;
    }
}


export default toiletReducers; 
