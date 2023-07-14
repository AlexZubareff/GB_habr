'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    about_me: DataTypes.TEXT,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Profile',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  return Profile;
};