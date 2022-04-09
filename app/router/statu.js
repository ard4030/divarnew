const router = require("express").Router();
const { StatuController } = require("../http/controllers/statu.controller");

router.post("/getAll",StatuController.getAllStatus)
router.post("/create",StatuController.createStatu)


module.exports = {
    statuRouter : router
}