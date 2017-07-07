//Actions
import * as types from '../actions/actionTypes';
//Initial Data
import initialState from './initialState';
export default function tableReducer(state = initialState.search, action) {
    switch (action.type) {
        default:
            return { ...state };
    }
}