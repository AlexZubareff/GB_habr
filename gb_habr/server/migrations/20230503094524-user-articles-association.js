'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Articles', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_id',
      references: {
        table: 'Users',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Articles', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_id',
      references: {
        table: 'Users',
        field: 'id'
      }
    })
  }
};
