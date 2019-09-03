const mongoose = require('mongoose');

const expenceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: {type: String},
    store:{type: mongoose.Schema.Types.ObjectId},
    reference:{type: String},
    amount:{type: Number},
    createdBy:{type: String}
});

module.exports = mongoose.model('Expence', expenceSchema);