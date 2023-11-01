const Sequelize = require("sequelize");
const db = require("../config").db;

const UsersModel = require("./users");

const users = UsersModel(db, Sequelize);


module.exports = {
    users,
    connection: db,
    //files
};
