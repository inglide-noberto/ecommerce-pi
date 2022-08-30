'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 8,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1014129122378776606/tribes-of-midgard-ps5-midia-digital-be596d3d.webp',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
