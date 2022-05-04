const router = require("express").Router();
const { AdminController } = require("../http/controllers/admin.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");

router.post("/getInventory",checkLogin,AdminController.getInventory) 



module.exports = {
    adminRouter : router
}