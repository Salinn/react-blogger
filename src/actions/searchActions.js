import * as types from './actionTypes';
import * as patterns from '../utils/regexPatterns';

//RULES FOR TEXT INPUT
export const patternMatcher = ( { value, pattern } ) => {
    const defaultReturn = {isError: false, errorMessage: ''};
    const emailPattern = "(.+)@(.+){2,}\.(.+){2,}";
    const passwordPattern = "";

    switch (pattern) {
        case patterns.EMAIL:
            if(value.match(emailPattern) === null ) {
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

export const inputValueValidation = ( {name, value, required, pattern} ) => {
    if (required && value === ''){
        return {isError: true, errorMessage: `The ${name} field cannot be blank.` };
    }

    return patternMatcher( { value, pattern, } )
};

//UPDATING TEXT VALUE
export const inputValueUpdated = ( { name, value, isError, errorMessage } ) => {
    return { type: types.INPUT_VALUE_UPDATED, name, value, isError, errorMessage }
};

export const inputValueChanged = ( { name, value, required, pattern } ) => dispatch => {
    const { isError, errorMessage } = inputValueValidation( {name, value, required, pattern} );
    dispatch( inputValueUpdated( { name, value, isError, errorMessage } ) );
};

//SUBMIT EMAIL AND PASSWORD
export const submittedUserInfo = ( { userInfo } ) => {
    return { type: types.SUBMITTED_USER_INFO, userInfo }
};

export const submitUserInfo = ( { fieldInfo } ) => dispatch => {
    const userInfo = [];
    for(let key in fieldInfo) {
        if (fieldInfo.hasOwnProperty(key)) {
            console.log(key);
            userInfo.push( { name: key, value: fieldInfo[key].value } );
        }
    }
    dispatch(submittedUserInfo( { userInfo } ))
};

//INITIALIZING FIELDS
export const initializeFields = ( { textInputFields } ) => {
    let fields = {};
    textInputFields.map( row => {
        fields[row.name] = { value: '', isError: false, errorMessage: '', }
    });
    return { type: types.INITIALIZE_FIELDS, fields };
};