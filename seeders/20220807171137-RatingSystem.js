'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RatingSystems', [{
      title: 'Livre',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RatingSystems', null, {});
  }
};
