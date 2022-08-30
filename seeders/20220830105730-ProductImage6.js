'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 6,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011699353682032/game-jogo-horizon-zero-dawn-playstation-ps-pi-digital-house.png',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
