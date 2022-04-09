const router = require("express").Router();
const { CityController } = require("../http/controllers/city.controller");

router.post("/getAll",CityController.getAllCity)
router.post("/create",CityController.createCity)


module.exports = {
    cityRouter : router
}