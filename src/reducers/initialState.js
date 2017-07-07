import * as patterns from '../utils/regexPatterns';
import * as types from '../utils/inputTypes';
export default {
    search: {
        meta: {},
        fields: {
            email: {
                value: '',
                isError: false,
                errorMessage: '',
            },
            password: {
                value: '',
                isError: false,
                errorMessage: '',
            }
        },
        userInfo: [],
        textInputFields: [
            { id: 1, name: 'email', label: 'Email', type: types.TEXT, placeholder: 'johnSmith@gmail.com', required: true, pattern: patterns.EMAIL },
            { id: 2, name: 'password', label: 'Password', type: types.TEXT, placeholder: '********', required: true, pattern: patterns.PASSWORD },
            { id: 3, name: 'birthday', label: 'Birthday', type: types.DATEPICKER, placeholder: '', required: false, pattern: patterns.NONE },
        ]
    },
    table: {
        columns: [
            { label: 'Name', dataName: 'name', inUse: true },
            { label: 'Age', dataName: 'name', inUse: true },
            { label: 'Friend Name', dataName: 'friendName', inUse: false },
            { label: 'Friend Age', dataName: 'friendAge', inUse: false },
        ]
    }
}

