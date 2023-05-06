'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Articles', 'status', {
      type: Sequelize.ENUM('published','draft','pending','delete'),
      defaultValue: 'pending'
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'role_id', {
      type: Sequelize.ENUM('published','draft','pending','delete'),
      allowNull: false

    })
  }
};
