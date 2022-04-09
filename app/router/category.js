const router = require("express").Router();
const { CategoryController } = require("../http/controllers/category.controller");

router.post("/createCat",CategoryController.createCategory)
router.post("/getCat",CategoryController.getCategoryById)
router.post("/getChild",CategoryController.getChild)
router.post("/getAllParent",CategoryController.getAllParents)
router.post("/getAll",CategoryController.getAllCategorys)



module.exports = {
    categoryRouter : router
}