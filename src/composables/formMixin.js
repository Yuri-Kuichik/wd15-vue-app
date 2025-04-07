export const formMixin = {
    methods: {
        switchPasswordType(passwordFieldType) {
            return passwordFieldType === 'password' ? 'text' : 'password';
        },

        sendForm(dataToSend) {
            console.log(dataToSend);
        },

        isFormHasEmptyField(fieldsToCheck) {
            return fieldsToCheck.some(field => !field.length);
        }
    }
};