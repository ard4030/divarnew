const { authRouter } = require("./auth")
const { categoryRouter } = require("./category")
const { cityRouter } = require("./city")
const { newRouter } = require("./new")
const { productRouter } = require("./product")
const { statuRouter } = require("./statu")
const { typeProdRouter } = require("./typeProd")
const {adminRouter} = require("./admin")
const { payRouter } = require("./pay")

const router = require("express").Router()
router.use("/auth",authRouter)
router.use("/product",productRouter)
router.use("/cat",categoryRouter)
router.use("/new",newRouter)
router.use("/city",cityRouter)
router.use("/type",typeProdRouter)
router.use("/statu",statuRouter)
router.use("/admin",adminRouter)
router.use("/pay",payRouter)



module.exports = {
    AllRoutes : router
}