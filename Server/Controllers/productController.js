const Product=require('../Model/productModel')


const createProduct=async(req,res)=>{
    try{
        const{name,price,description,stock}=req.body;

        const product=new Product({
            name,price,description,stock,image:req.file.path
        })
        const productData=await product.save()
        res.status(201).json({message:"product created",data:productData})
    }catch(error){
        res.status(500).json({message:"server error",error:error.message})
    }

}

const getproduct=async(req,res)=>{
    try{

        const allprod=await Product.find()
        res.status(200).json(allprod)

    }
    catch(error){
        res.status(500).json({message:"server error",error:error.message})
    }


}

module.exports={createProduct,getproduct}