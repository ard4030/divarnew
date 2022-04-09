const router = require("express").Router();
const { TypeProdController } = require("../http/controllers/type.controller");

router.post("/getAll",TypeProdController.getAllTypes)
router.post("/create",TypeProdController.createType)


module.exports = {
    typeProdRouter : router
}