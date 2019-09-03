const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
       _id: mongoose.Schema.Types.ObjectId,
        email: {type: String, required: true},
        password: { type: String, required: true},
        companyName:{ type: String, required: true},
        store:[{type: mongoose.Schema.Types.ObjectId}],
        resturantLogo:{type: String},
        country:{type: String}
});

module.exports = mongoose.model('Company', companySchema);