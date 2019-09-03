const mongoose = require('mongoose');

const Product = require('../../models/product/product');

exports.create_product = async(req, res, next) => {
   try {
       console.log(req.file);
       const product = new Product({
           _id: new mongoose.Types.ObjectId(),
           code: req.body.code,
           productName: req.body.productName,
           description: req.body.description,
           tax: req.body.tax,
           price: req.body.price,
           store: req.body.storeId
       });
       await product.save();
       res.status(200).json({
           product
       });
   } catch (error) {
       throw error;
   };
};

exports.get_all_products = async(req, res, next)=> {
    try {
        const products = await Product.find();
        res.status(200).json({
            products
        })
    } catch (error) {
        throw error;
    }
} 
exports.update_product = async (req, res, next) =>{
    try {
        const id = req.params.productId;
        const updateOps = {};

        for(const ops of req.body){
            updateOps[ops.propName] = ops.value
        }
        const result = await Product.updateOne({_id: id}, {$set: updateOps});
        res.status(200).json({
            message:"Updated sucessfully",
            result
        })
    } catch (error) {
        throw error;
    };
};

exports.delete_product = async(req, res, next) =>{
    try{
       const id = req.params.productId;
       const product = await Product.findById(id);
       
       if(!product){
           res.status(404).json({
               message:"Entry not found"
           });
       }
       
       await product.remove();
       res.status(200).json({
          message:"Product deleted sucessfully"
       });
    }catch(err){
        throw error;
    };
};