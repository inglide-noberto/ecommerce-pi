'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      title: 'Minecraft Java',
      slug:  'minecreft-java-edition',
      price: 10,
      promotional_price_status: true,
      promotional_price: 5.4,
      brand: 'Mojang',
      year: 2022,
      id_type_product: 1,
      plataform: 'PC',
      short_description: '',
      full_description: '',
      id_rating_system: 1,
      id_product_status: 1,
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
