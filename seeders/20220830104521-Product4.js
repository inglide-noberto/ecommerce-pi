'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      title: 'Horizon Forbidden West PS5',
      slug:  'horizon-forbidden-west-ps5',
      price: 11,
      promotional_price_status: true,
      promotional_price: 8.6,
      brand: 'Eletronic Arts',
      year: 2021,
      id_type_product: 1,
      plataform: 'X-box',
      short_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes. Sed ut perspiciatis',
      full_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes. Sed ut perspiciatis.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
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
