const Sequelize = require('sequelize')
const database = require('../config/database.js')

const Tag = database.define('Tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: "tag"
})

Tag.associate = (models) => {
    //--------- Está em muitos Product através do TagProducts ---------
    Tag.belongsToMany(models.ProductModel, {
        foreignKey: 'id_product',
        as: 'products',
        through: models.TagProducts
    })
}

module.exports = Tag