import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import ErrorsReducer from './errors_reducer';


export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer,
    errors: ErrorsReducer
})
