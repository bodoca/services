var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    serviceId: String,
    name: String,
    description: String,
    serviceType: String,
    price: Number,
    isActive: Boolean,
    createdDate: Date,
    lastModifiedDate: Date
});

module.exports = mongoose.model('Service', serviceSchema);
