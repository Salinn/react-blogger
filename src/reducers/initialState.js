import * as patterns from '../utils/regexPatterns';
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
        textInputFields: [
            { id: 1, name: 'email', label: 'Email', type: 'email', placeholder: 'johnSmith@gmail.com', required: true, pattern: patterns.EMAIL },
            { id: 2, name: 'password', label: 'Password', type: 'password', placeholder: '********', required: true, pattern: patterns.PASSWORD },
        ]
    },
}

