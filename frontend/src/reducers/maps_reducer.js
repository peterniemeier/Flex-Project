import {
    RECEIVE_TOILET_POS,
    RECEIVE_TOILET_ADDRESS,
    SET_CENTER,
} from '../actions/map_actions';

const defaultState = { 
    toiletPos: null, 
    toiletAddress: null,
    center: { lat: 37.7749, lng: -122.4194 }
     }

export default (state = defaultState, action) => {
    Object.freeze(state) 
    const newState = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_TOILET_POS: 
            newState.toiletPos = action.position;
            return newState;
        case RECEIVE_TOILET_ADDRESS: 
            newState.toiletAddress = action.address;
            return newState;
        case SET_CENTER: 
            newState.center = action.center; 
            return newState;    
        default:
            return state;
    }
}