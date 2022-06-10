'use strict';

const { faker } = require('@faker-js/faker');
// const fakeName = faker.name.findName();
// const fakeEmail = faker.internet.email();
const fakeApresentacao = faker.fake('This is static test.')

let seed = [];
for (let index = 0; index < 10; index++) {
  seed.push(
    {
      nome: faker.name.findName(),
      email: faker.internet.email(),
      apresentacao: fakeApresentacao,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  );
  
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Psicologo', seed)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
