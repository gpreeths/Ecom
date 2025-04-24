const express= require('express')
const productRouter=express.Router();
const productController= require("../Controllers/productController")
const cartController=require("../Controllers/cartController")
const upload=require('../middlewares/image')
const auth=require('../middlewares/userAuth')

productRouter.post('/addproduct',upload.single('image'),productController.createProduct)
productRouter.get('/getproduct',productController.getproduct)
productRouter.post('/addtocart',auth,cartController.addToCart)

module.exports=productRouter;