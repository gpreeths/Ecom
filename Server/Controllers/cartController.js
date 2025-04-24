const Cart=require('../Model/cartModel')

const addToCart=async(req,res)=>{
    console.log(req.user);
res.send("ji")

}

module.exports={addToCart}