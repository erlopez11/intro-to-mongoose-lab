const mongoose = require('mongoose');

// Customer Schema

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

//Compile Schema to Model
const Customer = mongoose.model('Customer', customerSchema);

//Export to othe modules
module.exports = Customer;