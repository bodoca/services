var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    customerId: String,
    userId: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: {company: String, street: String, suburb: String, city: String, postalCode: Number},
    services: [{serviceId: String}],
    isActive: {type: Boolean, default: true},
    dateCreated: {type: Date, default: Date.now},
    dateModified: Date
});

module.exports = mongoose.model('Customer', customerSchema);