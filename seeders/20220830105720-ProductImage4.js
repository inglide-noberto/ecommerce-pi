'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 4,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011699005567046/game-jogo-horizon-forbidden-west-playstation-ps-pi-digital-house.png',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
