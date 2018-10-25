import {combineReducers} from 'redux';
import mapsReducer from './maps_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
    maps: mapsReducer,
    modal: modalReducer
})