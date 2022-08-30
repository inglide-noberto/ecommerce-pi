'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 7,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011694681231533/game-jogo-jedai-fallen-order-xbox-pi-digital-house.png',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
