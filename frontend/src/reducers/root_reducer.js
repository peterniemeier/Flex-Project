import { combineReducers } from 'redux';
// import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session_reducer';

export default combineReducers({
    // entities: entitiesReducer,
    session: sessionReducer,
})