'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Users', 'role_id', {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: '1'
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'role_id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false

    })
  }
};