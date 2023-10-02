const Sequelize = require("sequelize");

//local development db
const sequelize = new Sequelize('q-shop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize
