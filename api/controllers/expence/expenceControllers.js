const mongoose = require('mongoose');

const Expence = require('../../models/expence/expence');

exports.create_expence = async(req, res, next) => {
    try {
        const expence = new Expence({
            _id: new mongoose.Types.ObjectId(),
             date: new Date().toISOString(),
             reference: req.body.reference,
             amount: req.body.amount,
             store: req.body.storeId,
             createdBy: req.body.creator
        });
        await expence.save();
        res.status(200).json({
            expence
        });
    } catch (error) {
        throw error;
    };
};

exports.get_all_expence = async(req, res, next) => {
    try {
        const id = req.params.storeId;
        const expences = await Expence.find({store: id});
        res.status(200).json({
            expences
        });
    } catch (error) {
        throw error;
    };
};

exports.update_expence = async (req, res, next) => {
     try {
         const id = req.params.expenceId;
         
         const updateOps = {};
         for(const ops of req.body){
             updateOps[ops.propName] = ops.value
         }
         const result = await Expence.updateOne({_id: id}, {$set: updateOps});
         res.status(200).json({
             message:"Updated sucessfully",
             result
         });
     } catch (error) {
         throw error;
     };
};

exports.delete_expence = async(req, res, next) => {
    try {
        const id = req.params.expenceId;
        const expence = await Expence.findById(id);
        await expence.remove();
        res.status(200).json({
            message:"Expence deleted successfully"
        });
    } catch (error) {
        throw error;
    };
};