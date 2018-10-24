import {
    RECEIVE_TOILET_POS,
    RECEIVE_TOILET_ADDRESS,
} from '../actions/map_actions';

export default (state = {}, action) => {
    Object.freeze(state) 
    const newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_TOILET_POS: 
            newState.toiletPos = action.position;
            return newState;
        case RECEIVE_TOILET_ADDRESS: 
            newState.toiletAddress = action.address;
            return newState;    
        default:
            return state;
    }
}