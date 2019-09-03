const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
     name: { type: String},
     phone:{ type: Number},
     email:{ type: String},
     discount:{ type: Number},
     createdAt:{ type: String},
     store:{type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Customer', customerSchema);