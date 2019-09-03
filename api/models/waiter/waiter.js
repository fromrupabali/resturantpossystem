const mongoose = require('mongoose');

const waiterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String},
    phone:{ type: String},
    email:{ type: String},
    store: {type: mongoose.Schema.Types.ObjectId},
    createdAt: {type: String}
});

module.exports = mongoose.model('Waiter', waiterSchema);