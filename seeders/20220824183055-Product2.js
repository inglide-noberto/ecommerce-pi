'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      title: 'Battlefield 2043',
      slug:  'battlefield-2043',
      price: 11,
      promotional_price_status: true,
      promotional_price: 8.6,
      brand: 'Eletronic Arts',
      year: 2021,
      id_type_product: 1,
      plataform: 'PC',
      short_description: '',
      full_description: '',
      id_rating_system: 1,
      id_product_status: 1,
      quantity_stock: 1,
      weight: 1,
      formart: 1,
      length: 1,
      width: 1,
      diameter: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
