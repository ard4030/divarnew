const router = require("express").Router();
const authController = require("../http/controllers/auth.controller");
const { AuthController } = require("../http/controllers/auth.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { numberValidator } = require("../http/validations/auth");

router.post("/sendsms",numberValidator(),expressValidatorMapper,AuthController.smsSending) 
router.post("/saveNumber",numberValidator(),expressValidatorMapper,AuthController.saveNumber) 
router.post("/isLogin",checkLogin,AuthController.checkLog)
router.post("/getProfile",checkLogin,AuthController.getUserProfile)
router.post("/updateProfile",checkLogin,AuthController.updateProfile)
router.post("/saveBookmark",checkLogin,AuthController.saveBookmark)
router.post("/toggleBookmark",checkLogin,AuthController.toggleBookmark)






module.exports = {
    authRouter : router
}