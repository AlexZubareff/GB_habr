'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'avatar', {
      type: Sequelize.STRING
    }),
    await queryInterface.addColumn('Users', 'token', {
      type: Sequelize.STRING
    }),
    await queryInterface.addColumn('Users', 'role_id', {
      type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
await queryInterface.removeColumn('Users', 'avatar'),
await queryInterface.removeColumn('Users', 'token'),
await queryInterface.removeColumn('Users', 'role_id')

  }
};
