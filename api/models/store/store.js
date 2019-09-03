const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyId:{type: mongoose.Schema.Types.ObjectId},
    name:{type: String},
    email:{type: String},
    phone:{type: String},
    country:{type: String},
    city:{type: String},
    area:{type: String},
    ReciptFooterText:{type: String},
    products:[
        {type: mongoose.Schema.Types.ObjectId}
    ],
    customers:[
        {type: mongoose.Schema.Types.ObjectId}
    ],
    suppliers:[
        {type: mongoose.Schema.Types.ObjectId}
    ],
    sales:[
        {type: mongoose.Schema.Types.ObjectId}
    ],
    expences:[
        {type: mongoose.Schema.Types.ObjectId}
    ],
    waiters:[
        {types: mongoose.Schema.Types.ObjectId}
    ]
});

module.exports = new mongoose.model('Store', storeSchema);