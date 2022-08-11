'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeProducts', [{
      title: 'Game',
      description: 'Jogos'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeProducts', null, {});
  }
};
