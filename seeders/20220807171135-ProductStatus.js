'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductStatuses', [{
      title: 'Ativo',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductStatuses', null, {});
  }
};
