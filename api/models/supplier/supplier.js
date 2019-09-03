const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String},
    phone:{type: String},
    email:{type: String},
    createdAt: {type: String},
    store:{type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('suplierSchema', supplierSchema);
