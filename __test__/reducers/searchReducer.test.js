import uut from '../../src/reducers/searchReducer';
import * as types from '../../src/actions/ActionTypes';
import initialState from '../../src/reducers/initialState';

const searchInitialState = initialState.search;

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect( uut(undefined, {}) ).toEqual( searchInitialState )
    });

    it('should not affect state', () => {
        expect( uut(initialState, {type: 'NOT_EXISTING'}) ).toEqual( initialState )
    });

    it('should update the field correctly', () => {
        const currentState = { ...searchInitialState, name: 'email' };
        const action = { type: types.INPUT_VALUE_UPDATED };
        const next = uut(currentState, action);

        expect( next ).toEqual( initialState.search )
    });

    it('should add docs to the state', () => {
        const action = { type: types.FETCH_DOCS_SUCCESS, docs: [1,2,3] };
        const next = uut( {...initialState, meta: { ...initialState.meta, loading: true }}, action);

        expect( next ).toEqual( { ...initialState, docs: [1,2,3] } )
    });

    it('should change claims meta data to loading', () => {
        const action = { type: types.FETCH_DOCS_STARTED };
        const next = uut( initialState, action);

        expect( next ).toEqual( { ...initialState, meta: {...initialState.meta, loading: true} } )
    });
});