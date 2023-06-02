const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Picture extends Model{}

Picture.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    mime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    }

},
{
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'picture',
});

module.exports = Picture;