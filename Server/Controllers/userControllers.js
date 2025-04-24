const User = require("../Model/userModel")
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken');
const  mongoose  = require("mongoose");
require("dotenv").config()


const signup = async (req, res) => {

    const {name,email,password} = req.body

    const exist = await User.findOne({email})
    console.log(exist);

    if (exist) {
        res.send("already exist")
    }
    else {
        const hashedpassword = await bcrypt.hash(password, 10)
        const nuser = new User({ name, password: hashedpassword, email})
        nuser.save().then(() => { console.log("user added to db") }
        )
        res.end("done")
    }


}

const login = async (req, res) => {



    const emailexist = await User.findOne({ email: req.body.email })
    if (emailexist) {
        const passexist = await bcrypt.compare(req.body.password, emailexist.password)
        if (passexist) {
            var token = jwt.sign({ name: passexist.name,id:passexist.id }, process.env.JWT_SECRET,{expiresIn:'1h'});
            res.status(200).json({message:"login sucessful",token})
        }
        else {
            return res.json({message:"pssword incorrect"})
        }
    }
    else {
        return res.json({message:"user doesnt exist"})
    }
}

const update = async (req, res) => {
    

    const exist = await User.findOneAndUpdate({ email: req.body.email},{name:req.body.name })
    if (exist) {
        res.end("updated")
    }
    else {
        res.end("user doesnt exist")
    }''
}

const updateisingparams=async(req,res)=>{
    const id = req.params.id
      
       const exist=await User.findByIdAndUpdate(id,{name:req.body.name})
       if (exist) {
           res.end("updated")
       }
       else {
           res.end("user doesnt exist")
       }
   }


//    const updateisingparams = async (req, res) => {
//     try {
//       const exist = await User.findByIdAndUpdate(
//         req.params.id,                      // ✅ correct usage
//         { name: req.body.name },
//         { new: true }                       // optional: return the updated document
//       );
  
//       if (exist) {
//         res.end("updated");
//       } else {
//         res.end("user doesn't exist");
//       }
//     } catch (error) {
//       console.error("Update failed:", error);
//       res.status(500).end("Internal server error");
//     }
//   };

function home(req,res){
    console.log('home');
    res.json({data:"products",user:req.user})
    
}
  
    module.exports = { signup, login, update,updateisingparams,home }