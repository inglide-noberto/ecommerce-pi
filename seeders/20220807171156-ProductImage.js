'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 1,
      file: null,
      file_original_name: 'name-image-here',
      file_ext: '.png'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
