'use strict';

const { faker } = require('@faker-js/faker');


const users = [Array(20)].map((user)=>(
  {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(10),
    createdAt: new Date(),
    updatedAt: new Date()
  }
));
console.log(users);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
