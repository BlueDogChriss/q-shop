module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', 
    {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        profilePicture: DataTypes.STRING,
    }, {
        underscored: true,
        freezeTableName: true
    })
}
