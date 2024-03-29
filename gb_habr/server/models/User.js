'use strict';
const { Model } = require('sequelize');
// const Article = require('./Article');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Article, 
        { 
        foreignKey: {
          name: 'user_id',
          type: DataTypes.INTEGER
        }}
        );
      models.Article.belongsTo(User,{ 
        foreignKey: {
          name: 'user_id',
          type: DataTypes.INTEGER
        }}
      );

      User.belongsToMany(models.Role, { through: 'UserRole'});

      User.hasMany(models.Comment,
        {
          foreignKey: {
            name: 'user_id',
            type: DataTypes.INTEGER
          }
        }
      );
      models.Comment.belongsTo(User, {
        foreignKey: {
          name: 'user_id',
          type: DataTypes.INTEGER
        }
      }
      );
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: {
    type: DataTypes.STRING,
    defaultValue: '../images/news/author_no_avatar.png'
    },
    token: DataTypes.STRING,
    role_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 1
    }
  },{
    sequelize,
    modelName: 'User',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  return User;
};