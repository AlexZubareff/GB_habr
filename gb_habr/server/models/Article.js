'use strict';
const {
  Model
} = require('sequelize');

const User = require('./User');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(models.User,         { 
        foreignKey: {
          name: 'user_id',
          type: DataTypes.INTEGER
        }}
);
    }
  }
  Article.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    tags: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    viewsCount: DataTypes.INTEGER,
    status: DataTypes.ENUM('published','draft','pending','delete'),
    deleted_at: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER.UNSIGNED,
  }, {
    sequelize,
    modelName: 'Article',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    // underscored: true
  });
  return Article;
};