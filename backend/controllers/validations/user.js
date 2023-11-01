const UserModel = require('../../models').User

let validate = {

    register: async (object) => {
        let errors = {};
        if (!object.name || !object.surname || !object.email || !object.phone || !object.password) {
            errors.emptyFields = "One or many fields must not be empty";
        }
        if (!object.name.match(/^(?!-)(?!.*--)[A-Za-z-]+(?<!-)$/)
            || !object.surname.match(/^(?!-)(?!.*--)[A-Za-z-]+(?<!-)$/)) {
            errors.invalidInput = "Name and Surname must only contain letters"
        }
        if (!object.email.includes("@gmail.com")) {
            errors.invalidEmail = "Invalid email input, email can only be of @gmail type"
        } else {
            const existentEmail = await UserModel.findOne({ where: { email: object.email } });
            if (existentEmail) {
                errors.existentEmail = "This email is already registered";
            }
        }
        return errors;
    }
}

module.exports = validate;