'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Articles_Category.hasMany(models.Article,
        {
          foreignKey: {
            name: 'category_id',
            type: DataTypes.INTEGER
          }
        }
        );
    }
    
  }
  Articles_Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Articles_Category',
  });
  return Articles_Category;
};