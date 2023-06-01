const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
    {
        id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        cmmnt: { type: DataTypes.STRING, allowNull: false,},
        cmmnt_made: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
        user_id: { type: DataTypes.INTEGER, references: { model: 'user', key: 'id'}},
        post_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'post', key: 'id'}}
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    }
);

module.exports = Comment;