//Redux
import { combineReducers } from 'redux';
//Reducers
import search from './searchReducer';
import table from './tableReducer';

const rootReducer = combineReducers({
    search,
    table
});

export default rootReducer;