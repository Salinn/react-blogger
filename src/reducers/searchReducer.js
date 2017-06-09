//Actions
import * as types from '../actions/actionTypes';
//Initial Data
import initialState from './initialState';
export default function searchReducer(state = initialState.search, action) {
    switch (action.type) {
        case types.INPUT_VALUE_UPDATED:
            const updatedInfo = {value: action.value, isError: action.isError, errorMessage: action.errorMessage};
            return { ...state, fields: {...state.fields, [action.name]:  updatedInfo} };
        default:
            return { ...state };
    }
}