const router = require("express").Router();
const { productValidator } = require("../http/validations/product");
const {expressValidatorMapper} = require("../http/middlewares/checkErrors")
const { ProductController } = require("../http/controllers/product.controller");
const {checkLogin} = require("../http/middlewares/autoLogin")

router.post("/getProduct",checkLogin,ProductController.getProduct)
router.post("/createProduct",checkLogin,productValidator(),expressValidatorMapper,ProductController.createProduct)
router.post("/getProductUserOk",checkLogin,ProductController.getProductUserOk)
router.post("/getProductUserTest",checkLogin,ProductController.getProductUserTest)
router.post("/getProductUserWaitPay",checkLogin,ProductController.getProductUserWaitPay)
router.post("/getProductUserPayOk",checkLogin,ProductController.getProductUserPayOk)
router.post("/getProductUserForReview",checkLogin,ProductController.getProductUserForReview)
router.post("/getProductUserFailed",checkLogin,ProductController.getProductUserFailed)
router.post("/getProductUserTimeOut",checkLogin,ProductController.getProductUserTimeOut)
router.post("/getProductById",checkLogin,ProductController.getProductById)
router.post("/getAllProductCount",checkLogin,ProductController.getAllProductCount)
router.post("/getAllProduct",checkLogin,ProductController.getAllProduct)
router.post("/getProductsOnAdmin",checkLogin,ProductController.getProductsOnAdmin)
router.post("/updateProductOnAdmin",checkLogin,ProductController.updateProductOnAdmin)
router.post("/updateProductStatus",checkLogin,ProductController.updateProductStatus)
router.post("/getAllProductUser",checkLogin,ProductController.getAllProductUser)
router.post("/updateProduct",checkLogin,ProductController.updateProduct)




















module.exports = {
    productRouter : router
}