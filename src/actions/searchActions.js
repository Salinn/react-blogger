import * as types from './actionTypes';
import * as patterns from '../utils/regexPatterns';

//RULES FOR TEXT INPUT
const patternMatcher = ( { value, pattern } ) => {
    const defaultReturn = {isError: false, errorMessage: ''};
    const emailPattern = "(.+)@(.+){2,}\.(.+){2,}";
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

const inputValueValidation = ( {name, value, required, pattern} ) => {
    if (required && value === ''){
        return {isError: true, errorMessage: `The ${name} field cannot be blank.` };
    }

    return patternMatcher( { value, pattern, } )
};

//UPDATING TEXT VALUE
const inputValueUpdated = ( { name, value, isError, errorMessage } ) => {
    return { type: types.INPUT_VALUE_UPDATED, name, value, isError, errorMessage }
};

export const inputValueChanged = ( { name, value, required, pattern } ) => dispatch => {
    const { isError, errorMessage } = inputValueValidation( {name, value, required, pattern} );
    dispatch( inputValueUpdated( { name, value, isError, errorMessage } ) );
};

//INITIALIZING FIELDS
export const initializeFields = ( { textInputFields } ) => {
    let fields = {};
    textInputFields.map( row => {
        fields[row.name] = { value: '', isError: false, errorMessage: '', }
    });
    return {type: types.INITIALIZE_FIELDS, fields};
};