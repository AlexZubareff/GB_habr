'use strict';
const {
  Model
} = require('sequelize');

 const User = require('./User');
 const Role = require('./Role');


module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  UserRole.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserRole',
    timestamps: false,
  });
  return UserRole;
};