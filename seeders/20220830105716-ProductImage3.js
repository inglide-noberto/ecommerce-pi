'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 3,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011698661630113/game-jogo-forza-horizon-5-xbox-pi-digital-house.png',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
