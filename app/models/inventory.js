module.exports = function (sequelize, DataTypes) {
    var inventory = sequelize.define("inventory", {

        category: {
            type: DataTypes.STRING,
            defaultValue: "dallas"
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: null

        },
        make: {
            type: DataTypes.STRING,
            defaultValue: null

        },
        type: {
            type: DataTypes.STRING,
            defaultValue: null

        },
        year: {
            type: DataTypes.INTEGER,
            defaultValue: null

        },
        invComm: {
            type: DataTypes.TEXT,
            defaultValue: null

        }
    });

    return inventory;
};