//Actions
import * as types from '../actions/actionTypes';
//Initial Data
import initialState from './initialState';
export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case types.INPUT_VALUE_CHANGE_STARTED:
            return { ...state };
        case types.INPUT_VALUE_CHANGE_SUCCESS:
            return { ...state };
        case types.INPUT_VALUE_CHANGE_FAILED:
            return { ...state };
        default:
            return { ...state };
    }
}