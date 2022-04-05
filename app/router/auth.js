const router = require("express").Router();
const { AuthController } = require("../http/controllers/auth.controller");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { numberValidator } = require("../http/validations/auth");

router.post("/sendsms",numberValidator(),expressValidatorMapper,AuthController.smsSending) 
router.post("/saveNumber",numberValidator(),expressValidatorMapper,AuthController.saveNumber) 



module.exports = {
    authRouter : router
}