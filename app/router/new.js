const router = require("express").Router();
const { NewController } = require("../http/controllers/new.controller");
const { imageValidator } = require("../http/validations/new");
const { uploadMulter } = require("../modules/multer");
const {expressValidatorMapper} = require("../http/middlewares/checkErrors")

router.post("/upload",uploadMulter.single("image"),imageValidator(),expressValidatorMapper,NewController.uploadImage)
router.post("/delete",NewController.deleteImage)
module.exports = {
    newRouter : router
}