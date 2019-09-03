const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: {type: Number, required: true},
    productName:{ type: String, required: true},
    productImage:{type: String},
    description:{type: String},
    tax:{type: Number, default: 0},
    price:{type: String, required: true},
    ingridients:[
        {name: {type: String}}
    ],
    store:{type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Product', productSchema);