const mongoose = require('mongoose');

const Store = require('../../models/store/store');


exports.createStore = async ( req, res, next) => {
    try{
        const store = new Store({
            _id: new mongoose.Types.ObjectId(),
            companyId: req.body.companyId,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            city: req.body.city,
            area: req.body.area,
            ReciptFooterText: req.body.reciptTxt
        });

        await store.save();
        res.status(200).json({
            store
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        });
    };
};

exports.get_all_store = async(req, res, next) => {
    try{
        const id = req.params.companyId;
        const stores = await Store.find({companyId: id});
        res.status(200).json({
            stores
        });
    }catch(err){
        res.status(500).json({
            message: "Something went wrong"
        });
    };
};

exports.get_single_store = async(req, res, next) => {
    try {
        const id = req.params.storeId;
        const store = await Store.findById(id);
        if(!store){
            res.status(404).json({
                message:"Entry not found"
            });
        }
        res.status(200).json({
            store
        });
    } catch (error) {
        throw error;
    };
};

exports.delete_store = async (req, res, next) => {
    try {
        const id = req.params.storeId;
        const store = await Store.findById(id);
        if(!store){
            res.status(404).json({
                message: 'Entry not found'
            });
        };

        await store.remove();
        res.status(200).json({
            message:"Store deleted sucessfully"
        })

    } catch (error) {
        throw error;
    };
};


exports.update_store = async (req, res, next) => {
    try {
        const id = req.params.storeId;

        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value
        }
        const result = await Store.updateOne({ _id: id }, { $set: updateOps });
        res.status(200).json({
            message: "Updated sucessfully",
            result
        });
    } catch (error) {
        throw error;
    };
};
