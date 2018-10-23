import {combineReducers} from 'redux';
import mapsReducer from './maps_reducer';

export default combineReducers({
    maps: mapsReducer,
})