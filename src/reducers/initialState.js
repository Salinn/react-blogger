const emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
const passwordPattern = "";
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
            { id: 1, name: 'email', label: 'Email', type: 'email', placeholder: 'johnSmith@gmail.com', required: true, pattern: emailPattern },
            { id: 2, name: 'password', label: 'Password', type: 'password', placeholder: '********', required: true, pattern: passwordPattern },
        ]
    },
}

