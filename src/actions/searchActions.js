import * as types from './actionTypes';

//RULES FOR TEXT INPUT
const inputValueValidation = ( {name, value, required, pattern} ) => {
    let isError = false;
    let errorMessage = '';

    if (required && value === ''){
        return {isError: true, errorMessage: `The ${name} field cannot be blank.` };
    }

    return {isError, errorMessage}
};

//UPDATING TEXT VALUE
const inputValueUpdated = ( { name, value, isError, errorMessage } ) => {
    return { type: types.INPUT_VALUE_UPDATED, name, value, isError, errorMessage }
};

export const inputValueChanged = ( { name, value, required, pattern } ) => dispatch => {
    const { isError, errorMessage } = inputValueValidation( {name, value, required, pattern} );
    dispatch( inputValueUpdated( { name, value, isError, errorMessage } ) );
};