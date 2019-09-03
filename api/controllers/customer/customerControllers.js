const express = require('express');
const mongoose = require('mongoose');
const Customer = require('../../models/customer/customer');

exports.create_customer = async (req, res, next) => {
    try {
        const customer = new Customer({
            _id: new mongoose.Types.ObjectId(),
             name: req.body.name,
             phone: req.body.phone,
             email: req.body.email,
             discount: req.body.discount,
             cretaedAt: new Date().toISOString(),
             store: req.body.storeId
        });

        await customer.save();

        res.status(200).json({
            customer
        });
    } catch (error) {
        throw error;
    };
};

exports.get_all_customers = async (req, res, next) => {
    try {
        const id = req.params.storeId;
        const customers = await Customer.find({store: id});
        res.status(200).json({
            customers
        });
    } catch (error) {
        throw error;
    };
};

exports.delete_customer = async (req, res, next) => {
    try {
        const id = req.params.customerId;
        const customer = await Customer.findById(id);
        if(!customer){
            res.status(404).json({
                message:"Entry not found"
            })
        }
        await customer.remove();
        res.status(200).json({
            message:"Customer deleted successfully"
        });
    } catch (error) {
        throw error;
    };
};

exports.update_customer = async (req, res, next) => {
    try {
        const id = req.params.customerId;

        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value
        }
        const result = await Customer.updateOne({ _id: id }, { $set: updateOps });
        res.status(200).json({
            message: "Updated sucessfully",
            result
        });
    } catch (error) {
        throw error;
    };
};