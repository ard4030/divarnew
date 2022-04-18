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








module.exports = {
    productRouter : router
}