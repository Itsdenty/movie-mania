import { combineReducers } from  'redux';

// Reducers
import movieReducer from './movieReducers';
const allReducers = combineReducers({
    movieReducer
})

export default allReducers;