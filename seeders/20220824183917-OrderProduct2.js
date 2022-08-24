'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderProducts', [{
      id_order: 1,
      id_product: 2,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderProducts', null, {});
  }
};
