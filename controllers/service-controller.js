var _ = require('lodash');
var Service = require('../models/service-model.js');



    exports.create =  function(req, res) {
        var newService = new Service(req.body);
        newService.save(function(error) {
            if(error) {
                res.json({message:'Error while creating service', error: error});
            } else {
                res.json({message: 'Service created successfully'});
            }
        });    
    };

    exports.list = function(req, res) {
        Service.find(function(error, services) {
            if(error) {
                res.json({message: 'Error during find', error: error});
            } else {
                if(services.length) {
                    res.json({message: 'Services found', data: services});
                } else {
                    res.json({message: 'No services found'});
                }
                
            }
        });
    };

    exports.find = function(req, res) {
        Service.find({'serviceId' : req.params.serviceId}, function(error, service) {
            if(error) {
                res.json({message: 'Error searching for service', error: error});
            }
            if(service) {   
                res.json({message: 'Service found successfully', data: service});
            } else {
                res.json({message: 'Service not found'});
            }
        });
    };

    exports.update = function(req, res) {
        Service.updateOne({'serviceId' : req.params.serviceId}, {$set: req.body}, function(error, result) {
            if(error) {
                res.json({message: 'Error searching for service', error: error});
            }
            if(result) {
                res.json({message: 'Service updated succefully'});
            } else {
                res.json({message: 'Service not found'});
            }
        });
    };

    exports.delete = function(req, res) {
        Service.findOneAndDelete(req.params.id, function(error) {
            if(error) {
                res.json({message: 'Error while deleting', error: error});
            } else {
                res.json({message: 'Service deleted successfully'});
            }
        });
    };

    exports.test = function(req, res) {
        res.send('test passed');
    };
