module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {

        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        profilePicture: DataTypes.STRING,
    }, {
        underscored: true,
        freezeTableName: true
    })
}
