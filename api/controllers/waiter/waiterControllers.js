const mongoose = require('mongoose');

const Waiter = require('../../models/waiter/waiter');

exports.createWaiter = async ( req, res, next) => {
    try{
        const waiter = new Waiter({
            _id: new mongoose.Types.ObjectId(),
             name: req.body.name,
             phone: req.body.phone,
             email: req.body.email,
             store: req.body.storeId,
             createdAt: new Date().toISOString()
        });
        await waiter.save();
        res.status(200).json({
            waiter
        });
    }catch(err){
        res.status(500).json({
            message:" Something went wrong"
        });
    };
};

exports.get_all_waiters = async( req, res, next) => {
    try{
        const id = req.params.storeId;
        const waiters = await Waiter.find({ store: id});
        res.status(200).json({
            waiters
        });
    }catch(err){
        res.status(500).json({
           message:"Something went wrong"
        });
    };
};

exports.delete_waiter = async(req, res, next) => {
    try {
        const id = req.params.waiterId;
        const waiter = await Waiter.findById(id);
        if(!waiter){
            res.status(404).json({
                message:"Entries not found"
            })
        }
        await waiter.remove();
        res.status(200).json({
            message:"Waiter deleted successfully."
        });
    } catch (error) {
        throw err;
    };
};

exports.update_waiter = async(req, res, next) => {
    try {
        const id = req.params.waiterId;
        
        const waiter = await Waiter.findById(id);
        if(!waiter){
            res.status(404).json({
                message:"Entries not found"
            });
        };
        const updateOps = {};
        for(const ops of req.body){
            updateOps[ops.propName] = ops.value
        };

        const result = await Waiter.updateOne({_id: id}, {$set: updateOps});
        res.status(200).json({
            message:"Updated sucessfully",
            result
        });
    } catch (error) {
        throw error;
    };
};