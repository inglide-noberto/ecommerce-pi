const AdressRepository = require("../models/AddressModel")
const CategoryRepository = require("../models/CategoryModel")
const CompanyRepository = require("../models/CompanyModel")
const CourierRepository = require("../models/CourierModel")
const OrderRepository = require("../models/OrderModel")
const OrderProductRepository = require("../models/OrderProductModel")
const OrderStatusRepository = require("../models/OrderStatusModel")
const PaymentMethodRepository = require("../models/PaymentMethodModel")
const ProductCategoryRepository = require("../models/ProductCategoryModel")
const ProductImageRepository = require("../models/ProductImageModel")
const ProductRepository = require("../models/ProductModel")
const ProductStatusRepository = require("../models/ProductStatusModel")
const RatingSystemRepository = require("../models/RatingSystemModel")
const TagRepository = require("../models/TagModel")
const TagProductRepository = require("../models/TagProductModel")
const TypeProductRepository = require("../models/TypeProductModel")
const UserRepository = require("../models/UserModel")

const TestaBancoController = {
    testaConexoes: (req, res) => {

        const arrayDb = [AdressRepository, CategoryRepository, CompanyRepository, CourierRepository, OrderRepository, OrderProductRepository, OrderStatusRepository, PaymentMethodRepository, ProductCategoryRepository, ProductImageRepository, ProductRepository, ProductStatusRepository, RatingSystemRepository, TagRepository, TagProductRepository, TypeProductRepository, UserRepository]


        arrayDb.forEach(async (db) => {
            const dbReturn = await db.findAll();
            console.log('--------------------------');
            console.log(dbReturn);
        })

        return res.send('Oi')
    }
}

module.exports = TestaBancoController