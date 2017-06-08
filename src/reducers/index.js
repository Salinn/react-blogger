//Redux
import { combineReducers } from 'redux';
//Reducers
import search from './searchReducer';

const rootReducer = combineReducers({
    search
});

export default rootReducer;