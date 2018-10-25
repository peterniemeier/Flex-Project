import toiletReducers from './toilet_reducer';
import commentReducers from './comments_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    toilets: toiletReducers,
})
