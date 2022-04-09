const router = require("express").Router();
const { productValidator } = require("../http/validations/product");
const {expressValidatorMapper} = require("../http/middlewares/checkErrors")
const { ProductController } = require("../http/controllers/product.controller");
const {checkLogin} = require("../http/middlewares/autoLogin")

router.post("/getProduct",checkLogin,ProductController.getProduct)
router.post("/createProduct",checkLogin,productValidator(),expressValidatorMapper,ProductController.createProduct)


module.exports = {
    productRouter : router
}