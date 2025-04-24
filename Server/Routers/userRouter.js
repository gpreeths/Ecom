const express=require('express')
const userRoute=express.Router()
const userController= require("../Controllers/userControllers")
const auth= require('../middlewares/userAuth')

userRoute.post("/signup",userController.signup)
userRoute.post("/login",userController.login)
userRoute.get("/home",auth,userController.home)

userRoute.patch("/updateisingparams/:id",userController.updateisingparams)



module.exports=userRoute

