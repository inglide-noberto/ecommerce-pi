'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 1,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011695461367868/game-jogo-minecraft-xbox-pi-digital-house-2.png',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
