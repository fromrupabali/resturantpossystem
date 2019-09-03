const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Company = require('../../models/company/company');

exports.createCompany = async(req, res, next) => {
    try{
        const existingEmail = await Company.findOne({ email: req.body.email });
        if(existingEmail){
            res.status(500).json({
                message:"Email already exists."
            });
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const company = new Company({
           _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hashPassword,
            companyName: req.body.companyName,
            country: req.body.country
        });
        console.log(company);
        await company.save();
        res.status(200).json({
            company
        })
    }catch(err){
        console.log(err);
        res.status(500).json({            
            message:"Something went wrong"
        })
    }
};

exports.get_all_company = async(req, res, next) => {
       try {
           const companies = await Company.find();
           res.status(200).json({
               companies
           });
       } catch (error) {
           throw error;
       };
};

exports.update_company = async (req, res, next) => {
    try {
        const id = req.params.companyId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        };

        const result = await Company.updateOne({_id: id}, { $set: updateOps});
        res.status(200).json({
             result
        });
    } catch (error) {
         throw error;
    };
};

exports.delete_company = async(req, res, next) => {
    try {
        const id = req.params.companyId;
        const company = await Company.findById(id);
        if(!company){
            res.status(500).json({
                message:"Entry not found"
            })
        }
        await company.remove();

        res.status(200).json({
            message:"Company deleted successfully"
        });
    } catch (error) {
        throw err;
    }
}