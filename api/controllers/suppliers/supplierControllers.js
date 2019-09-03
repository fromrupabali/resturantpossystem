const mongoose = require('mongoose');

const Supplier = require('../../models/supplier/supplier');

exports.createSupplier = async(req, res, next) => {
    try{ 
        const supplier = new Supplier({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            store:req.body.storeId,
            createdAt: new Date().toISOString()
        });
        await supplier.save();
        res.status(200).json({
            supplier
        });
        
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        });
    };
};

exports.get_all_supplier = async (req, res, next) => {
    try {
        const id = req.params.storeId;
        const suppliers = await Supplier.find({ store : id});
        res.status(200).json({
            suppliers
        });
    } catch (error) {
        throw error;
    };
};

exports.deleteSupplier = async(req, res, next) => {
    try {
        const id = req.params.supplierId;
        const supplier = await Supplier.findById(id);
        if(!supplier){
            res.status(404).json({
                message:"Entries not found"
            });
        };
        await supplier.remove();
        res.status(200).json({
            message:"Deleted successfully"
        });
    } catch (error) {
        throw err;
    };
};


exports.updateSupplier = async(req, res, next) => {
    try {
        const id = req.params.supplierId;
        const updateOps = {};

        for(const ops of req.body){
            updateOps[ops.propName] = ops.value;
        }

        const result = await Supplier.updateOne({ _id: id }, { $set: updateOps });
        res.status(200).json({
            message:'Updated successfully',
            result
        });
    } catch (error) {
        throw error;
    };
};