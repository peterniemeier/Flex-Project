import toiletReducers from './toilet_reducer';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

export default combineReducers({
    toilets: toiletReducers,
    session: sessionReducer,

})
