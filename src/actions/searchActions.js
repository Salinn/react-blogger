import * as types from './actionTypes';

//RULES FOR TEXT INPUT
const inputValueValidation = ( {name, value} ) => {
    let isError = false;
    let errorMessage = '';

    return {isError, errorMessage}
};

//UPDATING TEXT VALUE
const inputValueUpdated = ( { name, value, isError, errorMessage } ) => {
    return { type: types.INPUT_VALUE_UPDATED, name, value, isError, errorMessage }
};

export const inputValueChanged = ( { name, value } ) => dispatch => {
    const { isError, errorMessage } = inputValueValidation( {name, value} );
    dispatch( inputValueUpdated( { name, value, isError, errorMessage } ) );
};