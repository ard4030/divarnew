const { authRouter } = require("./auth")
const { categoryRouter } = require("./category")
const { cityRouter } = require("./city")
const { newRouter } = require("./new")
const { productRouter } = require("./product")
const { statuRouter } = require("./statu")
const { typeProdRouter } = require("./typeProd")

const router = require("express").Router()
router.use("/auth",authRouter)
router.use("/product",productRouter)
router.use("/cat",categoryRouter)
router.use("/new",newRouter)
router.use("/city",cityRouter)
router.use("/type",typeProdRouter)
router.use("/statu",statuRouter)






module.exports = {
    AllRoutes : router
}