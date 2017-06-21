//External Libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//Internal Files
import * as actions from '../../src/actions/searchActions';
import * as types from '../../src/actions/ActionTypes';
import * as patterns from '../../src/utils/regexPatterns';
import initialState from '../../src/reducers/initialState';

describe('actions', () => {
    it('should create a field with default values for every text input field', () => {
        const textInputFields = initialState.search.textInputFields;
        const defaultValues = { value: '', isError: false, errorMessage: '' };
        const fields = { email: defaultValues, password: defaultValues };
        const expectedAction = { type: types.INITIALIZE_FIELDS, fields };

        expect(actions.initializeFields( { textInputFields } )).toEqual(expectedAction);
    });
  /*  TODO figure out how to test this
    it('should organize all of the submitted user data', () => {
        const fieldInfo = { email: { value: 'johnSmith@gmail.com' }, password: { value: 'topsecret' } };
        expect(actions.submitUserInfo( { fieldInfo } )).toEqual(false);
    });*/

    it('should return the information the user entered in', () => {
        const userInfo = [ { name: 'email', value: 'johnSmith@gmail.com'}];
        const expectedAction = { type: types.SUBMITTED_USER_INFO, userInfo };

        expect(actions.submittedUserInfo( {userInfo} )).toEqual(expectedAction);
    });

  /*  TODO figure out how to test this
    it('should update the field with the new value', () => {
       const { name, value, required, pattern } = {name: 'email', value: 'john', required: true, pattern: patterns.EMAIL };
       expect(actions.inputValueChanged( { fieldInfo } )).toEqual(false);
    });*/

    it('should update the information about the field', () => {
        const { name, value, isError, errorMessage } = {name: 'email', value: 'john', isError: false, errorMessage:  ''};
        const expectedAction = { type: types.INPUT_VALUE_UPDATED, name, value, isError, errorMessage };

        expect(actions.inputValueUpdated( { name, value, isError, errorMessage } )).toEqual(expectedAction);
    });

    it('should update the isError and errorMessage for the field being empty and required', () => {
        const { name, value, required, pattern } = {name: 'email', value: '', required: true, pattern: patterns.EMAIL};
        const expectedAction = {isError: true, errorMessage: `The ${name} field cannot be blank.` };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });

    it('should return the default return value', () => {
        const { name, value, required, pattern } = {name: 'password', value: 'topsecret', required: true, pattern: patterns.PASSWORD};
        const expectedAction = { isError: false, errorMessage: '' };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });

    it('should return the default return value with no pattern or not being required', () => {
        const { name, value, required, pattern } = {name: 'password', value: '', required: false, pattern: null};
        const expectedAction = { isError: false, errorMessage: '' };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });

    it('should return an error if the password length is to short', () => {
        const { name, value, required, pattern } = {name: 'password', value: 'ao', required: true, pattern: patterns.PASSWORD};
        const expectedAction = { isError: true, errorMessage: 'Your password is to short' };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });

    it('should return an error if the password length is to long', () => {
        const { name, value, required, pattern } = {name: 'password', value: 'abcdefghijklmnopqrstuvwxyz', required: true, pattern: patterns.PASSWORD};
        const expectedAction = { isError: true, errorMessage: 'Your password is to long' };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });

    it('should return an error if the text entered is not a properly formatted email', () => {
        const { name, value, required, pattern } = {name: 'email', value: 'john', required: true, pattern: patterns.EMAIL};
        const expectedAction = { isError: true, errorMessage: 'You must input a valid email' };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });

    it('should return the default return value with a properly formatted email', () => {
        const { name, value, required, pattern } = {name: 'email', value: 'johnSmith@gmail.com', required: true, pattern: patterns.EMAIL};
        const expectedAction = { isError: false, errorMessage: '' };

        expect(actions.inputValueValidation( { name, value, required, pattern } )).toEqual(expectedAction);
    });
});