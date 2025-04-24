

const mongoose=require('mongoose')
// const User=mongoose.model('User',{name:String,password:String,email:String})

// module.exports=User

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('User',userSchema)
