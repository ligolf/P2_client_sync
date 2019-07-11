module.exports = function (sequelize, DataTypes) {
    var contacts = sequelize.define("contacts", {
        profession: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        phone: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        conComm: {
            type: DataTypes.TEXT,
            defaultValue: null
        }

    });
    return contacts;
};