var Customer = require('../models/customer-model.js');

exports.create = function(req,res) {
    var newCustomer = new Customer(req.body);
    newCustomer.save(function(error) {
        if(error) {
            res.json({message:'Error while creating customer', error: error});
        } else {
            res.json({message: 'Customer created successfully'});
        }
    });   
};

exports.list = function(req,res) {
    Customer.find(function(error, customers) {
        if(error) {
            res.json({message: 'Error during find', error: error});
        } else {
            if(customers.length) {
                res.json({message: 'Customer found', data: customers});
            } else {
                res.json({message: 'No Customers found'});
            }
        }
    });
};

exports.find = function() {
    Customer.find({'customerId' : req.params.customerId}, function(error, customer) {
        if(error) {
            res.json({message: 'Error searching for customer', error: error});
        }
        if(service) {   
            res.json({message: 'Customer found', data: service});
        } else {
            res.json({message: 'Customer not found'});
        }
    });
};

exports.update = function() {
    Customer.updateOne({'customerId': req.params.customerId}, {$set: req.body}, function(error, result) {
        if(error) {
            res.json({message: 'Error updating customer'});
        } 
        if(result) {
            res.json({message: 'Customer updated successfully', data: result});
        } else {
            res.json({message: 'Customer not found'});
        }
    });
};

exports.delete = function() {
    Customer.findOneAndDelete(req.params.id, function(error) {
        if(error) {
            res.json({message: 'Error deleting', error: error});
        } else {
            res.json({message: 'Customer deleted successfully'});
        }
    });
};

exports.test = function(req, res) {
    res.send('Customer routes working');
};