const UserModel = require('../../models').User

let validate ={

    register: async (object) =>{
        let errors = {};
        if(!object.name||!object.surname||!object.email||!object.phone||!object.password){
            errors.emptyFields = "One or many fields must not be empty";
        }
    }
}

module.exports = validate;