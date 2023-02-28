const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');

class User extends Model {}

// here we'll define table columns, configurations
User.init(
    {
// ID COLUMN
        id: {
            
            type: DataTypes.INTEGER,
            //  `NOT NULL` option
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
// USERNAME COLUMN
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicate emails!
            unique: true,
            validate: {
                isEmail: true}
            },

// PASSWORD COLUMN
        password: {
            type: DataTypes.STRING, allowNull: false, validate: {
                len: [4]
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    });





module.exports = User;