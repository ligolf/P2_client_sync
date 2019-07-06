module.exports = function (sequelize, DataTypes) {
    var inventory = sequelize.define("inventory", {
        text: DataTypes.STRING,

    });
    return inventory;
};