import * as types from './actionTypes';
import * as patterns from '../utils/regexPatterns';

//RULES FOR TEXT INPUT
const inputValueValidation = ( {name, value, required, pattern} ) => {
    let isError = false;
    let errorMessage = '';

    if (required && value === ''){
        return {isError: true, errorMessage: `The ${name} field cannot be blank.` };
    }

    return patternMatcher( { value, pattern } )
};

const patternMatcher = ( { value, pattern } ) => {
    const defaultReturn = {isError: false, errorMessage: ''};
    const emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    const passwordPattern = "";

    switch (pattern) {
        case patterns.EMAIL:
            if(value.match(emailPattern) === null ){
                return {isError: true, errorMessage: 'You must input a valid email'};
            } else {
                return defaultReturn;
            }
        case patterns.PASSWORD:
            if (value.length < 6) {
                return {isError: true, errorMessage: 'Your password is to short'};
            }
            if (value.length > 20 && value.length > 6) {
                return {isError: true, errorMessage: 'Your password is to long'};
            } else {
                return defaultReturn;
            }
        default:
            return defaultReturn;
    }
};

//UPDATING TEXT VALUE
const inputValueUpdated = ( { name, value, isError, errorMessage } ) => {
    return { type: types.INPUT_VALUE_UPDATED, name, value, isError, errorMessage }
};

export const inputValueChanged = ( { name, value, required, pattern } ) => dispatch => {
    const { isError, errorMessage } = inputValueValidation( {name, value, required, pattern} );
    dispatch( inputValueUpdated( { name, value, isError, errorMessage } ) );
};