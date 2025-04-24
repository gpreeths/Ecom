const mongoose=require('mongoose')
const cartschema=new mongoose.Schema({
   
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    cartItems:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number,
            required:true
        }}]
        
    })

module.exports=mongoose.model('Productincart',cartschema)