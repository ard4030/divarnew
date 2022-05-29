const router = require("express").Router();
const { PayController } = require("../http/controllers/pay.controllers");
const { checkLogin } = require("../http/middlewares/autoLogin");

router.post("/productPay",checkLogin,PayController.payProduct)
router.post("/payVerify",checkLogin,PayController.payVerify)
router.post("/getPays",checkLogin,PayController.getPays)



module.exports = {
    payRouter : router
}