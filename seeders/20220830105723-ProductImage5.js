'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [{
      id_product: 5,
      file_url: 'https://media.discordapp.net/attachments/997292586333110365/1012011696161828965/Metal-gear-solid-v-the-phantom-pain-cover-art-from-konami.webp',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
