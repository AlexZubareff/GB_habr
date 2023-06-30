'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: {
          name: 'user_id',
          type: DataTypes.INTEGER
        }
      }
      );

      Comment.belongsTo(models.Article, {
        foreignKey: {
          name: 'article_id',
          type: DataTypes.INTEGER
        }
      }
      );


    }
  }
  Comment.init({
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    status: DataTypes.ENUM('published','draft','pending','deleted')
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};