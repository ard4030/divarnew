const router = require("express").Router();
const { NewController } = require("../http/controllers/new.controller");
const { imageValidator } = require("../http/validations/new");
const { uploadMulter } = require("../modules/multer");
const {expressValidatorMapper} = require("../http/middlewares/checkErrors");
const { ImageResize } = require("../modules/imageResize");


router.post("/upload",uploadMulter.single("image"),imageValidator(),expressValidatorMapper,ImageResize,NewController.uploadImage)
router.post("/delete",NewController.deleteImage)


module.exports = {
    newRouter : router
}